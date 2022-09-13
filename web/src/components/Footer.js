import logoAdalab from '../images/logo-adalab.png';
import '../styles/layout/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">Reactivas profile-cards @2022</p>
      <img
        className="footer__logo"
        src={logoAdalab}
        alt="Logo Adalab"
        title="Logo Adalab"
      />
    </footer>
  );
}

export default Footer;
