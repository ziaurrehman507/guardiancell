import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some products to get started!
          </p>
          <Link
            to="/products"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 transition"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                  <p className="text-primary font-bold text-xl">
                    €{item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>€{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total:</span>
                    <span className="text-primary">€{getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-300 mb-3"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/products"
                className="block text-center text-primary hover:text-secondary transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
