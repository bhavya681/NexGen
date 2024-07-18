// import React, { useEffect, useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const apiKey = '6a2ce03436f44cb992c55245e839694f';
// const initialUrl = `https://newsapi.org/v2/everything?q=car&apiKey=${apiKey}`;

// const CarUpdatesPage = () => {
//   const [articles, setArticles] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchArticles(initialUrl);
//   }, []);

//   const fetchArticles = async (url) => {
//     setLoading(true);
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       if (data.articles && data.articles.length > 0) {
//         setArticles(prevArticles => [...prevArticles, ...data.articles]);
//         setPage(prevPage => prevPage + 1);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error('Error fetching articles:', error);
//     }
//     setLoading(false);
//   };

//   const fetchMoreArticles = () => {
//     const nextPageUrl = `https://newsapi.org/v2/everything?q=car&apiKey=${apiKey}&page=${page + 1}`;
//     fetchArticles(nextPageUrl);
//   };

//   return (
//     <div className="container mx-auto p-4 min-h-screen bg-gray-900 text-white">
//       <header className="bg-blue-800 text-white p-4 mb-8 rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold text-center">Latest Car Updates</h1>
//       </header>
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreArticles}
//         hasMore={hasMore}
//         loader={<h4 className="text-center">Loading...</h4>}
//         endMessage={<p className="text-center">No more articles</p>}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         {articles.map((article, index) => (
//           <div key={index} className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               {article.urlToImage && (
//                 <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
//               )}
//               <div className="p-4">
//                 <h2 className="text-lg font-bold text-white mb-2">{article.title}</h2>
//                 <p className="text-gray-300">{article.description}</p>
//                 <p className="text-sm text-gray-500 mt-2">{article.source.name} | {new Date(article.publishedAt).toDateString()}</p>
//               </div>
//             </a>
//           </div>
//         ))}
//       </InfiniteScroll>
//       {loading && <p className="text-center">Loading more articles...</p>}
//     </div>
//   );
// };

// export default CarUpdatesPage;


import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const apiKey = import.meta.env.REACT_APP_NEWS_API_KEY;
const initialUrl = `https://newsapi.org/v2/everything?q=car&apiKey=${apiKey}`;

const CarUpdatesPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchArticles(initialUrl);
  }, []);

  const fetchArticles = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        setArticles(prevArticles => [...prevArticles, ...data.articles]);
        setPage(prevPage => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
    setLoading(false);
  };

  const fetchMoreArticles = () => {
    const nextPageUrl = `https://newsapi.org/v2/everything?q=car&apiKey=${apiKey}&page=${page + 1}`;
    fetchArticles(nextPageUrl);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gray-900 text-white">
      <header className="bg-blue-800 text-white p-4 mb-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">Latest Car Updates</h1>
      </header>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreArticles}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={<p className="text-center">No more articles</p>}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-lg font-bold text-white mb-2">{article.title}</h2>
                <p className="text-gray-300">{article.description}</p>
                <p className="text-sm text-gray-500 mt-2">{article.source.name} | {new Date(article.publishedAt).toDateString()}</p>
              </div>
            </a>
          </div>
        ))}
      </InfiniteScroll>
      {loading && <p className="text-center">Loading more articles...</p>}
    </div>
  );
};

export default CarUpdatesPage;
