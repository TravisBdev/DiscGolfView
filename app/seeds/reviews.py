from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date


def seed_reviews():
    new_review_1 = Review(
        user_id=1,
        disc_id=4,
        review='I really love the feel!',
        rating='5',
        created_at=date.today(),
    )
    db.session.add(new_review_1)

    new_review_2 = Review(
        user_id=2,
        disc_id=10,
        review='It was ok, a little flippy.',
        rating='3',
        created_at=date.today(),
    )
    db.session.add(new_review_2)

    new_review_3 = Review(
        user_id=2,
        disc_id=13,
        review='I love this thing! It flies so straight and even makes for a great approach disc!',
        rating='5',
        created_at=date.today(),
    )
    db.session.add(new_review_3)

    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()