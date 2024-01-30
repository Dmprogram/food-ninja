import { createContext, useCallback, useMemo, useState } from 'react'

import { TThemeContext, TThemeProvider } from '@/contexts/ThemeContext/types'

export const ThemeContext = createContext<TThemeContext>({
  darkTheme: true,
  toggleTheme: () => undefined,
})

export const ThemeProvider = ({ children }: TThemeProvider) => {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = useCallback(() => {
    setDarkTheme((theme) => !theme)
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
