import { useEffect, useRef, useState } from 'react'
import { useGameEngine } from './hooks'
import { BOARD_SIZE } from './const'

export const Board = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useGameEngine(context)

  useEffect(() => {
    if (canvasRef.current === null) {
      throw new Error('no canvas in screen')
    }

    setContext(canvasRef.current.getContext('2d'))
  }, [canvasRef])

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
