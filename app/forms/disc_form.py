from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, SelectField, BooleanField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileField, FileAllowed, FileRequired
from api.aws_helpers import ALLOWED_EXTENSIONS


def check_flight_numbers(form, field):
    if field.data < -8 or field.data > 15:
        raise ValidationError('Flight numbers must be between -8 and 15')


class DiscForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    category = SelectField('Category', choices=[
        'Distance Driver', 'Fairway Driver', 'Midrange', 'Putter'], validators=[DataRequired()])
    speed = IntegerField('Speed', validators=[DataRequired()])
    glide = IntegerField('Glide', validators=[DataRequired()])
    turn = IntegerField('Turn', validators=[DataRequired()])
    fade = IntegerField('Fade', validators=[DataRequired()])
    photo_url = FileField('Upload Image', validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])