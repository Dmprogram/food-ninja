import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import Switch from '@mui/material/Switch'

import styles from './SwitchTheme.module.scss'

type TSwitchTheme = {
  darkTheme: boolean
  toggleTheme: () => void
}
export const SwitchTheme = ({ darkTheme, toggleTheme }: TSwitchTheme) => (
  <div className={styles['switch-theme']}>
    {!darkTheme && <LightModeIcon color='primary' />}
    <Switch checked={darkTheme} onChange={toggleTheme} className={styles['switch-theme__switcher']} size='medium' />
    {darkTheme ? (
      <DarkModeOutlinedIcon />
    ) : (
      <span className={styles['switch-theme__black_hidden']}>
        <DarkModeOutlinedIcon />
      </span>
    )}
  </div>
)
