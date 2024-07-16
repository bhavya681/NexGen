import React, { useState } from 'react';

const NewsArticle = ({ article, onBookmark }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    onBookmark(article);
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg mb-4 shadow-lg transition-transform transform hover:scale-105">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-t-lg" />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="mb-4">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Read more</a>
        <button onClick={handleBookmark} className={`ml-4 ${bookmarked ? 'text-yellow-500' : 'text-gray-500'}`}>
          {bookmarked ? 'Bookmarked' : 'Bookmark'}
        </button>
      </div>
    </div>
  );
};

export default NewsArticle;
