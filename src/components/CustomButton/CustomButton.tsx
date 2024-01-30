import styles from './CustomButton.module.scss'

type TCustomButton = {
  title: string
  backgroundColor?: string
  borderRadius?: string
  padding?: string
  fontWeight?: string
  border?: string
  fontSize?: string
  minWidth?: string
  lineHeight?: string
  cursor?: string
  isAdded?: string
  height?: string
  disabled?: boolean
  setIsAdded?: (arg: boolean) => void
  onClick?: () => void
}
export const CustomButton = ({
  title,
  borderRadius = '20px',
  padding = '6px 20px',
  fontWeight = '500',
  border = 'none',
  fontSize = '16px',
  minWidth = '64px',
  lineHeight = '28px',
  cursor = 'pointer',
  height = 'fit-content',
  disabled = false,
  onClick,
}: TCustomButton) => (
  <button
    type='button'
    className={styles['custom-button']}
    style={{
      borderRadius,
      padding,
      fontWeight,
      border,
      fontSize,
      minWidth,
      lineHeight,
      cursor,
      height,
    }}
    disabled={disabled}
    onClick={onClick}
  >
    {title}
  </button>
)
