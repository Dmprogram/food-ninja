import { useState } from 'react'

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
  onClick: () => void
}
export const CustomButton = ({
  title,
  backgroundColor = '#ff5722',
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
}: TCustomButton) => {
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  return (
    <button
      type='button'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHover ? '#e34b1c' : backgroundColor,
        transition: 'background-color 0.2s ease-in-out',
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
}
