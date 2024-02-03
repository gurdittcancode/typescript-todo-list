import './App.css'
import TasksContextProvider from './context/TasksContext'
import { TodoList } from './pages/TodoList'

function App() {
  return (
    <div className="h-screen w-screen flex justify-center">
      <TasksContextProvider>
        <TodoList />
      </TasksContextProvider>
    </div>
  )
}

export default App
