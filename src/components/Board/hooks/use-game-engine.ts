import type { RefObject } from 'react'
import { use, useCallback, useEffect, useState } from 'react'
import {
  BOARD_SIZE,
  SNAKE_INITIAL_POSITION,
  SNAKE_COLOR,
  FOOD_COLOR,
  MAX_SCORE,
  FRAMES_TO_RERENDER,
  POINTS_PER_FOOD,
} from '../const'
import type { Direction } from '../utils'
import { clearBoard, moveSnake, createFood, renderElements } from '../utils'
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

  const resetGame = useCallback(() => {
    setScore(0)
    setSnakePosition(SNAKE_INITIAL_POSITION)
    setDirection('RIGHT')
    alert('Game Over')
  }, [setScore, setSnakePosition, setDirection])

  // handle game over
  useEffect(() => {
    if (
      score >= MAX_SCORE ||
      snakePosition[0].x < 0 ||
      snakePosition[0].x >= BOARD_SIZE ||
      snakePosition[0].y < 0 ||
      snakePosition[0].y >= BOARD_SIZE
    ) {
      resetGame()
    }
  }, [score, snakePosition, resetGame])

  // Handle food
  useEffect(() => {
    if (JSON.stringify(snakePosition[0]) === JSON.stringify(foodPosition)) {
      setFoodPosition(() => createFood())
      setScore((prevState: number) => prevState + POINTS_PER_FOOD)
    }
  }, [snakePosition, foodPosition, setScore])

  // Render process
  useEffect(() => {
    if (canvasRef.current === null) {
      throw new Error('no canvas in screen')
    }
    setContext(canvasRef.current.getContext('2d'))
    let animationFrameId: number

    if (context) {
      clearBoard(context)
      renderElements(context, snakePosition, SNAKE_COLOR)
      renderElements(context, [foodPosition], FOOD_COLOR)
    }

    const render = () => {
      if (context && animationFrameId % FRAMES_TO_RERENDER === 0) {
        moveSnake(direction, snakePosition, setSnakePosition, setDirection)
      }
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [canvasRef, context, snakePosition, direction, setDirection, foodPosition])
}
