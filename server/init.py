from flask import Flask
from config import Config

from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS

import logging


import random
from datetime import datetime, timedelta

db = SQLAlchemy()
bcrypt = Bcrypt()
logging.getLogger("flask_cors").level = logging.DEBUG


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)

    with app.app_context():
        CORS(
            app,
            origins=[
                "http://localhost:3000",
                "http://localhost:5000",
            ],
        )
        # db.drop_all()
        # db.create_all()
        # seed_database()
        return app
