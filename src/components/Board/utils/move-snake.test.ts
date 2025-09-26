import { expect, describe, it } from 'vitest'
import { moveSnake } from './move-snake'

describe('moveSnake', () => {
  it('only move the snake up', () => {
    expect.hasAssertions()

    const newPosition = moveSnake({
      direction: 'UP',
      currentPosition: [
        { x: 20, y: 20 },
        { x: 20, y: 20 },
        { x: 20, y: 20 },
      ],
      shouldGrowth: false,
    })

    expect(newPosition).toStrictEqual([
      {
        x: 20,
        y: 0,
      },
      {
        x: 20,
        y: 20,
      },
      {
        x: 20,
        y: 20,
      },
    ])
  })

  it('only move the snake down', () => {
    expect.hasAssertions()

    const newPosition = moveSnake({
      direction: 'DOWN',
      currentPosition: [
        { x: 20, y: 20 },
        { x: 20, y: 20 },
        { x: 20, y: 20 },
      ],
      shouldGrowth: false,
    })

    expect(newPosition).toStrictEqual([
      {
        x: 20,
        y: 40,
      },
      {
        x: 20,
        y: 20,
      },
      {
        x: 20,
        y: 20,
      },
    ])
  })

  it('only move the snake right', () => {
    expect.hasAssertions()

    const newPosition = moveSnake({
      direction: 'RIGHT',
      currentPosition: [
        { x: 20, y: 20 },
        { x: 20, y: 20 },
        { x: 20, y: 20 },
      ],
      shouldGrowth: false,
    })

    expect(newPosition).toStrictEqual([
      {
        x: 40,
        y: 20,
      },
      {
        x: 20,
        y: 20,
      },
      {
        x: 20,
        y: 20,
      },
    ])
  })

  it('only move the snake left', () => {
    expect.hasAssertions()

    const newPosition = moveSnake({
      direction: 'LEFT',
      currentPosition: [
        { x: 20, y: 20 },
        { x: 20, y: 20 },
        { x: 20, y: 20 },
      ],
      shouldGrowth: false,
    })

    expect(newPosition).toStrictEqual([
      {
        x: 0,
        y: 20,
      },
      {
        x: 20,
        y: 20,
      },
      {
        x: 20,
        y: 20,
      },
    ])
  })
})
