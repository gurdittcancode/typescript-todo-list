import { TaskType, useTasks } from '../context/TasksContext'
import './Task.css'

export const Task = ({ id, task, completed }: TaskType) => {
  const { tasks, setTasks } = useTasks()

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
    <li className="flex mb-2 text-3xl ">
      <input
        type="checkbox"
        onChange={handleClick}
        checked={completed}
        className="w-5 mr-5 translate-y-0.5 hover:cursor-pointer"
      />
      <p onClick={handleDelete}
      style={{textDecoration: completed ? "line-through" : ""}}>{task}</p>
    </li>
  )
}
