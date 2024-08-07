// import { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import SearchBar from "../components/SearchBar";
// import NoteMaker from "../components/NoteMaker";
// import ScreenshotTaker from "../components/ScreenShotTaker";
// import WeatherWidget from "../components/WeatherWidget";
// import Calender from "../components/Calender";
// import Calculator from "../components/Calculator";
// import { GiCrossedSabres } from "react-icons/gi";
// import { FiFramer } from "react-icons/fi";

// const apiKey = import.meta.env.VITE_NEWS_API_KEY;
// const initialUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

// const HomePage = () => {
//   const [articles, setArticles] = useState([]);
//   const [additionalContent, setAdditionalContent] = useState([]);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     fetchArticles(initialUrl);
//     fetchAdditionalContent();
//   }, []);

//   const fetchArticles = async (url) => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       if (data.articles && data.articles.length > 0) {
//         setArticles(data.articles);
//       }
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//     }
//   };

//   const fetchAdditionalContent = async () => {
//     try {
//       const response = await fetch(initialUrl);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       if (data.articles && data.articles.length > 0) {
//         setAdditionalContent(data.articles);
//       }
//     } catch (error) {
//       console.error("Error fetching additional content:", error);
//     }
//   };

//   const truncateText = (text, maxWords) => {
//     if (!text) return "";
//     const words = text.split(" ");
//     return words.length > maxWords
//       ? words.slice(0, maxWords).join(" ") + "..."
//       : text;
//   };

//   const responsive = {
//     superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
//   };

//   const handleSearch = async (query) => {
//     const searchUrl = `https://newsapi.org/v2/everything?q=${
//       query ? query : "darkweb"
//     }&apiKey=${apiKey}`;
//     fetchArticles(searchUrl);
//   };

//   useEffect(() => {
//     handleSearch();
//   }, []);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       <div className="container mx-auto p-4">
//         <SearchBar onSearch={handleSearch} />
//         <h1 className="text-4xl p-2 pt-3 text-center font-semibold">
//           Welcome to NexGen News
//         </h1>
//         <div className="flex flex-col lg:flex-row">
//           <aside className="lg:w-1/4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 lg:mb-0 overflow-y-auto max-h-[50rem] hide-scrollbar lg:block">
//             <h2 className="text-xl font-bold mb-4 text-center">Latest News</h2>
//             {articles.map((article, index) => (
//               <div
//                 key={index}
//                 className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4"
//               >
//                 <a href={article.url} target="_blank" rel="noopener noreferrer">
//                   <h3 className="font-bold text-lg mb-2">{article.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     {article.description}
//                   </p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//                     {article.source.name} |{" "}
//                     {new Date(article.publishedAt).toDateString()}
//                   </p>
//                 </a>
//               </div>
//             ))}
//           </aside>
//           <main className="lg:w-3/4 lg:pl-4 relative">
//             <Carousel responsive={responsive} className="mb-8 mt-6">
//               {articles.map((article, index) => (
//                 <div key={index} className="p-2">
//                   <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//                     <a
//                       href={article.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block"
//                     >
//                       {article.urlToImage && (
//                         <div className="relative h-64">
//                           <img
//                             src={article.urlToImage}
//                             alt={article.title}
//                             className="absolute inset-0 w-full h-full object-cover rounded-xl"
//                           />
//                           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
//                             <div className="text-white">
//                               <h2 className="text-base font-bold mb-1">
//                                 {truncateText(article.title, 8)}
//                               </h2>
//                               <p className="text-sm">
//                                 {truncateText(article.description, 10)}
//                               </p>
//                               <p className="text-xs mt-1">
//                                 {article.source.name} |{" "}
//                                 {new Date(article.publishedAt).toDateString()}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </Carousel>
//             <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
//               <h2 className="text-xl font-bold mb-4">Additional Content</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {additionalContent.slice(0, 4).map((content, index) => (
//                   <div
//                     key={index}
//                     className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
//                   >
//                     <a
//                       href={content.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <h3 className="font-bold text-md mb-2">
//                         {content.title}
//                       </h3>
//                       <p className="text-gray-600 dark:text-gray-400">
//                         {truncateText(content.description, 8)}
//                       </p>
//                       <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//                         {content.source.name} |{" "}
//                         {new Date(content.publishedAt).toDateString()}
//                       </p>
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <button
//               className="fixed right-4 bottom-4 z-50 p-2 bg-blue-500 text-white rounded-full shadow-lg hidden md:block"
//               onClick={toggleSidebar}
//             >
//               {isSidebarOpen ? (
//                 <GiCrossedSabres className="h-6 w-6" />
//               ) : (
//                 <FiFramer className="h-6 w-6" />
//               )}
//             </button>
//             <div
//               className={`fixed top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-lg transform ${
//                 isSidebarOpen ? "translate-x-0" : "translate-x-full"
//               } transition-transform duration-300 ease-in-out z-40 p-4 overflow-y-auto`}
//             >
//               <div className="flex flex-col gap-4 justify-center items-center">
//                 <h1 className="text-4xl font-semibold font-mono">
//                   Special Tools
//                 </h1>
//                 <div className="text-center flex items-center justify-center flex-col ">
//                   <NoteMaker />
//                 </div>
//                 <ScreenshotTaker />
//                 <WeatherWidget />
//                 <Calender />
//                 <Calculator />
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SearchBar from "../components/SearchBar";
import NoteMaker from "../components/NoteMaker";
import ScreenshotTaker from "../components/ScreenShotTaker";
import WeatherWidget from "../components/WeatherWidget";
import Calender from "../components/Calender";
import Calculator from "../components/Calculator";
import { GiCrossedSabres } from "react-icons/gi";
import { FiFramer } from "react-icons/fi";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const initialUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [additionalContent, setAdditionalContent] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchContent(initialUrl);
  }, []);

  const fetchContent = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
        setAdditionalContent(data.articles); // Assuming this was meant to fetch the same articles
      }
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  const truncateText = (text, maxWords) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const handleSearch = async (query) => {
    const searchUrl = `https://newsapi.org/v2/everything?q=${
      query ? query : "darkweb"
    }&apiKey=${apiKey}`;
    fetchContent(searchUrl);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto p-4">
        <SearchBar onSearch={handleSearch} />
        <h1 className="text-4xl p-2 pt-3 text-center font-semibold">
          Welcome to NexGen News
        </h1>
        <div className="flex flex-col lg:flex-row">
          <aside className="lg:w-1/4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 lg:mb-0 overflow-y-auto max-h-[50rem] hide-scrollbar lg:block">
            <h2 className="text-xl font-bold mb-4 text-center">Latest News</h2>
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4"
              >
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {article.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {article.source.name} |{" "}
                    {new Date(article.publishedAt).toDateString()}
                  </p>
                </a>
              </div>
            ))}
          </aside>
          <main className="lg:w-3/4 lg:pl-4 relative">
            <Carousel responsive={responsive} className="mb-8 mt-6">
              {articles.map((article, index) => (
                <div key={index} className="p-2">
                  <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {article.urlToImage && (
                        <div className="relative h-64">
                          <img
                            src={article.urlToImage}
                            alt={article.title}
                            className="absolute inset-0 w-full h-full object-cover rounded-xl"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                            <div className="text-white">
                              <h2 className="text-base font-bold mb-1">
                                {truncateText(article.title, 8)}
                              </h2>
                              <p className="text-sm">
                                {truncateText(article.description, 10)}
                              </p>
                              <p className="text-xs mt-1">
                                {article.source.name} |{" "}
                                {new Date(article.publishedAt).toDateString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
              <h2 className="text-xl font-bold mb-4">Additional Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalContent.slice(0, 4).map((content, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                  >
                    <a
                      href={content.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="font-bold text-md mb-2">
                        {content.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {truncateText(content.description, 8)}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {content.source.name} |{" "}
                        {new Date(content.publishedAt).toDateString()}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="fixed right-4 bottom-4 z-50 p-2 bg-blue-500 text-white rounded-full shadow-lg hidden md:block"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <GiCrossedSabres className="h-6 w-6" />
              ) : (
                <FiFramer className="h-6 w-6" />
              )}
            </button>
            <div
              className={`fixed top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-lg transform ${
                isSidebarOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out z-40 p-4 overflow-y-auto`}
            >
              <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-4xl font-semibold font-mono">
                  Special Tools
                </h1>
                <div className="text-center flex items-center justify-center flex-col">
                  <NoteMaker />
                </div>
                <ScreenshotTaker />
                <WeatherWidget />
                <Calender />
                <Calculator />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
