from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Disc, Review, db
from ..forms import DiscForm, UpdateDiscForm, ReviewForm
from .auth_routes import validation_errors_to_error_messages
from .aws_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3
from datetime import date

disc_routes = Blueprint('discs', __name__)


@disc_routes.route('/')
def get_all_discs():
    """
    Query for all discs and returns them in a list of disc dictionaries
    """
    discs = Disc.query.all()
    return jsonify([disc.to_dict() for disc in discs])


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


@disc_routes.route('/new', methods=['GET','POST'])
def create_new_disc():
    """
    Creates a new user disc
    """
    form = DiscForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        photo_url = form.data['photo_url']
        photo_url.filename = get_unique_filename(photo_url.filename)
        upload = upload_file_to_s3(photo_url)

        if 'url' not in upload:
            return jsonify({'errors': [upload]})

        new_disc = Disc(
            owner_id = current_user.id,
            name = form.data['name'],
            category = form.data['category'],
            speed = form.data['speed'],
            glide = form.data['glide'],
            turn = form.data['turn'],
            fade = form.data['fade'],
            photo_url = upload['url'],
            created_at = date.today()
        )
        db.session.add(new_disc)
        db.session.commit()
        return jsonify(new_disc.to_dict())
    else:
        return jsonify({'errors': validation_errors_to_error_messages(form.errors)}), 400


@disc_routes.route('/update/<int:id>', methods=['PUT'])
@login_required
def update_disc(id):
    """
    Updates a user disc
    """
    form = UpdateDiscForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
        update_disc = Disc.query.get(id)
        
        if 'photo_url' in request.files and request.files['photo_url']:
            photo_url = request.files['photo_url']
            photo_url.filename = get_unique_filename(photo_url.filename)
            upload = upload_file_to_s3(photo_url)

            if 'url' not in upload:
                return jsonify({'errors': [upload]})

            
            update_disc.photo_url = upload['url']

        
        update_disc.name = form.data['name']
        update_disc.category = form.data['category']
        update_disc.speed = form.data['speed']
        update_disc.glide = form.data['glide']
        update_disc.turn = form.data['turn']
        update_disc.fade = form.data['fade']

        db.session.commit()
        return jsonify(update_disc.to_dict())
    else:
        return jsonify({'errors': validation_errors_to_error_messages(form.errors)}), 400
    

@disc_routes.route('/<int:id>/reviews/new', methods=['GET','POST'])
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
    

@disc_routes.route('/<int:disc_id>/reviews/<int:review_id>', methods=['PUT'])
def update_review(disc_id, review_id):
    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review.query.filter(Review.id == review_id, Review.disc_id == disc_id, Review.user_id == current_user.id).first()
        if not review:
            return jsonify({'errors': 'Review not found'})
        
        review.review = form.data['review']
        review.rating = form.data['rating']

        db.session.commit()
        return jsonify(review.to_dict()), 200
    return jsonify({'errors': form.errors}), 400


    
@disc_routes.route('/<int:id>/reviews')
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



@disc_routes.route('<int:id>')
def get_one_disc(id):
    """
    Query for a specific disc and returns it as a disc dictionary
    """
    disc = Disc.query.get(id)
    if disc:
        return jsonify(disc.to_dict())
    return jsonify({'errors': 'Disc not found'})


@disc_routes.route('<int:id>', methods=['DELETE'])
@login_required
def delete_disc(id):
    """
    Deletes a disc
    """
    disc = Disc.query.get(id)
    file_to__remove = remove_file_from_s3(disc.photo_url)

    if file_to__remove:
        db.session.delete(disc)
        db.session.commit()
        return jsonify({'message': 'Successfully deleted'})
    else:
        return jsonify({'errors': 'Could not locate disc'})
    