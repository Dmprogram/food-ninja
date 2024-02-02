import { useEffect, useState } from 'react'

export const useSystemThemeDetector = () => {
  const getCurrentSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isSystemDarkTheme, setIsSystemDarkTheme] = useState(getCurrentSystemTheme())

  const mqListener = (e: MediaQueryListEvent) => {
    setIsSystemDarkTheme(e.matches)
  }

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    darkThemeMq.addEventListener('change', mqListener)
    return () => darkThemeMq.removeEventListener('change', mqListener)
  }, [isSystemDarkTheme])

  return isSystemDarkTheme
}
