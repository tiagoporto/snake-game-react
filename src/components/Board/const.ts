export type ELEMENTS_ARRAY = {
  x: number
  y: number
}[]

export const FRAMES_TO_RERENDER = 10

export const POINTS_PER_FOOD = 3

export const BOARD_SIZE = 400
export const CELL_SIZE = BOARD_SIZE / 20

export const MAX_SCORE = 30

export const FOOD_COLOR = 'pink'

export const SNAKE_COLOR = 'green'
export const SNAKE_INITIAL_POSITION: ELEMENTS_ARRAY = [
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
