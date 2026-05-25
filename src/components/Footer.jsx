import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest properties and real estate tips delivered to your inbox</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                <FiArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <div className="footer-icon">🏡</div>
                <h3>EstateHub</h3>
              </div>
              <p>Your trusted partner in finding premium properties and making your dream home a reality.</p>
              <div className="social-links">
                <a href="#/" title="Facebook" className="social-link"><FiFacebook size={20} /></a>
                <a href="#/" title="Twitter" className="social-link"><FiTwitter size={20} /></a>
                <a href="#/" title="Instagram" className="social-link"><FiInstagram size={20} /></a>
                <a href="#/" title="LinkedIn" className="social-link"><FiLinkedin size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Explore</h4>
              <ul>
                <li><a href="#/">Browse Properties</a></li>
                <li><a href="#/">New Listings</a></li>
                <li><a href="#/">Featured Properties</a></li>
                <li><a href="#/">Property Guides</a></li>
                <li><a href="#/">Market Reports</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#/">About Us</a></li>
                <li><a href="#/">Our Team</a></li>
                <li><a href="#/">Careers</a></li>
                <li><a href="#/">Blog</a></li>
                <li><a href="#/">Press</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Get in Touch</h4>
              <div className="contact-item">
                <FiPhone size={18} />
                <div>
                  <p className="contact-label">Phone</p>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="contact-item">
                <FiMail size={18} />
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:info@estatehub.com">info@estatehub.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FiMapPin size={18} />
                <div>
                  <p className="contact-label">Address</p>
                  <span>123 Real Estate Ave, New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 EstateHub. All rights reserved.</p>
            <div className="footer-links">
              <a href="#/">Privacy Policy</a>
              <span>•</span>
              <a href="#/">Terms of Service</a>
              <span>•</span>
              <a href="#/">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}