import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

export default function Hero({ onExplore }) {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Find Your Dream Property Today
          </h1>
          <p className="hero-subtitle">
            Discover premium properties in the most sought-after locations. Your perfect home is just a click away.
          </p>
          <button className="hero-cta" onClick={onExplore}>
            Explore Properties
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}