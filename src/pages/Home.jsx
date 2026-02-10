import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Welcome to Guardiancell',
      subtitle: 'Premium Smartphones',
      description: 'Shop the latest mobile phones at unbeatable prices',
      image: 'https://assets.spares.nu/products/featured/GH82-27444A_SPiBt9SXj3jDXM0xpeAeK.png',
      buttonText: 'Shop Now',
      buttonLink: '/products',
    },
    {
      id: 2,
      title: 'Latest iPhone Collection',
      subtitle: 'Apple Smartphones',
      description: 'Get the newest iPhone models with amazing features',
      image: 'https://marmeladecat.com/cdn/shop/products/66851e79ffa1f9e319faf0900945e886_450x450.jpg?v=1663761285',
      buttonText: 'Explore iPhones',
      buttonLink: '/products',
    },
    {
      id: 3,
      title: 'Android Flagships',
      subtitle: 'Samsung & More',
      description: 'Discover powerful Android smartphones',
      image: 'https://www.slashgear.com/img/gallery/the-5-best-and-5-worst-samsung-phones-of-all-time-upgrade/intro-1740691415.jpg',
      buttonText: 'View Android',
      buttonLink: '/products',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider */}
<section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 h-full items-center py-6 sm:py-8 lg:py-10">
      {/* Left Content */}
      <div className="space-y-4 sm:space-y-6 lg:space-y-8 z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 absolute translate-x-10'
            }`}
          >
            {/* Professional Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6 shadow-md">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              {slide.subtitle}
            </div>
            
            {/* Title with gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                {slide.title}
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-lg leading-relaxed">
              {slide.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <Link
                to={slide.buttonLink}
                className="w-full sm:w-auto group relative bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-xl font-semibold text-base sm:text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {slide.buttonText}
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              
              <button className="w-full sm:w-auto text-gray-700 font-semibold hover:text-teal-600 transition-all duration-300 flex items-center justify-center sm:justify-start group">
                <span>Learn More</span>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* Enhanced Dots Indicator */}
        <div className="flex items-center space-x-2 sm:space-x-3 pt-6 sm:pt-8 lg:pt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative transition-all duration-500 ${
                index === currentSlide
                  ? 'w-8 sm:w-10 lg:w-12'
                  : 'w-2 sm:w-2.5 lg:w-3 hover:w-4 sm:hover:w-5 lg:hover:w-6'
              }`}
            >
              <div
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
              {index === currentSlide && (
                <div className="absolute -top-0.5 sm:-top-1 -bottom-0.5 sm:-bottom-1 left-0 right-0 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full -z-10"></div>
              )}
            </button>
          ))}
          <div className="text-xs sm:text-sm text-gray-500 ml-2 sm:ml-3 lg:ml-4 font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Right Image - Professional Presentation */}
      <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute transition-all duration-1000 ease-out w-full ${
              index === currentSlide
                ? 'opacity-100 scale-100 translate-x-0'
                : 'opacity-0 scale-95 translate-x-10'
            }`}
            style={{ transitionDelay: index === currentSlide ? '300ms' : '0ms' }}
          >
            {/* Main Image Container */}
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Floating Background Element */}
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl sm:rounded-3xl transform rotate-3 opacity-60 blur-sm"></div>
              
              {/* Image with elegant frame */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[520px] object-cover transform transition-transform duration-1000 hover:scale-105"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              {/* Professional Floating Card */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-5 lg:-right-5 bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-3 sm:p-4 lg:p-5 flex items-center space-x-2 sm:space-x-3 lg:space-x-4 border border-gray-100">
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-2 sm:p-2.5 lg:p-3.5 rounded-lg sm:rounded-xl">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 rounded-md sm:rounded-lg text-white font-bold text-sm sm:text-base">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide">Featured</p>
                  <p className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">Premium Collection</p>
                  <div className="flex items-center mt-0.5 sm:mt-1">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs sm:text-sm text-gray-500 ml-1 sm:ml-2">(4.8)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Decorative Element */}
        <div className="absolute -z-10 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-full opacity-20 blur-3xl -right-10 sm:-right-16 lg:-right-20"></div>
      </div>
    </div>
  </div>

  {/* Professional Navigation Arrows */}
  <button
    onClick={prevSlide}
    className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r from-teal-600 to-emerald-600 text-gray-700 hover:text-white p-2.5 sm:p-3 lg:p-4 rounded-full shadow-lg sm:shadow-xl transition-all duration-500 group hover:scale-110 hover:shadow-2xl"
  >
    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r from-teal-600 to-emerald-600 text-gray-700 hover:text-white p-2.5 sm:p-3 lg:p-4 rounded-full shadow-lg sm:shadow-xl transition-all duration-500 group hover:scale-110 hover:shadow-2xl"
  >
    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>

  {/* Progress Bar */}
  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-200/50">
    <div 
      className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-1000 ease-out"
      style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
    ></div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose ShopHub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Latest Models</h3>
            <p className="text-gray-600">All the newest smartphone releases</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Products</h3>
            <p className="text-gray-600">100% genuine smartphones guaranteed</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Best Prices</h3>
            <p className="text-gray-600">Competitive pricing on all models</p>
          </div>
        </div>
      </section>

      {/* Featured Smartphones */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Featured Smartphones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
          >
            View All Smartphones
          </Link>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special Offer! 🎉
          </h2>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Get 20% off on your first order. Use code: WELCOME20
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Free Shipping</h3>
            <p className="text-gray-600">On all orders across Portugal</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payment</h3>
            <p className="text-gray-600">100% secure transactions</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Special Offers</h3>
            <p className="text-gray-600">Regular deals and discounts</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
