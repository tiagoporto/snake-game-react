import { BOARD_SIZE, CELL_SIZE, SNAKE_INITIAL_POSITION } from '../const'

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
export const moveSnake = (
  direction: Direction,
  currentPosition: typeof SNAKE_INITIAL_POSITION,
  setPosition: (position: typeof SNAKE_INITIAL_POSITION) => void,
  setDirection: (direction: Direction) => void,
) => {
  let newPosition = currentPosition.filter(
    (_, i) => i !== currentPosition.length - 1,
  )

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

  setPosition(newPosition)
  setDirection(direction)
}
