import { useRef } from 'react'
import { useGameEngine } from './hooks'
import { BOARD_SIZE } from './const'

export const Board = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useGameEngine(canvasRef)

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
