import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import PropertyModal from '../components/PropertyModal';
import { propertiesData } from '../data/properties';
import './Favorites.css';

export default function Favorites({ favorites, onAddFavorite }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const favoriteProperties = propertiesData.filter(p => favorites.includes(p.id));

  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <h1>My Favorite Properties</h1>
        <p className="favorites-count">
          {favorites.length} property{favorites.length !== 1 ? 'ies' : ''} saved
        </p>
      </div>

      {favoriteProperties.length > 0 ? (
        <div className="favorites-grid">
          {favoriteProperties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onAddFavorite={onAddFavorite}
              onViewDetails={setSelectedProperty}
            />
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <div className="empty-icon">❤️</div>
          <h2>No Favorites Yet</h2>
          <p>Start adding properties to your favorites to see them here.</p>
          <a href="#/" className="btn-back-home">
            Back to Home
          </a>
        </div>
      )}

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
}