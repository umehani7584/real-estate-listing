import { FiX, FiBed, FiBath, FiMapPin, FiRuler } from 'react-icons/fi';
import './PropertyModal.css';

export default function PropertyModal({ property, isOpen, onClose }) {
  if (!isOpen || !property) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} title="Close modal">
          <FiX size={24} />
        </button>

        {/* Image */}
        <div className="modal-image-container">
          <img
            src={property.image}
            alt={property.title}
            className="modal-image"
            onError={(e) => {
              e.target.src =
                'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop';
            }}
          />
        </div>

        {/* Content */}
        <div className="modal-body">
          {/* Title & Price */}
          <div className="modal-header">
            <h2 className="modal-title">{property.title}</h2>
            <div className="modal-price">${property.price.toLocaleString()}</div>
          </div>

          {/* Location */}
          <div className="modal-location flex gap-10">
            <FiMapPin size={20} className="icon" />
            <p>{property.location}</p>
          </div>

          {/* Features Grid */}
          <div className="modal-features">
            <div className="modal-feature">
              <FiBed size={24} />
              <div>
                <div className="feature-label">Bedrooms</div>
                <div className="feature-value">{property.bedrooms}</div>
              </div>
            </div>

            <div className="modal-feature">
              <FiBath size={24} />
              <div>
                <div className="feature-label">Bathrooms</div>
                <div className="feature-value">{property.bathrooms}</div>
              </div>
            </div>

            <div className="modal-feature">
              <FiRuler size={24} />
              <div>
                <div className="feature-label">Area</div>
                <div className="feature-value">{property.area} sqft</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="modal-section">
            <h3 className="section-title">Description</h3>
            <p className="section-text">{property.description}</p>
          </div>

          {/* Additional Info */}
          <div className="modal-section">
            <h3 className="section-title">Property Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Price per sqft</span>
                <span className="detail-value">
                  ${(property.price / property.area).toFixed(2)}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Total Area</span>
                <span className="detail-value">{property.area} sqft</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="modal-actions">
            <button className="btn-primary">Contact Agent</button>
            <button className="btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}