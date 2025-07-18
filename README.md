# Maa Laxmi Bakery Online Platform

Welcome to the Maa Laxmi Bakery Online Platform! This web application allows customers to browse, order, and pay for delicious bakery products online. The platform is designed with a modern, responsive UI using Tailwind CSS and features a smooth shopping cart and checkout experience.

## Features

- **Product Catalog:** Browse a variety of bakery products organized by categories.
- **Shopping Cart:** Add, remove, and update items in your cart.
- **Order Placement:** Place orders with shipping and payment details.
- **Payment Methods:** Supports Card, UPI, and Cash on Delivery (COD).
- **Order Confirmation:** Get a confirmation modal after successful order placement.
- **Contact & Location:** Contact form and Google Maps integration for bakery location.

## Project Structure

```
app.py                  # Main Flask backend application
orders.json             # Stores order data
requirements.txt        # Python dependencies
static/
  grocery.css           # Custom CSS
  grocery.js            # Custom JavaScript
templates/
  grocery.html          # Main HTML template (UI)
```

## Getting Started

### Prerequisites
- Python 3.7+
- pip (Python package manager)

### Installation
1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd Maa-Laxmi-Bakery
   ```
2. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```
3. **Run the application:**
   ```sh
   python app.py
   ```
4. **Open in browser:**
   Visit `http://127.0.0.1:5000` in your web browser.

## Customization
- Edit `static/grocery.css` for custom styles.
- Edit `static/grocery.js` for JavaScript logic (cart, modals, etc).
- Update `templates/grocery.html` for UI changes.
- Add or modify products and categories in the backend as needed.

## Contact
For any queries, please contact:
- **Email:** info@maalaxmibakery.com
- **Phone:** +91 98765 43210

---
© 2025 Maa Laxmi Bakery. All rights reserved.
