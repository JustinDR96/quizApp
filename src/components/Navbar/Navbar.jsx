import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import styles from './Navbar.module.scss';
import { House, MagnifyingGlass, User, Bookmark } from '@phosphor-icons/react';

const navItems = [
  { label: 'Home', path: ROUTES.home, icon: <House size={25} weight="fill" /> },
  {
    label: 'Browse',
    path: ROUTES.browse,
    icon: <MagnifyingGlass size={25} />,
  },
  {
    label: 'My Quiz',
    path: ROUTES.myQuiz,
    icon: <Bookmark size={25} />,
  },
  {
    label: 'Profile',
    path: ROUTES.profile,
    icon: <User size={25} />,
  },
];

export default function Navbar() {
  return (
    <nav className={styles.wrapper}>
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? styles.active : styles.noActive
              }
            >
              <div className={styles.link}>
                {item.icon}
                {item.label}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
