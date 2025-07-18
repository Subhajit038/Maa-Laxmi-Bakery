from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

# Route to serve the homepage
@app.route('/')
def index():
    return render_template('grocery.html')

# API endpoint to receive contact form (optional enhancement)
@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    print("Contact form received:", data)
    return jsonify({"message": "Thank you for contacting us!"}), 200

# API endpoint to simulate order placement
@app.route('/place_order', methods=['POST'])
def place_order():
    order_data = request.json
    print("Order received:", order_data)

    # Save to JSON file (optional)
    if not os.path.exists('orders.json'):
        with open('orders.json', 'w') as f:
            json.dump([], f)

    with open('orders.json', 'r+') as f:
        orders = json.load(f)
        orders.append(order_data)
        f.seek(0)
        json.dump(orders, f, indent=4)

    return jsonify({"message": "Order placed successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
