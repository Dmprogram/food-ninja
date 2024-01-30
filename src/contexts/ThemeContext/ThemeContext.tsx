import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

import { TThemeContext, TThemeProvider } from '@/contexts/ThemeContext/types'
import { useThemeDetector } from '@/hooks/useThemeDetector'

export const ThemeContext = createContext<TThemeContext>({
  darkTheme: true,
  toggleTheme: () => undefined,
})

export const ThemeProvider = ({ children }: TThemeProvider) => {
  const isSystemDarkTheme = useThemeDetector()
  const [darkTheme, setDarkTheme] = useState(isSystemDarkTheme)

  const toggleTheme = useCallback(() => {
    setDarkTheme((theme) => !theme)
  }, [])
  useEffect(() => {
    setDarkTheme(isSystemDarkTheme)
  }, [isSystemDarkTheme])

  const contextValue = useMemo(
    () => ({
      darkTheme,
      toggleTheme,
    }),
    [darkTheme, toggleTheme],
  )
  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
