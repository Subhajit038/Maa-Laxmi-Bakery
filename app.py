from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo
from datetime import datetime
import os, json

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/bakerydb"  # Change if using Atlas
mongo = PyMongo(app)

contact_collection = mongo.db.contacts
orders_collection = mongo.db.orders  # Orders collection

@app.route('/')
def index():
    return render_template('grocery.html')

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    if data:
        contact_collection.insert_one({
            "name": data.get("name"),
            "email": data.get("email"),
            "subject": data.get("subject"),
            "message": data.get("message"),
            "timestamp": datetime.utcnow()
        })
        return jsonify({"message": "Thank you for contacting us!"}), 200
    return jsonify({"error": "No data received"}), 400

# ✅ Save order to MongoDB
@app.route('/place_order', methods=['POST'])
def place_order():
    data = request.get_json()
    if data:
        order = {
            "name": data.get("name"),
            "phone": data.get("phone"),
            "address": data.get("address"),
            "payment_method": data.get("payment_method"),
            "items": data.get("items"),
            "total": data.get("total"),
            "timestamp": datetime.utcnow()
        }
        orders_collection.insert_one(order)
        return jsonify({"message": "Order placed successfully!"}), 200
    return jsonify({"error": "Invalid order data"}), 400

if __name__ == '__main__':
    app.run(debug=True)
