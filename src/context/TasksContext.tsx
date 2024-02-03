import { ReactNode, createContext, useState } from 'react'

export type TaskType = {
  id: string
  task: string
  completed: boolean
}

export interface TasksContextType {
  tasks: TaskType[]
  setTasks: (newTasks: TaskType[]) => void
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  setTasks: (newTasks: TaskType[]) => {},
})

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
