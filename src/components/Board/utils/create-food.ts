import type { ELEMENTS_ARRAY } from '../const'
import { BOARD_SIZE, CELL_SIZE } from '../const'

export const createFood = (snakePosition: ELEMENTS_ARRAY) => {
  const generateFoodPosition = () => ({
    x: Math.floor((Math.random() * BOARD_SIZE) / CELL_SIZE) * CELL_SIZE,
    y: Math.floor(
      Math.floor((Math.random() * BOARD_SIZE) / CELL_SIZE) * CELL_SIZE,
    ),
  })

  let foodPosition = generateFoodPosition()

  while (
    snakePosition.some(
      (segment) => segment.x === foodPosition.x && segment.y === foodPosition.y,
    )
  ) {
    foodPosition = generateFoodPosition()
  }

  return foodPosition
}
