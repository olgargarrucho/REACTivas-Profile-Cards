import logo from '../images/scream-team-04.png';
import '../styles/layout/header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header__profile">
      <Link
        className="header__profile__link"
        to="/"
        title="Volver a la página principal"
      >
        <img
          className="header__profile__logo"
          src={logo}
          alt="Logo Awesome Profile Cards"
          title="Logo Awesome Profile Cards"
        />
      </Link>
    </header>
  );
}

export default Header;
