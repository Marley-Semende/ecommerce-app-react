import { ShoppingBag, Heart, UserRound } from "lucide-react";
import logo from "../assets/logo2.png";

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
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#shop" className="nav-link">
              Shop
            </a>
            <a href="#categories" className="nav-link">
              Categories
            </a>
            <a href="#sale" className="nav-link">
              Sale
            </a>
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
