import { useRef } from 'react'
import { useHandleKeys, useGameEngine } from './hooks'
import { BOARD_SIZE } from './const'
// import { ScoreContext } from '../Score/context/score'

export const Board = () => {
  // const { setScore } = use(ScoreContext)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useGameEngine(canvasRef)
  useHandleKeys()

  return (
    <>
      <canvas
        className="border border-black"
        ref={canvasRef}
        width={BOARD_SIZE}
        height={BOARD_SIZE}
      ></canvas>
    </>
  )
}
