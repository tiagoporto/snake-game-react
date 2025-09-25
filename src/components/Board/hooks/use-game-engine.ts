import type { RefObject } from 'react'
import { useEffect, useState } from 'react'
import {
  BOARD_SIZE,
  CELL_SIZE,
  SNAKE_INITIAL_POSITION,
  SNAKE_COLOR,
  FOOD_COLOR,
} from '../const'

const foodInitialPosition = {
  x: Math.floor((Math.random() * BOARD_SIZE) / CELL_SIZE) * CELL_SIZE,
  y: Math.floor(
    Math.floor((Math.random() * BOARD_SIZE) / CELL_SIZE) * CELL_SIZE,
  ),
}

export const useGameEngine = (
  canvasRef: RefObject<HTMLCanvasElement | null>,
) => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    if (canvasRef.current === null) {
      throw new Error('no canvas in screen')
    }
    setContext(canvasRef.current.getContext('2d'))

    if (context) {
      // Render initial snake position
      SNAKE_INITIAL_POSITION.forEach((position) => {
        context.fillStyle = SNAKE_COLOR
        context?.fillRect(position.x, position.y, CELL_SIZE, CELL_SIZE)
      })

      // Render food
      context.fillStyle = FOOD_COLOR
      context?.fillRect(
        foodInitialPosition.x,
        foodInitialPosition.y,
        CELL_SIZE,
        CELL_SIZE,
      )
    }
  }, [canvasRef, context])

  return {}
}
