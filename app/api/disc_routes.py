from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Disc, Review, User
from ..forms import DiscForm
from .auth_routes import validation_errors_to_error_messages
from .aws_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3

disc_routes = Blueprint('discs', __name__)


@disc_routes.route('/')
def get_all_discs():
    """
    Query for all discs and returns them in a list of disc dictionaries
    """
    discs = Disc.query.all()
    return jsonify({'Discs': [disc.to_dict() for disc in discs]})


@disc_routes.route('<int:id>')
@login_required
def get_one_disc(id):
    """
    Query for a specific disc and returns it as a disc dictionary
    """
    disc = Disc.query.get(id)
    if disc:
        return jsonify(disc.to_dict())
    return jsonify({'errors': 'Disc not found'})


@disc_routes.route('/current')
@login_required
def current_user_discs():
    """
    Query for all current user discs and returns them in a list of disc dictionaries
    """
    user_discs = Disc.query.filter(Disc.owner_id == current_user.id).all()
    if user_discs:
        return jsonify([disc.to_dict() for disc in user_discs])
    return jsonify({'errors': 'Unable to fetch discs'})


@disc_routes.route('/new', methods=['GET', 'POST'])
def create_new_disc():
    """
    Creates a new user disc
    """
    form = DiscForm

    form['csrf_token'].data = request.cookies['csrf_token']