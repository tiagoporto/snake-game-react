import { expect, describe, it, vi } from 'vitest'
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

  it('regenerage position until not in the snake position', () => {
    expect.hasAssertions()

    const Mock = vi
      .fn()
      .mockImplementationOnce(() => 0.5)
      .mockImplementationOnce(() => 0.5)
      .mockImplementation(Math.random)

    vi.stubGlobal('Math', { floor: Math.floor, random: Mock })

    const foodPosition = createFood([
      {
        x: 200,
        y: 200,
      },
    ])

    const isSamePosition = snakePosition.some(
      (segment) => segment.x === foodPosition.x && segment.y === foodPosition.y,
    )

    expect(isSamePosition).toBeFalsy()
  })
})
