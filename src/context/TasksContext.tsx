import React, { ReactNode, createContext, useContext, useState } from 'react'

export type TaskType = {
  id: string
  task: string
  completed: boolean
}

export interface TasksContextType {
  tasks: TaskType[]
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export const TasksContext = createContext<TasksContextType | null>(null)

type TasksProviderProps = {
  children: ReactNode
}

export default function TasksContextProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TaskType[]>([])
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TasksContext)
  if (!context) throw new Error('Context can only be used within a provider!')

  return context
}
