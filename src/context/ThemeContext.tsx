import { createContext, useContext } from 'react'

type ThemeContextType = {
  theme: string
  darkMode: () => void
  lightMode: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)
export const ThemeContextProvider = ThemeContext.Provider

export const useTheme = () => {
  const context = useContext(ThemeContext)
  return context
}
