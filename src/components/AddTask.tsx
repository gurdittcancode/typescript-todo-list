import React, { useState } from 'react'
import { useTasks } from '../context/TasksContext'
import { TaskType } from '../context/TasksContext'
import { v4 as uuid } from 'uuid'
import { ListPlus } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export const AddTask = () => {
  const [input, setInput] = useState('')
  const { tasks, setTasks } = useTasks()
  const { theme } = useTheme()

  function handleSubmit(ev: React.SyntheticEvent) {
    ev.preventDefault()
    if (input.length >= 5) {
      const newTask: TaskType = {
        id: uuid(),
        task: input,
        completed: false,
      }

      setTasks([newTask, ...tasks])
      setInput('')
    } else alert('Task length should be at least 5!')
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-10'>
      <input
        autoFocus
        type='text'
        placeholder='Enter your task'
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
        className='text-2xl py-3 px-5 rounded-xl placeholder:font-normal'
      />
      <button className=''>
        <ListPlus size={40} color={theme === 'dark' ? '#fff' : '#000'} />
      </button>
    </form>
  )
}
