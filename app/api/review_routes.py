from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Review, db

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/')
def get_all_reviews():
    """
    Query for all reviews and returns them in a dictionary
    """
    reviews = Review.query.all()
    return jsonify({'reviews': [review.to_dict() for review in reviews]})


@review_routes.route('/current')
@login_required
def get_user_reviews():
    """
    Query for all current user reviews
    """
    user_reviews = Review.query.filter(Review.user_id == current_user.id).all()
    if user_reviews:
        return jsonify([review.to_dict() for review in user_reviews])
    return jsonify({'errors': 'Unable to fetch reviews'})


@review_routes.route('<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    """
    Deletes a review
    """
    review = Review.query.get(id)
    if review:
        db.session.delete(review)
        db.session.commit()
        return jsonify({'message': 'Review deleted successfully'})
    else:
        return jsonify({'errors': 'Could not locate review'})