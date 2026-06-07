import { useState } from 'react';
import { useScroll } from '../../hooks';
import { Button } from '../ui';
import './Navbar.css';

export function Navbar({ onScheduleClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAtTop } = useScroll();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScheduleClick = () => {
    onScheduleClick();
    closeMenu();
  };

  return (
    <nav className={`navbar ${!isAtTop ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">🦷</span>
          <span className="logo-text">Belo Sorriso</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#services" className="nav-link" onClick={closeMenu}>
            Serviços
          </a>
          <a href="#team" className="nav-link" onClick={closeMenu}>
            Equipe
          </a>
          <a href="#testimonials" className="nav-link" onClick={closeMenu}>
            Depoimentos
          </a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contato
          </a>
          <Button
            variant="primary"
            size="sm"
            onClick={handleScheduleClick}
            className="navbar-btn"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </nav>
  );
}
