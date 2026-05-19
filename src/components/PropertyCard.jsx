import { FiBed, FiBath, FiMapPin, FiHeart } from 'react-icons/fi';
import './PropertyCard.css';

export default function PropertyCard({
  property,
  isFavorite,
  onAddFavorite,
  onViewDetails,
}) {
  return (
    <div className="property-card">
      {/* Image Container */}
      <div className="card-image-container">
        <img
          src={property.image}
          alt={property.title}
          className="card-image"
          onError={(e) => {
            e.target.src =
              'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop';
          }}
        />
        <div className="image-overlay">
          <button
            className="view-details-btn"
            onClick={() => onViewDetails(property)}
          >
            View Details
          </button>
        </div>

        {/* Favorite Button */}
        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onAddFavorite(property.id)}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <FiHeart size={20} />
        </button>

        {/* Price Badge */}
        <div className="price-badge">${(property.price / 1000).toFixed(0)}K</div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <h3 className="card-title">{property.title}</h3>

        <div className="card-location flex gap-10">
          <FiMapPin size={16} className="icon" />
          <p className="text-muted">{property.location}</p>
        </div>

        {/* Features */}
        <div className="card-features">
          <div className="feature">
            <FiBed size={18} />
            <span>{property.bedrooms}</span>
          </div>
          <div className="feature">
            <FiBath size={18} />
            <span>{property.bathrooms}</span>
          </div>
          <div className="feature">
            <span className="area-icon">📐</span>
            <span>{property.area} sqft</span>
          </div>
        </div>

        {/* Description */}
        <p className="card-description text-muted">{property.description}</p>
      </div>
    </div>
  );
}