import { ShoppingBag, Heart, UserRound } from "lucide-react";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header-left">
          <div className="header-logo">
            <img src={logo} alt="Marleytronics Logo" className="logo" />
          </div>
        </div>

        <div className="header-center">
          <nav className="header-nav">
            <Link to="/" className="link">
              <li className="nav-link">Home</li>
            </Link>
            <Link to="/shop" className="link">
              <li className="nav-link">Shop</li>
            </Link>
            <Link to="/categories" className="link">
              <li className="nav-link">Categories</li>
            </Link>
            <Link to="/sale" className="link">
              <li className="nav-link">Sale</li>
            </Link>
          </nav>
        </div>

        <div className="header-right">
          <div className="header-icons">
            <Heart className="icon favorite-icon" />

            <ShoppingBag className="icon cart-icon" />

            <UserRound className="icon user-icon" />
          </div>
        </div>
      </header>
      <div className="header2">
        <p>
          🔥 Limited-time offer: 20% off your first order with code WELCOME20
        </p>
      </div>
    </div>
  );
}

export default Header;
