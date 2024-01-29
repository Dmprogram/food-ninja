import { NavLink } from 'react-router-dom'

import styles from './MenuNavBar.module.scss'

export const MenuNavBar = () => (
  <nav className={styles['menu-nav']}>
    <NavLink
      to='/'
      className={({ isActive }) => (isActive ? styles['menu-nav__link_active'] : styles['menu-nav__link_unactive'])}
    >
      <span>Меню</span>
    </NavLink>
    <NavLink
      to='/reviews'
      className={({ isActive }) => (isActive ? styles['menu-nav__link_active'] : styles['menu-nav__link_unactive'])}
    >
      <span>Отзывы</span>
    </NavLink>
    <NavLink
      to='/shares'
      className={({ isActive }) => (isActive ? styles['menu-nav__link_active'] : styles['menu-nav__link_unactive'])}
    >
      <span>Акции</span>
    </NavLink>
    <NavLink
      to='/contacts'
      className={({ isActive }) => (isActive ? styles['menu-nav__link_active'] : styles['menu-nav__link_unactive'])}
    >
      <span>Контакты</span>
    </NavLink>
  </nav>
)
