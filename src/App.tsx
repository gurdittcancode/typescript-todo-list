import { useEffect, useState } from 'react'
import './App.css'
import TasksContextProvider from './context/TasksContext'
import { TodoList } from './pages/TodoList'
import {ThemeContextProvider} from './context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('light')
  function lightMode() {
    setTheme('light')
  }

  function darkMode() {
    setTheme('dark')
  }

  useEffect(() => {
    document.querySelector('html')?.classList.remove('dark', 'light')
    document.querySelector('html')?.classList.add(theme)
  }, [theme])

  return (
    <div className='h-screen w-screen flex justify-center dark:bg-gray-800'>
      <ThemeContextProvider value={{ theme, lightMode, darkMode }}>
        <TasksContextProvider>
          <TodoList />
        </TasksContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
