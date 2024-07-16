import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar-container bg-gray-700 p-4 rounded-lg mb-6 md:w-1/2 mx-auto">
      <div className="flex items-center justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for news..."
          className="p-2 rounded-l-lg border border-gray-800 text-gray-800 focus:outline-none focus:border-blue-500 flex-grow"
        />
        <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded-r-lg ml-2 md:ml-0">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
