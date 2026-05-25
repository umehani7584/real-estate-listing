import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>EstateHub</h3>
            <p>Your trusted partner in finding the perfect property. Connecting buyers, sellers, and agents.</p>
            <div className="social-links">
              <a href="#/" title="Facebook"><FiFacebook size={20} /></a>
              <a href="#/" title="Twitter"><FiTwitter size={20} /></a>
              <a href="#/" title="Instagram"><FiInstagram size={20} /></a>
              <a href="#/" title="LinkedIn"><FiLinkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#/">Home</a></li>
              <li><a href="#/">Browse Properties</a></li>
              <li><a href="#/">About Us</a></li>
              <li><a href="#/">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#/">Blog</a></li>
              <li><a href="#/">FAQ</a></li>
              <li><a href="#/">Buying Guide</a></li>
              <li><a href="#/">Market Report</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <FiPhone size={18} />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className="contact-item">
              <FiMail size={18} />
              <a href="mailto:info@estatehub.com">info@estatehub.com</a>
            </div>
            <div className="contact-item">
              <FiMapPin size={18} />
              <span>123 Real St, New York, NY</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
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
    </footer>
  );
}