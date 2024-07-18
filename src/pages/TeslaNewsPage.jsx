// import React, { useEffect, useState } from 'react';

// const apiKey = '6a2ce03436f44cb992c55245e839694f';
// const apiUrl = `https://newsapi.org/v2/everything?q=tesla&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

// const TeslaNewsPage = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         setNews(data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="container mx-auto p-4 min-h-screen bg-gray-900 text-white">
//       <header className="bg-blue-800 text-white p-4 mb-8 rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold text-center">Tesla News</h1>
//       </header>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {news.map((article, index) => (
//           <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4 m-4">
//             <img src={article.urlToImage} alt={article.title} className="rounded-lg mb-4 h-48 w-full object-cover" />
//             <h2 className="text-xl font-bold mb-2">{article.title}</h2>
//             <p className="text-gray-300 mb-4">{article.description}</p>
//             <p className="text-gray-500">Published at: {article.publishedAt}</p>
//             <a href={article.url} className="text-blue-400 hover:text-blue-600 hover:underline">Read more</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeslaNewsPage;


import React, { useEffect, useState } from 'react';

const apiKey = import.meta.env.REACT_APP_NEWS_API_KEY; // Ensure you set this in your environment variables
const apiUrl = `https://newsapi.org/v2/everything?q=tesla&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

const TeslaNewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gray-900 text-white">
      <header className="bg-blue-800 text-white p-4 mb-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">Tesla News</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4 m-4">
            <img src={article.urlToImage} alt={article.title} className="rounded-lg mb-4 h-48 w-full object-cover" />
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-300 mb-4">{article.description}</p>
            <p className="text-gray-500">Published at: {article.publishedAt}</p>
            <a href={article.url} className="text-blue-400 hover:text-blue-600 hover:underline">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeslaNewsPage;
