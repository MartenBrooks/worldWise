import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from './Logo.jsx';
import { useAuth } from '../contexts/FakeAuthentication';
function PageNav() {
  const { isAuthenticated } = useAuth();
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.ul}>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={styles.ctaLink}
          >
            {isAuthenticated ? 'to app' : 'login'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
