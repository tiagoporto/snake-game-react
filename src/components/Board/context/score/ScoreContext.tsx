import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

interface ScoreContext {
  score: number
  setScore: Dispatch<SetStateAction<number>>
}

export const ScoreContext = createContext<ScoreContext>({
  score: 0,
  setScore: () => {},
})
