import { use, useEffect } from 'react'
import { useHandleKeys } from './hooks/handleKeys'
import { ScoreContext } from '../Score/context/score'

export const Board = () => {
  const { setScore } = use(ScoreContext)
  useHandleKeys()

  useEffect(() => {
    setScore(3)
  }, [setScore])

  return (
    <>
      <canvas className="border border-black"></canvas>
    </>
  )
}
