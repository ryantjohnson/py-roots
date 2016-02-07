#!/usr/bin/env python

from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
	return render_template('index.html')

@app.route("/about")
def about():
	return render_template('about.html')

@app.route("/contact")
def contact():
	return render_template('contact.html')

@app.route("/events")
def events():
	return render_template('events.html')

@app.route("/staff")
def staff():
	return render_template('staff.html')

@app.route("/venue")
def venue():
	return render_template('venue.html')

@app.route("/affiliates")
def affiliates():
	return render_template('affiliates.html')

if __name__ == "__main__":
	app.run(debug=True, port=5000)
