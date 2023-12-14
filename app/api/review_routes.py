from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review, Disc, db
from ..forms import ReviewForm
from datetime import date

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/')
def get_all_reviews():
    """
    Query for all reviews and returns them in a dictionary
    """
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews])


@review_routes.route('/disc/<int:id>')
@login_required
def get_disc_reviews(id):
    """
    Query for all reviews related to a disc
    """
    disc = Disc.query.get(id)
    if disc:
        reviews = [review.to_dict() for review in disc.reviews]
        return jsonify(reviews)
    return jsonify({'errors': 'Disc not found'})



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


@review_routes.route('/discs/<int:id>/new', methods=['GET','POST'])
@login_required
def create_review_for_disc(id):
    """
    Create review for a specific disc
    """
    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        disc = Disc.query.get(id)
        if not disc:
            return jsonify({'errors': 'Disc not found'}), 404
        
        existing_review = Review.query.filter_by(
            user_id = current_user.id,
            disc_id = id
        ).first()

        if existing_review:
            return jsonify({'message': 'You have already reviewed this disc.'})
        
        review = Review(
            user_id = current_user.id,
            review = form.data['review'],
            rating = form.data['rating'],
            created_at = date.today()
        )
        disc.reviews.append(review)
        db.session.commit()
        return jsonify(review.to_dict()), 201
    else:
        return jsonify({'errors': form.errors}), 400
    

@review_routes.route('/<int:id>', methods=['PUT'])
def update_review(id):
    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review.query.filter(Review.id == id, Review.user_id == current_user.id).first()
        if not review:
            return jsonify({'errors': 'Review not found'})
        
        review.review = form.data['review']
        review.rating = form.data['rating']

        db.session.commit()
        return jsonify(review.to_dict()), 200
    return jsonify({'errors': form.errors}), 400


@review_routes.route('/<int:id>', methods=['DELETE'])
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