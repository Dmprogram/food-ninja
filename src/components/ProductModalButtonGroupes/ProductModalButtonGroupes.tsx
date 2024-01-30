import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import * as React from 'react'

import styles from './ProductModalButtonGroupes.module.scss'

type TProductModalButtonGroup = {
  slug: string
  option: string
  setOption: (option: string) => void
}
export const ProductModalButtonGroupes = ({ slug, option, setOption }: TProductModalButtonGroup) => {
  const handleChange = (_: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue === null) {
      return
    }
    setOption(newValue)
  }
  return (
    <ToggleButtonGroup
      value={option}
      exclusive
      onChange={handleChange}
      aria-label='Platform'
      className={styles['product-modal__toggle-buttons']}
    >
      <ToggleButton className={styles['product-modal__toggle-button']} value='first' data-option={option}>
        <span>{(slug === 'pizza' && '25 см') || (slug === 'drinks' && '0.5 литра')}</span>
      </ToggleButton>
      <ToggleButton className={styles['product-modal__toggle-button']} value='second' data-option={option}>
        <span>{(slug === 'pizza' && '30 см') || (slug === 'drinks' && '1 литр')}</span>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
