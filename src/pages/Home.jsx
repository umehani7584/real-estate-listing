import { useState } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import FeaturedProperties from '../components/FeaturedProperties';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import PropertyCard from '../components/PropertyCard';
import PropertyModal from '../components/PropertyModal';
import { propertiesData } from '../data/properties';
import './Home.css';

export default function Home({ favorites, onAddFavorite }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([200000, 1500000]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBedrooms, setSelectedBedrooms] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [showListings, setShowListings] = useState(false);

  const locations = [...new Set(propertiesData.map(p => p.location))];

  const applySorting = (properties, sortType) => {
    const sorted = [...properties];
    
    switch (sortType) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'newest':
        return sorted.sort((a, b) => b.id - a.id);
      case 'area-large':
        return sorted.sort((a, b) => b.area - a.area);
      default:
        return sorted;
    }
  };

  const handleApplyFilters = () => {
    let filtered = propertiesData.filter(property => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPrice =
        property.price >= priceRange[0] && property.price <= priceRange[1];

      const matchesLocation =
        selectedLocation === '' || property.location === selectedLocation;

      const matchesBedrooms =
        selectedBedrooms === '' || property.bedrooms.toString() === selectedBedrooms;

      return matchesSearch && matchesPrice && matchesLocation && matchesBedrooms;
    });

    filtered = applySorting(filtered, selectedSort);
    setFilteredProperties(filtered);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setPriceRange([200000, 1500000]);
    setSelectedLocation('');
    setSelectedBedrooms('');
    setSelectedSort('');
    setFilteredProperties(propertiesData);
  };

  const handleShowListings = () => {
    setShowListings(true);
    // Scroll to search section
    setTimeout(() => {
      const searchElement = document.querySelector('.search-bar-container');
      if (searchElement) {
        searchElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <Hero onExplore={handleShowListings} />

      {/* Stats Section */}
      <Stats />

      {/* Featured Properties */}
      <FeaturedProperties
        properties={propertiesData}
        favorites={favorites}
        onAddFavorite={onAddFavorite}
        onViewDetails={setSelectedProperty}
        onShowListings={handleShowListings}
      />

      {/* Listings Section - Only shows when user clicks "View All" */}
      {showListings && (
        <>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <div className="home-content">
            {/* Filters Sidebar */}
            <aside className="filters-sidebar">
              <Filters
                priceRange={priceRange}
                onPriceChange={setPriceRange}
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
                selectedBedrooms={selectedBedrooms}
                onBedroomsChange={setSelectedBedrooms}
                selectedSort={selectedSort}
                onSortChange={setSelectedSort}
                locations={locations}
              />

              {/* Apply & Reset Buttons */}
              <div className="filter-actions">
                <button className="btn-apply" onClick={handleApplyFilters}>
                  Apply Filters
                </button>
                <button className="btn-reset-secondary" onClick={handleResetFilters}>
                  Reset All
                </button>
              </div>
            </aside>

            {/* Properties Grid */}
            <main className="properties-main">
              <div className="results-header">
                <h2>Available Properties</h2>
                <p className="results-count">{filteredProperties.length} properties found</p>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="properties-grid">
                  {filteredProperties.map(property => (
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
                <div className="no-results">
                  <p>No properties match your filters.</p>
                  <button className="btn-reset-secondary" onClick={handleResetFilters}>
                    Reset Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </>
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