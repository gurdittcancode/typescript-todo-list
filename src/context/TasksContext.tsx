import React, { createContext, useContext } from 'react'

export type TaskType = {
  id: string
  task: string
  completed: boolean
}

export type TasksContextType = {
  tasks: TaskType[]
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  setTasks: (newTasks: TaskType[]) => {}
})

export const TasksContextProvider = TasksContext.Provider

export const useTasks = () => {
  const context = useContext(TasksContext)
  if (!context) throw new Error('Context can only be used within a provider!')

  return context
}
