import logo from "../assets/logo2.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <img
            src={logo}
            alt="logo for marleytronics"
            className="footer-logo"
          />

          <p>
            1234 E-Commerce St.<span> City, State, 12345 </span>
          </p>
          <p>Email: support@marleytronics.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section customer-support">
          <h3>Customer Support</h3>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
          </ul>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-pinterest"></i> Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
