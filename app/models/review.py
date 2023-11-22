from .db import db, environment, SCHEMA, add_prefix_for_prod


class Review(db.Model):
  __tablename__ ='reviews'

  if environment == 'production':
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
  disc_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('discs.id')))
  review = db.Column(db.String(1100), nullable=False)
  rating = db.Column(db.Integer, nullable=False)
  created_at = db.Column(db.Date, nullable=False)

  user = db.relationship('User', back_populates='reviews')
  disc = db.relationship('Disc', back_populates='reviews')


  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'disc_id': self.disc_id,
      'review': self.review,
      'rating': self.rating,
      'createdAt': self.created_at,
      'user': self.user.to_dict(),
    }
