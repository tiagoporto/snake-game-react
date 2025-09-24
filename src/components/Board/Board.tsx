import { use, useEffect } from 'react'
import { ScoreContext } from '../Score/context/score'

export const Board = () => {
  const { setScore } = use(ScoreContext)

  useEffect(() => {
    setScore(3)
  }, [setScore])

  return (
    <>
      <canvas className="border border-black"></canvas>
    </>
  )
}
