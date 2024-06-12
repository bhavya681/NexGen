import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsArticle from './NewsArticle';

const NewsFeed = ({ apiUrl }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(apiUrl);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news articles', error);
      }
    };

    fetchArticles();
  }, [apiUrl]);

  return (
    <div className="container mx-auto py-8 bg-gray-900 dark:bg-gray-800 text-white ">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <NewsArticle key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
