import type { RefObject } from 'react'
import { use, useEffect, useState } from 'react'
import {
  BOARD_SIZE,
  CELL_SIZE,
  SNAKE_INITIAL_POSITION,
  SNAKE_COLOR,
  FOOD_COLOR,
  MAX_SCORE,
} from '../const'
import type { Direction } from '../utils'
import { clearBoard, moveSnake, createFood } from '../utils'
import { useHandleKeys } from './use-handle-keys'
import { ScoreContext } from '../context/score'

export const useGameEngine = (
  canvasRef: RefObject<HTMLCanvasElement | null>,
) => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [direction, setDirection] = useState<Direction>('RIGHT')
  const [snakePosition, setSnakePosition] = useState(SNAKE_INITIAL_POSITION)
  const [foodPosition, setFoodPosition] = useState(createFood())
  const { score, setScore } = use(ScoreContext)

  useHandleKeys(moveSnake, snakePosition, setSnakePosition, setDirection)

  useEffect(() => {
    if (score >= MAX_SCORE) {
      alert('Game Over')
    }
    if (snakePosition[0].x < 0 || snakePosition[0].x >= BOARD_SIZE) {
      alert('Game Over')
    }
    if (snakePosition[0].y < 0 || snakePosition[0].y >= BOARD_SIZE) {
      alert('Game Over')
    }
  }, [score, snakePosition])

  useEffect(() => {
    if (JSON.stringify(snakePosition[0]) === JSON.stringify(foodPosition)) {
      setFoodPosition(() => createFood())
      setScore((prevState: number) => prevState + 3)
    }
  }, [snakePosition, foodPosition, setScore])

  useEffect(() => {
    if (canvasRef.current === null) {
      throw new Error('no canvas in screen')
    }
    setContext(canvasRef.current.getContext('2d'))
    let animationFrameId: number

    if (context) {
      clearBoard(context)

      // Render initial snake position
      snakePosition.forEach((position) => {
        context.fillStyle = SNAKE_COLOR
        context?.fillRect(position.x, position.y, CELL_SIZE, CELL_SIZE)
      })

      // Render food
      context.fillStyle = FOOD_COLOR
      context?.fillRect(foodPosition.x, foodPosition.y, CELL_SIZE, CELL_SIZE)
    }

    const render = () => {
      if (context && animationFrameId % 10 === 0) {
        moveSnake(direction, snakePosition, setSnakePosition, setDirection)
      }
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [canvasRef, context, snakePosition, direction, setDirection, foodPosition])

  return {}
}
