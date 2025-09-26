import { expect, describe, it } from 'vitest'
import { createFood } from './create-food'

const snakePosition = [
  {
    x: 0,
    y: 20,
  },
  {
    x: 20,
    y: 20,
  },
  {
    x: 40,
    y: 20,
  },
  {
    x: 60,
    y: 20,
  },
]

describe('createFood', () => {
  it('generage a random position not in the snake position', () => {
    expect.hasAssertions()

    const foodPosition = createFood(snakePosition)

    const isSamePosition = snakePosition.some(
      (segment) => segment.x === foodPosition.x && segment.y === foodPosition.y,
    )

    expect(isSamePosition).toBeFalsy()
  })
})
