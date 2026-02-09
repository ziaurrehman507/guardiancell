const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About ShopHub
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to ShopHub, your trusted online shopping destination. We are
            committed to providing you with the best products at competitive prices,
            combined with exceptional customer service.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Founded with a passion for quality and customer satisfaction, we have
            grown to become a leading e-commerce platform serving customers across
            Portugal and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide quality products and exceptional shopping experiences to
              our customers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quality First</h3>
            <p className="text-gray-600">
              We carefully select every product to ensure the highest quality
              standards.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable shipping to get your products to you as soon as
              possible.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Why Choose Us?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span className="text-gray-600">
                Wide selection of quality products across multiple categories
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span className="text-gray-600">
                Competitive prices and regular special offers
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span className="text-gray-600">
                Secure shopping experience with trusted payment methods
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span className="text-gray-600">
                Dedicated customer support team ready to help
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span className="text-gray-600">
                Fast and reliable shipping across Portugal
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
