import { FiArrowRight } from 'react-icons/fi';
import PropertyCard from './PropertyCard';
import './FeaturedProperties.css';

export default function FeaturedProperties({ 
  properties, 
  favorites, 
  onAddFavorite, 
  onViewDetails, 
  onShowListings 
}) {
  // Show only first 3 properties
  const featuredProps = properties.slice(0, 3);

  return (
    <section className="featured-properties">
      <div className="container">
        <div className="featured-header">
          <div>
            <h2 className="featured-title">Featured Properties</h2>
            <p className="featured-subtitle">
              Handpicked premium properties for you
            </p>
          </div>
          <button className="view-all-btn" onClick={onShowListings}>
            View All Properties
            <FiArrowRight size={20} />
          </button>
        </div>

        <div className="featured-grid">
          {featuredProps.map(property => (
            <div 
              key={property.id} 
              onClick={onShowListings}
              className="featured-card-wrapper"
            >
              <PropertyCard
                property={property}
                isFavorite={favorites.includes(property.id)}
                onAddFavorite={onAddFavorite}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}