import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Outonoblongo - Lda.</h3>
            <p className="text-gray-400 text-sm">
              Your trusted online mobile store for quality smartphones at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-start">
                <span className="mr-2">🏢</span>
                <span>
                  <strong></strong> Outonoblongo - Lda.<br />
                  <strong>VAT:</strong> PT 519216792
                </span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
                  Rua Costa Pinto, Bairro Alcaide, nº 209,<br />
                  Loja 12, P-2645-185 Alcabideche, Portugal
                </span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+351936607656" className="hover:text-white transition">
                  +351 936 607 656
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:blongounip@gmail.com" className="hover:text-white transition">
                  blongounip@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Outonoblongo - Lda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
