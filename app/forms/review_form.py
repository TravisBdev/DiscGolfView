from flask_wtf import FlaskForm
from wtforms import SubmitField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError


def check_limit(form, field):
    review = field.data
    if len(review) < 15:
        raise ValidationError('Review must be greater than 15 characters')
    if len(review) > 1100:
        raise ValidationError('Review must be less than 1100 characters')

class ReviewForm(FlaskForm):
    review = TextAreaField('Review', validators=[DataRequired(), check_limit])
    rating = IntegerField('Rating')
    submit = SubmitField('Submit')