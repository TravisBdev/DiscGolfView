from app.models import db, Disc, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date


def seed_discs():
  new_disc_1 = Disc(
    owner_id=1,
    name='Destroyer',
    description='The Destroyer is a fast, stable power driver with significant glide. A great disc for sidearm throwers and those with lots of power.',
    category='Driver',
    speed=12,
    glide=5,
    turn=-1,
    fade=3,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2014/11/EchoStar-Destroyer.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_1)

  new_disc_2 = Disc(
    owner_id=1,
    name='Cobra',
    description='An excellent all-around disc that is easy to grip. Gets better with age. Great for rollers, finesse shots, and is a terrific disc for beginners.',
    category='Mid Range',
    speed=4,
    glide=5,
    turn=-2,
    fade=2,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/DX-Cobra.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_2)

  new_disc_3 = Disc(
    owner_id=1,
    name='Birdie',
    description='The Birdie is our best "go for it" disc and an excellent approach disc. It is a slow, straight flyer with a sure Thumtrac™ grip that makes it easy to go for it without worry.',
    category='Putt & Approach',
    speed=1,
    glide=2,
    turn=0,
    fade=0,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/DX-Birdie.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_3)

  new_disc_4 = Disc(
    owner_id=2,
    name='TeeDevil',
    description='The TeeDevil was designed to give the thrower big distance with control. The glide in combination with low fade lead to a distance driver that really rips!',
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
    description='The Tern is a fast, slightly understable disc that is designed for long shot shaping throws with a flight path that maximizes glide.',
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
    description='The Wahoo is a long range distance driver that floats in water and will keep you at the top of the food chain.',
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
    description='The Atlas is an overmold Mid-Range with a small amount of high speed turn and very little fade.',
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
    description='The Cro is a small diameter Mid-Range flies slightly overstable. A great small diameter alternative to the Roc or Shark.',
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
    description='The Animal was designed to be a short-range, stable forehand and backhand approach disc. It’s also a good putter in the wind and inside the circle.',
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
    description='The Archangel is a turnover driver that maximizes distance for less powerful players.',
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
    description='The Dragon is a lightweight driver that floats in water, made with extra grippy plastic.',
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
    name='Coyote',
    description='The Coyote is a mid-range disc with good glide that flies predictably for straight, gentle turnover, or hyzer shots. It is an easy to throw disc with a friendly grip. A great choice for players using only one disc.',
    category='Mid Range',
    speed=4,
    glide=5,
    turn=0,
    fade=1,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/Star-Coyote.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_12)

  new_disc_13 = Disc(
    owner_id=3,
    name='Sonic',
    description='The Sonic, based on the Hero 235, is a new putt and approach disc. This disc has a comfortable low profile grip with great thumb traction.',
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
    description="The Beast is a long distance driver with a gliding, predictable finish. It's sure to increase distance for beginners and pros alike.",
    category='Driver',
    speed=10,
    glide=5,
    turn=-2,
    fade=2,
    photo_url='https://www.innovadiscs.com/wp-content/uploads/2015/02/Pro-Beast.jpg',
    created_at=date.today()
  )
  db.session.add(new_disc_14)

  new_disc_15 = Disc(
    owner_id=4,
    name='Wraith',
    description='The Wraith is a long and fast distance driver. A stable flyer that performs predictably into the wind.',
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
    description='Tame your mid-range shots. Defined by its stable flight, the Lion will attack at any angle—hyzer, flat, or anhyzer.',
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
    description="The Aviar3 has the same comfortable grip you'd expect in an Aviar putter but with a distinctive flat top. In the hand you feel the lower profile. It feels fast. Even better, it can handle the speed. Throw the Aviar3 with power, backhand or forehand, and you can trust it to drop on target.",
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
