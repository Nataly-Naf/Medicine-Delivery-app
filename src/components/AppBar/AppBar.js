import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <nav>
        <NavLink className={css.link} to="/">
          Shops
        </NavLink>
        <NavLink className={css.link} to="/cart">
          Shopping Cart
        </NavLink>
      </nav>
    </header>
  );
};
