import { TaskType, useTasks } from '../context/TasksContext'
import { Task } from './Task'

export const Tasks = () => {
  const { tasks } = useTasks()

  if (!tasks || tasks.length == 0)
    return (
      <p className="mt-24 text-2xl text-gray-400 dark:text-gray-400">
        Looks like you're on track! 😃
      </p>
    )

  return (
    <div className="mt-16 text-xl w-[400px] flex flex-col items-start">
      {tasks.map((task: TaskType) => (
        <Task {...task} key={task.id} />
      ))}
    </div>
  )
}
