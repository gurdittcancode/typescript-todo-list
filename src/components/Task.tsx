import { TaskType, useTasks } from '../context/TasksContext'
import { useTheme } from '../context/ThemeContext'
import './Task.css'
import { Trash2 } from 'lucide-react'

export const Task = ({ id, task, completed }: TaskType) => {
  const { tasks, setTasks } = useTasks()
  const { theme } = useTheme()

  function handleClick() {
    const index = tasks.findIndex((task) => task.id === id)
    const temp = [...tasks]
    temp[index].completed = !temp[index].completed
    setTasks(temp)
  }

  function handleDelete() {
    const index = tasks.findIndex((task) => task.id === id)
    const temp = tasks.filter((_, idx) => idx != index)
    setTasks(temp)
  }

  return (
    <div className="flex mb-2 text-2xl items-center gap-5">
      <div className="flex ">
        <input
          type="checkbox"
          onChange={handleClick}
          checked={completed}
          className="w-5 mr-5 translate-y-0.5 hover:cursor-pointer"
        />
        <p
          style={{ textDecoration: completed ? 'line-through' : '' }}
          className={`${
            completed ? 'text-gray-400 dark:text-gray-400' : 'dark:text-white '
          }`}>
          {task}
        </p>
      </div>
      <Trash2
        onClick={handleDelete}
        color={theme === 'dark' ? '#fff' : '#000'}
        className="hover:cursor-pointer"
      />
    </div>
  )
}
