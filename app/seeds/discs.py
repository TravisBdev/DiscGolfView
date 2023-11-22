from app.models import db, Disc, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date


def seed_discs():
  new_disc_1 = Disc(
    owner_id=1,
    name='Destroyer',
    category='Driver',
    speed=12,
    glide=5,
    turn=-1,
    fade=3,
    photo_url='https://m.media-amazon.com/images/I/61MoHShoiuL._AC_UF1000,1000_QL80_.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_1)

  new_disc_2 = Disc(
    owner_id=1,
    name='Bulldog',
    category='midrange',
    speed=4,
    glide=3,
    turn=0,
    fade=2,
    photo_url='https://titandiscgolf.com/cdn/shop/products/IMG_3243_1024x.jpg?v=1623191373',
    created_at=date.today()
  )
  db.session.add(new_disc_2)

  new_disc_3 = Disc(
    owner_id=1,
    name='Destroyer',
    category='Driver',
    speed=2,
    glide=3,
    turn=0,
    fade=1,
    photo_url='https://m.media-amazon.com/images/I/71KXnEsHLwL._AC_UF1000,1000_QL80_.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_3)

  new_disc_4 = Disc(
    owner_id=2,
    name='TeeDevil',
    category='Driver',
    speed=12,
    glide=5,
    turn=-1,
    fade=2,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/Star-TeeDevil.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_4)

  new_disc_5 = Disc(
    owner_id=2,
    name='Tern',
    category='Driver',
    speed=12,
    glide=6,
    turn=-3,
    fade=2,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/GStar-Tern.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_5)

  new_disc_6 = Disc(
    owner_id=2,
    name='Wahoo',
    category='Driver',
    speed=12,
    glide=6,
    turn=-2,
    fade=2,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/R-Pro-Wahoo.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_6)

  new_disc_7 = Disc(
    owner_id=2,
    name='Atlas',
    category='Mid Range',
    speed=5,
    glide=4,
    turn=0,
    fade=1,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/CH-Atlas.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_7)

  new_disc_8 = Disc(
    owner_id=2,
    name='Cro',
    category='Mid Range',
    speed=5,
    glide=3,
    turn=0,
    fade=2,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/R-Pro-Cro.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_8)

  new_disc_9 = Disc(
    owner_id=2,
    name='Animal',
    category='Putt & Approach',
    speed=2,
    glide=1,
    turn=0,
    fade=1,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2021/11/star_animal.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_9)

  new_disc_10 = Disc(
    owner_id=3,
    name='Archangel',
    category='Fairway',
    speed=8,
    glide=6,
    turn=-4,
    fade=1,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/DX-Archangel.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_10)

  new_disc_11 = Disc(
    owner_id=3,
    name='Dragon',
    category='Fairway',
    speed=8,
    glide=5,
    turn=-2,
    fade=2,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/DX-Dragon.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_11)

  new_disc_12 = Disc(
    owner_id=3,
    name='Alien',
    category='Mid Range',
    speed=4,
    glide=2,
    turn=0,
    fade=1,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2023/08/alien_dx_yellow_1x1.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_12)

  new_disc_13 = Disc(
    owner_id=3,
    name='Sonic',
    category='Putt & Approach',
    speed=1,
    glide=2,
    turn=-4,
    fade=0,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/DX-Sonic.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_13)

  new_disc_14 = Disc(
    owner_id=4,
    name='Beast',
    category='Driver',
    speed=10,
    glide=5,
    turn=-2,
    fade=2,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/beast_halo-star.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_14)

  new_disc_15 = Disc(
    owner_id=4,
    name='Wraith',
    category='Driver',
    speed=11,
    glide=5,
    turn=-1,
    fade=3,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/Blizzard-Wraith.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_15)

  new_disc_16 = Disc(
    owner_id=4,
    name='Lion',
    category='Mid Range',
    speed=5,
    glide=4,
    turn=0,
    fade=2,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2019/04/Star_Lion.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_16)

  new_disc_17 = Disc(
    owner_id=4,
    name='Aviar3',
    category='Putt & Approach',
    speed=3,
    glide=2,
    turn=0,
    fade=2,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2017/03/XT_Aviar3.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_17)

  db.session.commit()

def undo_discs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.discs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM discs"))

    db.session.commit()
