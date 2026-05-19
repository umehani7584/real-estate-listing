import { useState } from 'react';
import { FiChevronDown, FiRotateCcw } from 'react-icons/fi';
import './Filters.css';

export default function Filters({
  priceRange,
  onPriceChange,
  selectedLocation,
  onLocationChange,
  selectedBedrooms,
  onBedroomsChange,
  locations,
}) {
  const [expandedFilter, setExpandedFilter] = useState(null);

  const toggleFilter = (filter) => {
    setExpandedFilter(expandedFilter === filter ? null : filter);
  };

  const handleResetFilters = () => {
    onPriceChange([200000, 1500000]);
    onLocationChange('');
    onBedroomsChange('');
  };

  return (
    <div className="filters-container">
      <div className="filters-header flex-between">
        <h3>Filters</h3>
        <button
          className="reset-btn"
          onClick={handleResetFilters}
          title="Reset all filters"
        >
          <FiRotateCcw size={18} />
          Reset
        </button>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <button
          className="filter-title flex-between"
          onClick={() => toggleFilter('price')}
        >
          <span>Price Range</span>
          <FiChevronDown
            className={`chevron ${expandedFilter === 'price' ? 'open' : ''}`}
            size={18}
          />
        </button>
        {expandedFilter === 'price' && (
          <div className="filter-content">
            <div className="price-inputs">
              <div className="price-input-group">
                <label>Min</label>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    onPriceChange([parseInt(e.target.value), priceRange[1]])
                  }
                  min="0"
                  step="10000"
                />
              </div>
              <div className="price-input-group">
                <label>Max</label>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    onPriceChange([priceRange[0], parseInt(e.target.value)])
                  }
                  min="0"
                  step="10000"
                />
              </div>
            </div>
            <div className="price-display">
              ${(priceRange[0] / 1000).toFixed(0)}K - ${(priceRange[1] / 1000).toFixed(0)}K
            </div>
          </div>
        )}
      </div>

      {/* Location Filter */}
      <div className="filter-group">
        <button
          className="filter-title flex-between"
          onClick={() => toggleFilter('location')}
        >
          <span>Location</span>
          <FiChevronDown
            className={`chevron ${expandedFilter === 'location' ? 'open' : ''}`}
            size={18}
          />
        </button>
        {expandedFilter === 'location' && (
          <div className="filter-content">
            <select
              value={selectedLocation}
              onChange={(e) => onLocationChange(e.target.value)}
              className="location-select"
            >
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Bedrooms Filter */}
      <div className="filter-group">
        <button
          className="filter-title flex-between"
          onClick={() => toggleFilter('bedrooms')}
        >
          <span>Bedrooms</span>
          <FiChevronDown
            className={`chevron ${expandedFilter === 'bedrooms' ? 'open' : ''}`}
            size={18}
          />
        </button>
        {expandedFilter === 'bedrooms' && (
          <div className="filter-content">
            <div className="bedroom-options">
              {[
                { value: '', label: 'All' },
                { value: '1', label: '1 Bedroom' },
                { value: '2', label: '2 Bedrooms' },
                { value: '3', label: '3 Bedrooms' },
                { value: '4', label: '4+ Bedrooms' },
              ].map((option) => (
                <label key={option.value} className="bedroom-option">
                  <input
                    type="radio"
                    name="bedrooms"
                    value={option.value}
                    checked={selectedBedrooms === option.value}
                    onChange={(e) => onBedroomsChange(e.target.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}