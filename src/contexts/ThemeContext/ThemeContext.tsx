import { createContext, useCallback, useMemo, useState } from 'react'

import { TThemeContext, TThemeProvider } from '@/contexts/ThemeContext/types'
import { useSystemThemeDetector } from '@/hooks/useSystemThemeDetector'

export const ThemeContext = createContext<TThemeContext | null>(null)

export const ThemeProvider = ({ children }: TThemeProvider) => {
  const getCurrentTheme = (isSystemDarkTheme: boolean) => {
    const themeIsDarkJson = localStorage.getItem('themeIsDark')
    if (themeIsDarkJson !== null) {
      const themeIsDark: boolean = JSON.parse(themeIsDarkJson)
      return themeIsDark
    }
    return isSystemDarkTheme
  }

  const isSystemDarkTheme = useSystemThemeDetector()
  const [darkTheme, setDarkTheme] = useState(getCurrentTheme(isSystemDarkTheme))

  const toggleTheme = useCallback(() => {
    setDarkTheme((theme) => {
      localStorage.setItem('themeIsDark', JSON.stringify(!theme))
      return !theme
    })
  }, [])

  const contextValue = useMemo(
    () => ({
      darkTheme,
      toggleTheme,
    }),
    [darkTheme, toggleTheme],
  )
  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
