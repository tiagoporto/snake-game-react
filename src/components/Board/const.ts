export const BOARD_SIZE = 400
export const CELL_SIZE = BOARD_SIZE / 20

export const MAX_SCORE = 30

export const FOOD_COLOR = 'pink'

export const SNAKE_COLOR = 'green'
export const SNAKE_INITIAL_POSITION = [
  {
    x: BOARD_SIZE / 2 - CELL_SIZE,
    y: BOARD_SIZE / 2,
  },
  {
    x: BOARD_SIZE / 2 - CELL_SIZE * 2,
    y: BOARD_SIZE / 2,
  },
  {
    x: BOARD_SIZE / 2 - CELL_SIZE * 3,
    y: BOARD_SIZE / 2,
  },
]
