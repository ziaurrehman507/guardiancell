import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product not found
          </h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {showSuccess && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          ✓ Added to cart successfully!
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-primary hover:text-secondary transition flex items-center"
        >
          ← Back
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              <span className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-semibold">
                {product.category}
              </span>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h1>
                <p className="text-4xl font-bold text-primary mb-6">
                  €{product.price.toFixed(2)}
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Quantity:
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-secondary transition-colors duration-300 transform hover:scale-105"
                >
                  Add to Cart - €{(product.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/product/${p.id}`)}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {p.name}
                    </h3>
                    <p className="text-primary font-bold">
                      €{p.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
