import { TaskType, useTasks } from '../context/TasksContext'
import { Task } from './Task'

export const Tasks = () => {
  const { tasks } = useTasks()

  if (tasks.length == 0)
    return <p className="mt-24 text-2xl text-gray-400">Looks like you're on track! 😃</p>

  return (
    <ul className="mt-16 text-2xl">
      {tasks.map((task: TaskType) => (
        <Task {...task} key={task.id} />
      ))}
    </ul>
  )
}
