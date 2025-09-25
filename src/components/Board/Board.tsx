import { use, useEffect, useRef } from 'react'
import { useHandleKeys } from './hooks/handleKeys'
import { ScoreContext } from '../Score/context/score'
import { BOARD_SIZE } from './const'

export const Board = () => {
  const { setScore } = use(ScoreContext)
  useHandleKeys()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current === null) {
      throw new Error('no canvas in screen')
    }
    canvasRef.current.width = BOARD_SIZE
    canvasRef.current.height = BOARD_SIZE

    const context = canvasRef.current.getContext('2d')
    // for testing only
    if (context) {
      context.fillStyle = 'red'
      context?.fillRect(0, 0, 20, 20)
    }

    setScore(3)
  }, [setScore])

  return (
    <>
      <canvas className="border border-black" ref={canvasRef}></canvas>
    </>
  )
}
