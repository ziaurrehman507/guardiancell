import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <span className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              €{product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
