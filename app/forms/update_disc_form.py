from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileField, FileAllowed
from ..api.aws_helpers import ALLOWED_EXTENSIONS


def check_flight_numbers(form, field):
    if field.data < -8 or field.data > 15:
        raise ValidationError('Flight numbers must be between -8 and 15')
    
def check_char_count(form, field):
    if len(field.data) > 1000 or len(field.data) < 10:
        raise ValidationError('Description must be between 10 and 1000 characters.')


class UpdateDiscForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    description = TextAreaField("Description", validators=[DataRequired(), check_char_count])
    category = SelectField('Category', choices=[
        'Distance Driver', 'Fairway Driver', 'Midrange', 'Putter'], validators=[DataRequired()])
    speed = IntegerField('Speed', validators=[DataRequired(), check_flight_numbers])
    glide = IntegerField('Glide', validators=[DataRequired(), check_flight_numbers])
    turn = IntegerField('Turn', validators=[DataRequired(), check_flight_numbers])
    fade = IntegerField('Fade', validators=[DataRequired(), check_flight_numbers])
    photo_url = FileField('Upload Image', validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField('Submit')