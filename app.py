from flask import Flask, render_template
from flask_debugtoolbar import DebugToolbarExtension
from pokemon import pokemon, abilities, moves, types
app = Flask(__name__)

app.config['SECRET_KEY'] = 'yurr'
debug = DebugToolbarExtension(app)

@app.route('/')
def start():
    return render_template('index.html')

