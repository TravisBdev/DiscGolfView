from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Disc

review_routes = Blueprint('reviews', __name__)