import { AddTask } from '../components/AddTask'
import { Tasks } from '../components/Tasks'

export const TodoList = () => {
  return (
    <div className="h-100 mt-10">
      <div className="text-7xl mb-24 text-center font-bold">To-Do List</div>
      <div className="flex justify-center items-center flex-col font-semibold">
        <AddTask />
        <Tasks />
      </div>
    </div>
  )
}
