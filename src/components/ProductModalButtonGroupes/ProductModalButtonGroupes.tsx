import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import * as React from 'react'

type TProductModalButtonGroup = {
  slug: string
  value: string
  setValue: (value: string) => void
}
export const ProductModalButtonGroupes = ({ slug, value, setValue }: TProductModalButtonGroup) => {
  const handleChange = (_: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue === null) {
      return
    }
    setValue(newValue)
  }
  return (
    <div style={{ padding: '3px', backgroundColor: '#DEE2E6', borderRadius: '20px' }}>
      <ToggleButtonGroup value={value} exclusive onChange={handleChange} aria-label='Platform' sx={{ width: '100%' }}>
        <ToggleButton
          sx={{
            '&.MuiToggleButtonGroup-grouped': {
              width: '50%',
              padding: '2px',
              border: 'none',

              fontSize: '14px',
              textTransform: 'lowercase',
              fontWeight: '600',
            },
            '&.Mui-selected': {
              borderRadius: '20px',
              backgroundColor: 'white',
            },
            '&.Mui-selected:hover': {
              backgroundColor: 'white',
            },
            ':hover': {
              backgroundColor: 'inherit',
            },
          }}
          value='first'
        >
          <span>{(slug === 'pizza' && '25 см') || (slug === 'drinks' && '0.5 литра')}</span>
        </ToggleButton>
        <ToggleButton
          sx={{
            '&.MuiToggleButtonGroup-grouped': {
              border: 'none',
              padding: '2px',
              fontSize: '14px',
              textTransform: 'lowercase',
              fontWeight: '600',

              width: '50%',
            },
            '&.Mui-selected': {
              borderRadius: '20px',
              backgroundColor: 'white',
            },
            '&.Mui-selected:hover': {
              backgroundColor: 'white',
            },
            ':hover': {
              backgroundColor: 'inherit',
            },
          }}
          value='second'
        >
          <span>{(slug === 'pizza' && '30 см') || (slug === 'drinks' && '1 литр')}</span>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
