import { AddTask } from '../components/AddTask'
import { Tasks } from '../components/Tasks'
import { ThemeBtn } from '../components/ThemeBtn'

export const TodoList = () => {
  return (
    <div className='h-100 w-100 mt-10 flex flex-col'>
      <div className=' mb-24 text-center font-bold flex gap-28 text-7xl'>
        <p className='dark:text-white'>To-Do List</p>
        <ThemeBtn />
      </div>
      <div className='flex justify-center items-center flex-col font-semibold'>
        <AddTask />
        <Tasks />
      </div>
    </div>
  )
}
