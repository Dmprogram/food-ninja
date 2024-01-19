import { NavLink } from 'react-router-dom'

import styles from './NavigationBar.module.css'

export const NavigationBar = () => (
  <nav className={styles.navigationBar}>
    <NavLink
      to='/'
      className={({ isActive }) => (isActive ? styles.navigationBar_linkActive : styles.navigationBar_linkUnactive)}
    >
      <span>Меню</span>
    </NavLink>
    <NavLink
      to='/reviews'
      className={({ isActive }) => (isActive ? styles.navigationBar_linkActive : styles.navigationBar_linkUnactive)}
    >
      <span>Отзывы</span>
    </NavLink>
    <NavLink
      to='/shares'
      className={({ isActive }) => (isActive ? styles.navigationBar_linkActive : styles.navigationBar_linkUnactive)}
    >
      <span>Акции</span>
    </NavLink>
    <NavLink
      to='/contacts'
      className={({ isActive }) => (isActive ? styles.navigationBar_linkActive : styles.navigationBar_linkUnactive)}
    >
      <span>Контакты</span>
    </NavLink>
  </nav>
)
