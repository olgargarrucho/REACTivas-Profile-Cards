import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../styles/layout/main-home.scss';

function Landing() {
  return (
    <>
      <Header />

      <main className="main">
        <h1 className="main__title">Crea tu tarjeta de visita</h1>
        <p className="main__description">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>

        <ul className="main__menu">
          <li className="main__menu__item">
            <i className="icon fa-regular fa-object-ungroup"></i>Diseña
          </li>

          <li className="main__menu__item">
            <i className="icon fa-regular fa-keyboard"></i>Rellena
          </li>

          <li className="main__menu__item">
            <i className="icon fa-solid fa-share-nodes"></i>Comparte
          </li>
        </ul>

        <div className="farmeContainer">
        <iframe src='https://my.spline.design/superkidrobotcopy-9da3f3a9072255bc25df86cfb1f63e34/' frameborder='0' width='100%' height='100%'></iframe>
        </div>

        <Link
          className="main__button"
          to="/card"
          title="Crea tu tarjeta de visita"
        >
          Comenzar
        </Link>
      </main>
      <Footer />
    </>
  );
}
export default Landing;
