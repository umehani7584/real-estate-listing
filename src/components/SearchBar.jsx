import { FiSearch, FiX } from 'react-icons/fi';
import './SearchBar.css';

export default function SearchBar({ searchTerm, onSearchChange }) {
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <FiSearch className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search by property title or location..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-btn" onClick={handleClear} title="Clear search">
            <FiX size={18} />
          </button>
        )}
      </div>
    </div>
  );
}