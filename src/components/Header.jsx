import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="bg-blue-600 dark:bg-gray-800 text-white shadow-3xl" style={{borderBottom:"2px solid white"}}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold transition-all hover:animate-pulse hover:text-purple-500"><Link to="/">NexGen News</Link></h1>
        <nav className="hidden md:flex space-x-6">
          {['', 'Latest Updates', 'Apple News', 'Tesla News', 'Cricket News', 'MMA News', 'Olympics News', 'Tech News', 'Startup News', 'Stocks News'].map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-gray-300 transition-colors duration-300">
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-600 dark:bg-gray-800 text-white px-4 pt-4 pb-2 shadow-md">
          <ul className="space-y-2">
            {['', 'Latest Updates', 'Apple News', 'Tesla News', 'Cricket News', 'MMA News', 'Olympics News', 'Tech News', 'Startup News', 'Stocks News'].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="block hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
