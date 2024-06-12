// // import { useEffect, useState } from 'react';
// // import Carousel from 'react-multi-carousel';
// // import 'react-multi-carousel/lib/styles.css';

// // const apiKey = '6a2ce03436f44cb992c55245e839694f';
// // const initialUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

// // const HomePage = () => {
// //   const [articles, setArticles] = useState([]);
// //   const [additionalContent, setAdditionalContent] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [hasMore, setHasMore] = useState(true);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     fetchArticles(initialUrl);
// //     fetchAdditionalContent();
// //   }, []);

// //   const fetchArticles = async (url) => {
// //     setLoading(true);
// //     try {
// //       const response = await fetch(url);
// //       const data = await response.json();
// //       if (data.articles && data.articles.length > 0) {
// //         setArticles(prevArticles => [...prevArticles, ...data.articles]);
// //         setPage(prevPage => prevPage + 1);
// //       } else {
// //         setHasMore(false);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching articles:', error);
// //     }
// //     setLoading(false);
// //   };

// //   const fetchAdditionalContent = async () => {
// //     try {
// //       const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
// //       const data = await response.json();
// //       if (data.articles && data.articles.length > 0) {
// //         setAdditionalContent(data.articles);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching additional content:', error);
// //     }
// //   };

// //   const responsive = {
// //     superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
// //     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
// //     tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
// //     mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
// //       <div className="container mx-auto p-4">
// //         <div className="flex flex-col lg:flex-row">
// //           <aside className="lg:w-1/4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 lg:mb-0 overflow-y-auto max-h-screen" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
// //             <h2 className="text-xl font-bold mb-4">Latest News</h2>
// //             {articles.map((article, index) => (
// //               <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
// //                 <a href={article.url} target="_blank" rel="noopener noreferrer">
// //                   <h3 className="font-bold text-lg mb-2">{article.title}</h3>
// //                   <p className="text-gray-600 dark:text-gray-400">{article.description}</p>
// //                   <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{article.source.name} | {new Date(article.publishedAt).toDateString()}</p>
// //                 </a>
// //               </div>
// //             ))}
// //             <div className="text-center text-gray-600 dark:text-gray-400 mt-4">
// //               <p>Find more interesting articles below!</p>
// //               {/* Add more interesting content here */}
// //             </div>
// //           </aside>
// //           <main className="lg:w-3/4 lg:pl-4">
// //             <Carousel responsive={responsive} className="mb-8">
// //               {articles.map((article, index) => (
// //                 <div key={index} className="p-4">
// //                   <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
// //                     <a href={article.url} target="_blank" rel="noopener noreferrer">
// //                       {article.urlToImage && (
// //                         <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
// //                       )}
// //                       <div className="p-4">
// //                         <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">{article.title}</h2>
// //                         <p className="text-gray-600 dark:text-gray-400">{article.description}</p>
// //                         <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{article.source.name} | {new Date(article.publishedAt).toDateString()}</p>
// //                       </div>
// //                     </a>
// //                   </div>
// //                 </div>
// //               ))}
// //             </Carousel>
// //             {/* Additional content below the carousel */}
// //             <div className="text-center text-gray-600 dark:text-gray-400 mt-4 max-h-[28rem] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
// //               <h2 className="text-xl font-bold mb-4">Additional Content</h2>
// //               {additionalContent.map((content, index) => (
// //                 <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
// //                   <a href={content.url} target="_blank" rel="noopener noreferrer">
// //                     <h3 className="font-bold text-lg mb-2">{content.title}</h3>
// //                     <p className="text-gray-600 dark:text-gray-400">{content.description}</p>
// //                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{content.source.name} | {new Date(content.publishedAt).toDateString()}</p>
// //                   </a>
// //                 </div>
// //               ))}
// //             </div>
// //             {loading && <p className="text-center">Loading more articles...</p>}
// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;

// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// const apiKey = '6a2ce03436f44cb992c55245e839694f';
// const initialUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

// const HomePage = () => {
//   const [articles, setArticles] = useState([]);
//   const [additionalContent, setAdditionalContent] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchArticles(initialUrl);
//     fetchAdditionalContent();
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

//   const fetchAdditionalContent = async () => {
//     try {
//       const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
//       const data = await response.json();
//       if (data.articles && data.articles.length > 0) {
//         setAdditionalContent(data.articles);
//       }
//     } catch (error) {
//       console.error('Error fetching additional content:', error);
//     }
//   };

//   const responsive = {
//     superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
//   };

//   const truncateText = (text, maxWords) => {
//     if (!text) return '';  // Ensure text is not null or undefined
//     const words = text.split(' ');
//     return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 mt-[1px] pt-[4rem] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       <div className="container mx-auto p-4">
//         <div className="flex flex-col lg:flex-row">
//           <aside className="lg:w-1/4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 lg:mb-0 overflow-y-auto max-h-[50rem] hide-scrollbar">
//             <h2 className="text-xl font-bold mb-4 text-center">Latest News</h2>
//             {articles.map((article, index) => (
//               <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
//                 <a href={article.url} target="_blank" rel="noopener noreferrer">
//                   <h3 className="font-bold text-lg mb-2">{article.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-400">{article.description}</p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{article.source.name} | {new Date(article.publishedAt).toDateString()}</p>
//                 </a>
//               </div>
//             ))}
//             <div className="text-center text-gray-600 dark:text-gray-400 mt-4">
//               <p>Find more interesting articles below!</p>
//               {/* Add more interesting content here */}
//             </div>
//           </aside>
//           <main className="lg:w-3/4 lg:pl-4">
//           <h1 className='text-4xl p-2 pt-3 text-center font-semibold font-sans'>Welcome to NexGen News</h1>
//             <Carousel responsive={responsive} className="mb-8 mt-6">
//               {articles.map((article, index) => (
//                 <div key={index} className="p-2">
//                   <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//                     <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
//                       {article.urlToImage && (
//                         <div className="relative h-64">
//                           <img src={article.urlToImage} alt={article.title} className="absolute inset-0 w-full h-full object-cover  rounded-xl" />
//                           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
//                             <div className="text-white">
//                               <h2 className="text-base font-bold mb-1">{truncateText(article.title, 8)}</h2>
//                               <p className="text-sm">{truncateText(article.description, 10)}</p>
//                               <p className="text-xs mt-1">{article.source.name} | {new Date(article.publishedAt).toDateString()}</p>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </Carousel>
//             {/* Additional content below the carousel */}
            
//             <div className="text-center text-gray-600 dark:text-gray-400 mt-40 max-h-44 overflow-y-auto hide-scrollbar">
//               <h2 className="text-xl font-bold mb-4">Additional Content</h2>
//               {additionalContent.map((content, index) => (
//                 <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
//                   <a href={content.url} target="_blank" rel="noopener noreferrer">
//                     <h3 className="font-bold text-lg mb-2">{content.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-400">{truncateText(content.description, 10)}</p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{content.source.name} | {new Date(content.publishedAt).toDateString()}</p>
//                   </a>
//                 </div>
//               ))}
//             </div>
//             {loading && <p className="text-center">Loading more articles...</p>}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const apiKey = '6a2ce03436f44cb992c55245e839694f';
const initialUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [additionalContent, setAdditionalContent] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchArticles(initialUrl);
    fetchAdditionalContent();
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

  const fetchAdditionalContent = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        setAdditionalContent(data.articles);
      }
    } catch (error) {
      console.error('Error fetching additional content:', error);
    }
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const truncateText = (text, maxWords) => {
    if (!text) return '';  
    const words = text.split(' ');
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-[1px] pt-[4rem] dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <aside className="lg:w-1/4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 lg:mb-0 overflow-y-auto max-h-[50rem] hide-scrollbar lg:block">
            <h2 className="text-xl font-bold mb-4 text-center">Latest News</h2>
            {articles.map((article, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{article.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{article.source.name} | {new Date(article.publishedAt).toDateString()}</p>
                </a>
              </div>
            ))}
            <div className="text-center text-gray-600 dark:text-gray-400 mt-4">
              <p>Find more interesting articles below!</p>
              {/* Add more interesting content here */}
            </div>
          </aside>
          <main className="lg:w-3/4 lg:pl-4">
            <h1 className='text-4xl p-2 pt-3 text-center font-semibold font-sans'>Welcome to NexGen News</h1>
            <Carousel responsive={responsive} className="mb-8 mt-6">
              {articles.map((article, index) => (
                <div key={index} className="p-2">
                  <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
                      {article.urlToImage && (
                        <div className="relative h-64">
                          <img src={article.urlToImage} alt={article.title} className="absolute inset-0 w-full h-full object-cover  rounded-xl" />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                            <div className="text-white">
                              <h2 className="text-base font-bold mb-1">{truncateText(article.title, 8)}</h2>
                              <p className="text-sm">{truncateText(article.description, 10)}</p>
                              <p className="text-xs mt-1">{article.source.name} | {new Date(article.publishedAt).toDateString()}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
            {/* Additional content below the carousel */}
            <div className="text-center text-gray-600 dark:text-gray-400 mt-40 max-h-44 overflow-y-auto hide-scrollbar">
              <h2 className="text-xl font-bold mb-4">Additional Content</h2>
              {additionalContent.map((content, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                  <a href={content.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="font-bold text-lg mb-2">{content.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{truncateText(content.description, 10)}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{content.source.name} | {new Date(content.publishedAt).toDateString()}</p>
                  </a>
                </div>
              ))}
            </div>
            {loading && <p className="text-center">Loading more articles...</p>}
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
