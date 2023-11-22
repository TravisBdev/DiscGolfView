from .db import db, environment, SCHEMA, add_prefix_for_prod


class Disc(db.Model):
  __tablename__ = 'discs'

  if environment == 'production':
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
  name = db.Column(db.String(25), nullable=False)
  category = db.Column(db.String(15), nullable=False)
  speed = db.Column(db.Integer, nullable=False)
  glide = db.Column(db.Integer, nullable=False)
  turn = db.Column(db.Integer, nullable=False)
  fade = db.Column(db.Integer, nullable=False)
  photo_url = db.Column(db.String, nullable=False)
  created_at = db.Column(db.Date, nullable=False)

  owner = db.relationship('User', back_populates='discs')
  reviews = db.relationship('Review', back_populates='disc', cascade='all, delete-orphan')


  def to_dict(self):
    return {
      'id': self.id,
      'owner_id': self.owner_id,
      'name': self.name,
      'category': self.category,
      'speed': self.speed,
      'glide': self.glide,
      'turn': self.turn,
      'fade': self.fade,
      'photoUrl': self.photo_url,
      'createdAt': self.created_at,
      'owner': self.owner.to_dict(),
    }
