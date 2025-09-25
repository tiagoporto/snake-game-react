import { BOARD_SIZE, CELL_SIZE } from '../const'

export const createFood = () => ({
  x: Math.floor((Math.random() * BOARD_SIZE) / CELL_SIZE) * CELL_SIZE,
  y: Math.floor(
    Math.floor((Math.random() * BOARD_SIZE) / CELL_SIZE) * CELL_SIZE,
  ),
})
