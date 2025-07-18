// Product Data
const products = [
    // CAKES
    { id: 10, name: "Chocolate Cake (Cream)", price: 5.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/cream-cake-chocolate.jpg", description: "Rich chocolate cream cake.", category: "CAKES" },
    { id: 11, name: "Vanilla Cake (Cream)", price: 5.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/cream-cake-vanilla.jpg", description: "Classic vanilla cream cake.", category: "CAKES" },
    { id: 12, name: "Orange Cake (Cream)", price: 5.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/cream-cake-orange.jpg", description: "Zesty orange flavored cream cake.", category: "CAKES" },
    { id: 13, name: "Mango Cake (Cream)", price: 5.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/cream-cake-mango.jpg", description: "Sweet mango flavored cream cake.", category: "CAKES" },
    { id: 14, name: "Banana Cake (Slice)", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/slice-cake-banana-1.jpg", description: "Moist banana slice cake.", category: "CAKES" },
    { id: 15, name: "Mixed Fruit Cake (Slice)", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/slice-cake-mixed-fruit.jpg", description: "Delicious slice cake with mixed fruits.", category: "CAKES" },
    { id: 16, name: "Orange Cake (Slice)", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/slice-cake-orange.jpg", description: "Refreshing orange slice cake.", category: "CAKES" },
    { id: 17, name: "Pineapple Cake (Slice)", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/slice-cake-pineapple.jpg", description: "Tropical pineapple slice cake.", category: "CAKES" },
    { id: 18, name: "Chocolate Cake (Slice)", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/slice-cake-chocolate.jpg", description: "Classic chocolate slice cake.", category: "CAKES" },
    { id: 19, name: "Mixed Fruit Cake (Royal Bake)", price: 20.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/royal-bake-mixed-fruit.jpg", description: "Premium mixed fruit cake from our Royal Bake collection.", category: "CAKES" },
    { id: 20, name: "Pineapple Cake (Royal Bake)", price: 20.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/royal-bake.jpg", description: "Exotic pineapple cake from our Royal Bake collection.", category: "CAKES" },
    { id: 21, name: "Fruit Cake (Whole)", price: 60.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/cake.jpg", description: "Traditional whole fruit cake, rich and flavorful.", category: "CAKES" },
    { id: 22, name: "Fruit Cake (Slice, Large)", price: 60.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/slice-fruit-cake.jpg", description: "Generous slice of our traditional fruit cake.", category: "CAKES" },
    { id: 23, name: "Slice Fruit Cake (Premium)", price: 75.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/sliced-fruit-cake.jpg", description: "Premium slice of rich fruit cake.", category: "CAKES" },
    { id: 24, name: "Pineapple Sliced Cake (Premium)", price: 75.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/pineapple-sliced-cake.jpg", description: "Premium slice of tropical pineapple cake.", category: "CAKES" },
    // RUSKS
    { id: 25, name: "Premium Milk Rusk", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/premium-milk-rusk-1.jpg", description: "Crispy milk rusk, perfect with tea.", category: "RUSKS" },
    { id: 26, name: "Premium Suji Rusk", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/premium-suji-rusk-1.jpg", description: "Crunchy suji rusk for a delightful snack.", category: "RUSKS" },
    { id: 27, name: "Elaichi Rusk (Small)", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/Elaichi-rusk-3.jpg", description: "Flavorful cardamom rusk.", category: "RUSKS" },
    { id: 28, name: "Milk Rusk (Large)", price: 30.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/Premium-Milk-Rusk-2.jpg", description: "Larger pack of our popular milk rusk.", category: "RUSKS" },
    { id: 29, name: "Elaichi Rusk (Large)", price: 30.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/Premium-Elaichi-Rusk.jpg", description: "Larger pack of aromatic elaichi rusk.", category: "RUSKS" },
    { id: 30, name: "Elaichi Rusk (Family Pack)", price: 38.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/Elaichi-rusk02.jpg", description: "Family-sized pack of cardamom rusk.", category: "RUSKS" },
    { id: 31, name: "Suji Rusk (Family Pack)", price: 38.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/Suji-rusk-1.jpg", description: "Family-sized pack of crunchy suji rusk.", category: "RUSKS" },
    { id: 32, name: "Butter Rusk (Family Pack)", price: 38.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/Butter-rusk-1.jpg", description: "Rich and buttery rusk, perfect for dipping.", category: "RUSKS" },
    // BREAD
    { id: 33, name: "200 gm Slice Bread", price: 15.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw016.png", description: "Soft and fresh 200gm sliced bread.", category: "BREAD" },
    { id: 34, name: "200 gm Slice Brown Bread", price: 18.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw003.png", description: "Healthy 200gm sliced brown bread.", category: "BREAD" },
    { id: 35, name: "400 gm Slice Bread", price: 28.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw002.png", description: "Larger 400gm pack of soft sliced bread.", category: "BREAD" },
    { id: 36, name: "400 gm Slice Brown Bread", price: 32.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw017.png", description: "Larger 400gm pack of healthy sliced brown bread.", category: "BREAD" },
    // CREAM ROLL
    { id: 37, name: "Vanilla Cream Roll", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/cream-roll-vanilla.jpg", description: "Crispy roll filled with smooth vanilla cream.", category: "CREAM ROLL" },
    { id: 38, name: "Butterscotch Cream Roll", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/cream-roll-butterscotch.jpg", description: "Delightful roll with rich butterscotch cream.", category: "CREAM ROLL" },
    { id: 39, name: "Blueberry Cream Roll", price: 10.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/cream-roll-blueberry.jpg", description: "Sweet and tangy blueberry cream roll.", category: "CREAM ROLL" },
    { id: 40, name: "Assorted Cream Roll Pack", price: 60.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/cream-roll.jpg", description: "A pack of assorted cream rolls.", category: "CREAM ROLL" },
    // COOKIES
    { id: 41, name: "All Time Cookies (Pack 1)", price: 15.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/maa-annapurna-all-time.jpg", description: "Our popular 'All Time' cookies, perfect for any moment.", category: "COOKIES" },
    { id: 42, name: "All Time Cookies (Pack 2)", price: 15.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/maa-annapurna-all-time-another.jpeg", description: "Another pack of our delicious 'All Time' cookies.", category: "COOKIES" },
    { id: 43, name: "Tea Bite Cookies", price: 45.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/maa-annapurna-tea-bite.jpeg", description: "Perfect companions for your tea time.", category: "COOKIES" },
    { id: 44, name: "Osmania Cookies (Small)", price: 60.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-12-09-at-8.16.36-PM.jpeg", description: "Classic Osmania cookies, melt-in-your-mouth goodness.", category: "COOKIES" },
    { id: 45, name: "Jeera Mast Cookies (Small)", price: 65.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw014.png", description: "Savory cumin-flavored cookies.", category: "COOKIES" },
    { id: 46, name: "Osmania Cookies (Large)", price: 65.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw013.png", description: "Larger pack of our classic Osmania cookies.", category: "COOKIES" },
    { id: 47, name: "Ajwain Cookies", price: 65.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw012.png", description: "Crispy cookies flavored with carom seeds.", category: "COOKIES" },
    { id: 48, name: "Fruity Crunch Cookies", price: 65.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw011.png", description: "Crunchy cookies with a delightful fruity flavor.", category: "COOKIES" },
    { id: 49, name: "Cashew Cookies (Small)", price: 65.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw009.png", description: "Rich and buttery cookies with cashew bits.", category: "COOKIES" },
    { id: 50, name: "Til Glory Cookies", price: 65.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw008.png", description: "Sesame seed cookies for a unique taste.", category: "COOKIES" },
    { id: 51, name: "Peanuts Cookies", price: 65.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw007.png", description: "Crunchy cookies packed with peanuts.", category: "COOKIES" },
    { id: 52, name: "Kala Jeera Mast Cookies (Small)", price: 65.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw006.png", description: "Savory black cumin flavored cookies.", category: "COOKIES" },
    { id: 53, name: "Cherry Cookies", price: 65.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw005.png", description: "Sweet cookies with delightful cherry pieces.", category: "COOKIES" },
    { id: 54, name: "Vanilla Cream Roll Cookies", price: 65.00, image: "https://salasarbakers.com/wp-content/uploads/2022/10/pw010.png", description: "Vanilla flavored cookies in a cream roll style.", category: "COOKIES" },
    { id: 55, name: "Kala Jeera Mast Cookies (Large)", price: 225.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/kala-jeera-mast-cookies.jpg", description: "Large pack of our savory black cumin cookies.", category: "COOKIES" },
    { id: 56, name: "Jeera Mast Cookies (Large)", price: 225.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/jeera-mast-cookies.jpg", description: "Large pack of our savory cumin cookies.", category: "COOKIES" },
    { id: 57, name: "Coco Crunch Cookies", price: 225.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/coco-crunch-cookies.jpg", description: "Delicious chocolatey crunch cookies.", category: "COOKIES" },
    { id: 58, name: "Cashew Cookies (Large)", price: 225.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/cashew-cookies.jpg", description: "Large pack of rich cashew cookies.", category: "COOKIES" },
    { id: 59, name: "Ajwain Cookies (Large)", price: 225.00, image: "https://salasarbakers.com/wp-content/uploads/2022/09/ajwain-cookies.jpg", description: "Large pack of crispy ajwain cookies.", category: "COOKIES" },
];

let cart = []; // Global cart array

document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selectors ---
    const allProductCategoriesContainer = document.getElementById('all-product-categories-container');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartButton = document.getElementById('cart-button');
    const closeCartModalButton = document.getElementById('close-cart-modal');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalSpan = document.getElementById('cart-total');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutButton = document.getElementById('checkout-button');
    const orderConfirmationModal = document.getElementById('order-confirmation-modal');
    const closeOrderConfirmationModalButton = document.getElementById('close-order-confirmation-modal');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const header = document.querySelector('header');

    // --- Payment Modal Elements ---
    const paymentModal = document.getElementById('payment-modal');
    const closePaymentModalBtn = document.getElementById('close-payment-modal-btn');
    const cancelPaymentBtn = document.getElementById('cancel-payment-btn');
    const paymentForm = document.getElementById('payment-form');
    const paymentTotalSpan = document.getElementById('payment-total');
    const submitPaymentBtn = document.getElementById('submit-payment-btn');
    const paymentDetailsContainer = document.getElementById('payment-details-container');
    const paymentMethodOptions = document.getElementById('payment-method-options');
    const paymentMessage = document.getElementById('payment-message');

    // --- Utility Functions ---
    function formatCurrency(amount) {
        return `₹${amount.toFixed(2)}`;
    }

    function openModal(modalElement) {
        modalElement.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modalElement) {
        modalElement.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    function closeMobileMenu() {
        mobileMenuOverlay.classList.add('-translate-x-full');
        mobileMenuOverlay.classList.remove('flex');
        document.body.style.overflow = '';
    }

    // --- Product Rendering ---
    function renderProducts() {
        allProductCategoriesContainer.innerHTML = '';
        const categoryOrder = ["CAKES", "RUSKS", "BREAD", "CREAM ROLL", "COOKIES"];
        const categories = [...new Set(products.map(p => p.category))].sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

        categories.forEach(category => {
            const categorySection = document.createElement('div');
            categorySection.className = 'mb-20';
            categorySection.innerHTML = `
                <h2 class="text-4xl md:text-5xl font-extrabold text-amber-800 mb-12 text-center uppercase tracking-wide drop-shadow-md">${category}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    ${products.filter(p => p.category === category).map(product => `
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out flex flex-col group border border-amber-100">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/400x300/CCCCCC/333333?text=Image+Not+Found';">
                            <div class="p-6 flex flex-col flex-grow">
                                <h3 class="text-2xl font-semibold mb-2 text-amber-800">${product.name}</h3>
                                <p class="text-gray-600 text-base mb-4 flex-grow">${product.description}</p>
                                <div class="flex justify-between items-center mt-auto">
                                    <span class="text-2xl font-bold text-amber-700">${formatCurrency(product.price)}</span>
                                    <button data-product-id="${product.id}" class="add-to-cart-btn bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            allProductCategoriesContainer.appendChild(categorySection);
        });

        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = parseInt(event.target.dataset.productId, 10);
                addToCart(productId);
            });
        });
    }

    // --- Cart Functions ---
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            updateCartUI();
            openModal(cartModal);
        }
    }

    function updateCartUI() {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        renderCartItems();
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalSpan.textContent = formatCurrency(total);
        checkoutButton.disabled = cart.length === 0;
    }

    function renderCartItems() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p id="empty-cart-message" class="text-gray-600 text-center text-xl py-8">Your cart is empty.</p>`;
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0 animate-fade-in">
                    <div class="flex items-center space-x-4">
                        <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg shadow-sm" onerror="this.onerror=null;this.src='https://placehold.co/64x64/CCCCCC/333333?text=No+Img';">
                        <div>
                            <h4 class="font-semibold text-xl text-amber-800">${item.name}</h4>
                            <p class="text-gray-600 text-lg">${formatCurrency(item.price)}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button data-id="${item.id}" class="cart-qty-minus bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-xl font-bold">-</button>
                        <span class="text-xl font-medium w-8 text-center">${item.quantity}</span>
                        <button data-id="${item.id}" class="cart-qty-plus bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-xl font-bold">+</button>
                        <button data-id="${item.id}" class="cart-remove-item bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-base">Remove</button>
                    </div>
                </div>
            `).join('');
        }
    }

    cartItemsContainer.addEventListener('click', (event) => {
        const target = event.target;
        const id = parseInt(target.dataset.id, 10);
        if (target.classList.contains('cart-qty-minus')) {
            updateCartQuantity(id, -1);
        } else if (target.classList.contains('cart-qty-plus')) {
            updateCartQuantity(id, 1);
        } else if (target.classList.contains('cart-remove-item')) {
            removeFromCart(id);
        }
    });

    function updateCartQuantity(productId, change) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1);
            }
            updateCartUI();
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartUI();
    }

    // --- Payment Logic ---
    function showPaymentMessage(message, type = 'error') {
        paymentMessage.textContent = message;
        paymentMessage.className = `p-4 mb-4 text-sm rounded-lg ${type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`;
        paymentMessage.style.display = 'block';
    }

    function hidePaymentMessage() {
        paymentMessage.style.display = 'none';
    }

    function updatePaymentDetails(method) {
        paymentDetailsContainer.innerHTML = ''; // Clear previous content
        let content = '';
        switch (method) {
            case 'card':
                content = `
                    <div class="space-y-4">
                        <div>
                            <label for="card-number" class="block text-sm font-medium text-gray-700">Card Number</label>
                            <input type="text" id="card-number" placeholder="1234 5678 9012 3456" class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required>
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            <div>
                                <label for="card-expiry-mm" class="block text-sm font-medium text-gray-700">MM</label>
                                <input type="text" id="card-expiry-mm" placeholder="MM" class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required>
                            </div>
                            <div>
                                <label for="card-expiry-yy" class="block text-sm font-medium text-gray-700">YY</label>
                                <input type="text" id="card-expiry-yy" placeholder="YY" class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required>
                            </div>
                            <div>
                                <label for="card-cvv" class="block text-sm font-medium text-gray-700">CVV</label>
                                <input type="text" id="card-cvv" placeholder="CVV" class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required>
                            </div>
                        </div>
                    </div>`;
                break;
            case 'upi':
                content = `
                    <div>
                        <label for="upi-id" class="block text-sm font-medium text-gray-700">UPI ID</label>
                        <input type="text" id="upi-id" placeholder="yourname@bank" class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required>
                    </div>`;
                break;
            case 'cod':
                content = `<p class="text-center text-gray-600 bg-gray-100 p-4 rounded-lg">You will pay with cash upon delivery.</p>`;
                break;
        }
        paymentDetailsContainer.innerHTML = content;
        paymentDetailsContainer.classList.add('payment-details-animation');
        // Remove class after animation to allow re-triggering
        setTimeout(() => paymentDetailsContainer.classList.remove('payment-details-animation'), 500);
    }

    paymentMethodOptions.addEventListener('change', (e) => {
        if (e.target.name === 'payment-method') {
            updatePaymentDetails(e.target.value);
        }
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            closeModal(cartModal);
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            paymentTotalSpan.textContent = formatCurrency(total);
            submitPaymentBtn.textContent = `Pay ${formatCurrency(total)}`;
            paymentForm.reset();
            updatePaymentDetails('card'); // Set default view
            hidePaymentMessage();
            openModal(paymentModal);
        }
    });
    

    // --- New Payment Form Submission Logic (as requested) ---
    paymentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("payer-name").value;
      const phone = document.getElementById("payer-phone").value;
      const address = document.getElementById("payer-address").value;
      const paymentMethod = document.querySelector("input[name='payment-method']:checked").value;

      // Get cart items and total from JS (cart array)
      function getCartItemsFromDOM() {
        // Return a simplified array of cart items
        return cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        }));
      }
      const cartItems = getCartItemsFromDOM();
      const totalAmount = parseFloat(document.getElementById("payment-total").textContent.replace("₹", "")) || 0;

      const orderData = {
        name,
        phone,
        address,
        payment_method: paymentMethod,
        items: cartItems,
        total: totalAmount
      };

      fetch("/place_order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      })
      .then(res => res.json())
      .then(response => {
        alert(response.message);
        closeModal(paymentModal); // Close modal if success
        showOrderConfirmation(); // Show confirmation modal
        clearCart(); // Reset cart
      })
      .catch(err => {
        console.error("Error placing order:", err);
        alert("Something went wrong. Please try again.");
      });
    });

    function showOrderConfirmation() {
      document.getElementById("payment-modal").style.display = "none";
      document.getElementById("order-confirmation-modal").style.display = "block";
    }

    function clearCart() {
      // Empty cart logic
      cart = [];
      document.getElementById("cart-items-container").innerHTML = "";
      document.getElementById("cart-total").textContent = "₹0.00";
      document.getElementById("payment-total").textContent = "₹0.00";
      updateCartUI();
    }

    // --- General Event Listeners ---
    cartButton.addEventListener('click', () => openModal(cartModal));
    closeCartModalButton.addEventListener('click', () => closeModal(cartModal));
    cartModal.addEventListener('click', (event) => {
        if (event.target === cartModal) closeModal(cartModal);
    });

    closeOrderConfirmationModalButton.addEventListener('click', () => closeModal(orderConfirmationModal));
    orderConfirmationModal.addEventListener('click', (event) => {
        if (event.target === orderConfirmationModal) closeModal(orderConfirmationModal);
    });
    
    const closePaymentAndOpenCart = () => {
        closeModal(paymentModal);
        openModal(cartModal);
    };

    closePaymentModalBtn.addEventListener('click', closePaymentAndOpenCart);
    cancelPaymentBtn.addEventListener('click', closePaymentAndOpenCart);
    paymentModal.addEventListener('click', (event) => {
        if (event.target === paymentModal) closePaymentAndOpenCart();
    });

    mobileMenuButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('-translate-x-full');
        mobileMenuOverlay.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });
    closeMobileMenuButton.addEventListener('click', () => closeMobileMenu());

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-sticky', 'py-3');
            header.classList.remove('py-5');
        } else {
            header.classList.remove('header-sticky', 'py-3');
            header.classList.add('py-5');
        }
    });

    // --- Initial Load ---
    renderProducts();
    updateCartUI();
});

// Contact Form Submission Handler
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('Subject').value,
        message: document.getElementById('message').value
      };

      fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(response => {
        alert(response.message);
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Something went wrong. Try again!");
      });
    });
  }
});
