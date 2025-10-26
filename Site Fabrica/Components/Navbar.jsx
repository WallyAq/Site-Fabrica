import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Menu de navegação */}
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMenu}>
              Início
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/artigos" className="navbar-link" onClick={closeMenu}>
              Artigos
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/cursos" className="navbar-link" onClick={closeMenu}>
              Cursos
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/eventos" className="navbar-link" onClick={closeMenu}>
              Eventos
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/servicos" className="navbar-link" onClick={closeMenu}>
              Serviços
            </Link>
          </li>
        </ul>

        {/* Menu hamburger para mobile */}
        <div
          className={`navbar-hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>
    </nav>
  );
}
