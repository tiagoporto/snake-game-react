import { useState, useMemo } from 'react'
import { ScoreContext } from './ScoreContext'
import type { PropsWithChildren } from 'react'

export const ScoreProvider = ({ children }: PropsWithChildren<object>) => {
  const [score, setScore] = useState(0)
  const value = useMemo(() => {
    return { score, setScore }
  }, [score, setScore])

  return <ScoreContext value={value}>{children}</ScoreContext>
}
