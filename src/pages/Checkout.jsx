import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Portugal',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (cart.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order. You will receive a confirmation email shortly.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting to home page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Shipping Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-300"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-semibold">
                      €{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>€{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-800 pt-2">
                  <span>Total:</span>
                  <span className="text-primary">€{getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
