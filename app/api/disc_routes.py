from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Disc

disc_routes = Blueprint('discs', __name__)


@disc_routes.route('/')
# @login_required
def get_all_discs():
    """
    Query for all discs and returns them in a list of disc dictionaries
    """
    discs = Disc.query.all()
    return {'discs': [disc.to_dict() for disc in discs]}


@disc_routes.route('<int:id>')
# @login_required
def get_one_disc(id):
    """
    Query for a specific disc and returns it as a disc dictionary
    """
    disc = Disc.query.get(id)
    if disc:
        return disc.to_dict()
    return {'errors': 'Disc not found'}


@disc_routes.route('/<int:user_id>/')
# @login_required
def current_user_discs(user_id):
    """
    Query for all discs and returns them in a list of disc dictionaries
    """
    if current_user.id != user_id:
        return {'errors': 'You do not have permission to view this page.'}

    discs = Disc.query.filter(Disc.owner_id == user_id).all()
    return {'discs': [disc.to_dict() for disc in discs]}