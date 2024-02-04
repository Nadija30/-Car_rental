import { NavLink } from 'react-router-dom';
import pagesCss from '../../pages/Pages.module.css';
import headerCss from './Header.module.css';
import Logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <section className={pagesCss.section}>
      <div className={pagesCss.container} style={{ '--bottom': '0px' }}>
        <header className={headerCss.header}>
          <div className={headerCss.logoWrapper}>
            <img src={Logo} alt="Logo" />
            <h1 className={headerCss.titleLogo}>Car rental</h1>
          </div>
          <nav className={headerCss.headerNav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </nav>
        </header>
      </div>
    </section>
  );
};
