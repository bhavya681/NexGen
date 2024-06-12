import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AppleNewsPage from './pages/AppleNewsPage';
import BusinessNewsPage from './pages/BusinessNewsPage';
import TechCrunchNewsPage from './pages/TechCrunchNewsPage';
import TeslaNewsPage from './pages/TeslaNewsPage';
import MmaPage from './pages/MmaPage';
import UfcPage from './pages/UfcPage';
import StartUpNews from './pages/StartUpNews';
import Stock from './pages/Stock';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';


const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 dark:bg-gray-800 text-white  min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/latest-updates" element={<AboutPage />} />
            <Route path="/apple-news" element={<AppleNewsPage />} />
            <Route path="/tesla-news" element={<TeslaNewsPage />} />
            <Route path="/cricket-news" element={<BusinessNewsPage />} />
            <Route path="/olympics-news" element={<TechCrunchNewsPage />} />
            <Route path="/mma-news" element={<MmaPage />} />
            <Route path="/tech-news" element={<UfcPage />} />
            <Route path="/startup-news" element={<StartUpNews />} />
            <Route path="/stocks-news" element={<Stock />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
``
