import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Favorites from './pages/Favorites';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddFavorite = (propertyId) => {
    setFavorites((prev) => {
      const updated = prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {currentPage === 'home' && (
          <Home favorites={favorites} onAddFavorite={handleAddFavorite} />
        )}
        {currentPage === 'listings' && (
          <Listings favorites={favorites} onAddFavorite={handleAddFavorite} />
        )}
        {currentPage === 'favorites' && (
          <Favorites favorites={favorites} onAddFavorite={handleAddFavorite} />
        )}
        {currentPage === 'about' && (
          <div className="container" style={{padding: '40px 0'}}>
            <h1>About Us</h1>
            <p>Coming soon...</p>
          </div>
        )}
        {currentPage === 'contact' && (
          <div className="container" style={{padding: '40px 0'}}>
            <h1>Contact Us</h1>
            <p>Coming soon...</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;