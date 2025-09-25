import { BOARD_SIZE } from '../const'

export const clearBoard = (context: CanvasRenderingContext2D) => {
  context.clearRect(0, 0, BOARD_SIZE, BOARD_SIZE)
}
