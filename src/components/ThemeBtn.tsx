import { Sun } from 'lucide-react'
import { Moon } from 'lucide-react'
import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export const ThemeBtn = () => {
  const { theme, darkMode, lightMode } = useTheme()
  const currTheme = useRef(theme)

  function handleClick() {
    currTheme.current = currTheme.current === 'dark' ? 'light' : 'dark'
    if (currTheme.current === 'dark') darkMode()
    else lightMode()
  }

  return (
    <div onClick={handleClick} className='hover:cursor-pointer'>
      {currTheme.current === "dark" ? (
        <Moon color={theme === "dark" ? "#fff" : "#000"} size={40} />
      ) : (
        <Sun color={theme === "dark" ? "#fff" : "#000"} size={40} />
      )}
    </div>
  )
}
