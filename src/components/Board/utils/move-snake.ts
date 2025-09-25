import type { ELEMENTS_ARRAY } from '../const'
import { BOARD_SIZE, CELL_SIZE } from '../const'

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

export interface MoveSnakeParams {
  direction: Direction
  currentPosition: ELEMENTS_ARRAY
  shouldGrowth: boolean
}

export const moveSnake = ({
  direction,
  currentPosition,
  shouldGrowth,
}: MoveSnakeParams) => {
  let newPosition = shouldGrowth
    ? currentPosition
    : currentPosition.filter((_, i) => i !== currentPosition.length - 1)

  switch (direction) {
    case 'UP':
      if (currentPosition[0].y === -CELL_SIZE) {
        return
      }

      newPosition = [
        { x: newPosition[0].x, y: newPosition[0].y - CELL_SIZE },
        ...newPosition,
      ]

      break
    case 'DOWN':
      if (currentPosition[0].y === BOARD_SIZE) {
        return
      }

      newPosition = [
        { x: newPosition[0].x, y: newPosition[0].y + CELL_SIZE },
        ...newPosition,
      ]

      break
    case 'LEFT':
      if (currentPosition[0].x === -CELL_SIZE) {
        return
      }

      newPosition = [
        { ...newPosition[0], x: newPosition[0].x - CELL_SIZE },
        ...newPosition,
      ]

      break
    case 'RIGHT':
      if (currentPosition[0].x === BOARD_SIZE) {
        return
      }

      newPosition = [
        { ...newPosition[0], x: newPosition[0].x + CELL_SIZE },
        ...newPosition,
      ]

      break
  }

  return newPosition
}
