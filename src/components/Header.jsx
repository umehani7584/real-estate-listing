import { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';
import './Header.css';

export default function Header({ currentPage, onPageChange }) {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    onPageChange(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content flex-between">
          {/* Logo */}
          <div className="logo flex gap-10">
            <div className="logo-icon">🏠</div>
            <h1>EstateHub</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="nav-desktop flex gap-20">
            <button
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button
              className={`nav-link ${currentPage === 'favorites' ? 'active' : ''}`}
              onClick={() => handleNavClick('favorites')}
            >
              Favorites
            </button>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="header-actions flex gap-15">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation - Mobile */}
        {mobileMenuOpen && (
          <nav className="nav-mobile">
            <button
              className={`nav-link-mobile ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button
              className={`nav-link-mobile ${currentPage === 'favorites' ? 'active' : ''}`}
              onClick={() => handleNavClick('favorites')}
            >
              Favorites
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}