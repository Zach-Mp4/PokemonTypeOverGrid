from flask import Flask, render_template
from flask_debugtoolbar import DebugToolbarExtension
from pkmnLists import pokemon, abilities, moves, types
import gunicorn.app.base

app = Flask(__name__)

# app.config['SECRET_KEY'] = 'yurr'
# debug = DebugToolbarExtension(app)
class StandaloneApplication(gunicorn.app.base.BaseApplication):
    def __init__(self, app, options=None):
        self.options = options or {}
        self.application = app
        super().__init__()

    def load_config(self):
        for key, value in self.options.items():
            if key in self.cfg.settings and value is not None:
                self.cfg.set(key, value)

    def load(self):
        return self.application


@app.route('/')
def start():
    return render_template('index.html')

