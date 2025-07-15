import { Link } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <nav className="navigation-menu">
      <div className="navigation-left">
        <Link to="/">Accueil</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/apropos">A propos</Link>
      </div>
      <div className="navigation-right">
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavigationMenu;
