from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo
from datetime import datetime
import os, json

app = Flask(__name__)

# ✅ MongoDB Atlas URI (replace password if you change it)
app.config["MONGO_URI"] = "mongodb+srv://subhajitkhanra038:NYaGlguBTGzUVAWa@maalaxmidb.vesuxvv.mongodb.net/bakerydb?retryWrites=true&w=majority"
mongo = PyMongo(app)

# ✅ Collections
contact_collection = mongo.db.contacts
orders_collection = mongo.db.orders

# ✅ Home route
@app.route('/')
def index():
    return render_template('grocery.html')  # Make sure grocery.html exists in templates folder

# ✅ Contact form submission
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

# ✅ Place an order
@app.route('/place_order', methods=['POST'])
def place_order():
    try:
        data = request.get_json()
        print("Received order data:", data)  # Debug print
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
    except Exception as e:
        print("Order error:", e)  # Print error to console
        return jsonify({"error": "Server error", "details": str(e)}), 500
    
# ✅ Place an order with shipping info
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

# ✅ Run the app
if __name__ == '__main__':
    app.run(debug=True)
