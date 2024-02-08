import { useEffect, useState } from 'react'
import './App.css'
import { TasksContextProvider, TaskType } from './context/TasksContext'
import { TodoList } from './pages/TodoList'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('dark')
  const [tasks, setTasks] = useState<TaskType[]>([])

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
    <div className="App h-screen w-screen flex justify-center dark:bg-[#313131]">
      <ThemeContextProvider value={{ theme, lightMode, darkMode }}>
        <TasksContextProvider value={{ tasks, setTasks }}>
          <TodoList />
        </TasksContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
