import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-4 mt-4 p-2" style={{borderTop:"1px solid white"}}>
      <div className="container mx-auto text-center">
        <p>&copy; 2024 AI News Daily. All rights reserved.</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li><Link to="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
