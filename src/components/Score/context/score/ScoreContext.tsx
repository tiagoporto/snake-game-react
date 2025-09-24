import { createContext } from 'react'

interface ScoreContextState {
  score: number
  setScore: (score: number) => void
}

export const ScoreContext = createContext<ScoreContextState>({
  score: 0,
  setScore: () => {},
})
