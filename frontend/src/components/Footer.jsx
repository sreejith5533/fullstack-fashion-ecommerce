import "../styles/footer.css";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h4>StoreFront</h4>
          <p>Minimalist luxury ecommerce for modern lifestyle products.</p>
        </div>
        <ul className="footer-nav">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/privacy">
              Privacy Policy
            </NavLink>
          </li>
        </ul>
        <p className="copyright-text">
          &copy; 2026 STOREFRONT MINIMALIST LUXURY ECOMMERCE.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
