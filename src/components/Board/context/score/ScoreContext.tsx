import { createContext } from 'react'

interface ScoreContext {
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
}

export const ScoreContext = createContext<ScoreContext>({
  score: 0,
  setScore: () => {},
})
