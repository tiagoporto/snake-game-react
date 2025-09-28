import { expect, describe, it } from 'vitest'
import { moveSnake } from './move-snake'

describe('moveSnake', () => {
  describe('move the snake', () => {
    it('up', () => {
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

    it('down', () => {
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

    it('right', () => {
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

    it('left', () => {
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

  describe('does not move when the snake collides', () => {
    it('with top', () => {
      expect.hasAssertions()

      const newPosition = moveSnake({
        direction: 'UP',
        currentPosition: [
          { x: 20, y: -20 },
          { x: 20, y: 20 },
          { x: 20, y: 20 },
        ],
        shouldGrowth: false,
      })

      expect(newPosition).toBeUndefined()
    })

    it('with the bottom', () => {
      expect.hasAssertions()

      const newPosition = moveSnake({
        direction: 'DOWN',
        currentPosition: [
          { x: 20, y: 400 },
          { x: 20, y: 20 },
          { x: 20, y: 20 },
        ],
        shouldGrowth: false,
      })

      expect(newPosition).toBeUndefined()
    })

    it('on the right', () => {
      expect.hasAssertions()

      const newPosition = moveSnake({
        direction: 'RIGHT',
        currentPosition: [
          { x: 400, y: 20 },
          { x: 20, y: 20 },
          { x: 20, y: 20 },
        ],
        shouldGrowth: true,
      })

      expect(newPosition).toBeUndefined()
    })

    it('on the left', () => {
      expect.hasAssertions()

      const newPosition = moveSnake({
        direction: 'LEFT',
        currentPosition: [
          { x: -20, y: 20 },
          { x: 20, y: 20 },
          { x: 20, y: 20 },
        ],
        shouldGrowth: true,
      })

      expect(newPosition).toBeUndefined()
    })
  })

  describe('growth', () => {
    it('move the snake up and growth', () => {
      expect.hasAssertions()

      const newPosition = moveSnake({
        direction: 'UP',
        currentPosition: [
          { x: 20, y: 20 },
          { x: 20, y: 20 },
          { x: 20, y: 20 },
        ],
        shouldGrowth: true,
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
        {
          x: 20,
          y: 20,
        },
      ])
    })

    it('move the snake down and growth', () => {
      expect.hasAssertions()

      const newPosition = moveSnake({
        direction: 'DOWN',
        currentPosition: [
          { x: 20, y: 20 },
          { x: 20, y: 20 },
          { x: 20, y: 20 },
        ],
        shouldGrowth: true,
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
        {
          x: 20,
          y: 20,
        },
      ])
    })

    it('move the snake right and growth', () => {
      expect.hasAssertions()

      const newPosition = moveSnake({
        direction: 'RIGHT',
        currentPosition: [
          { x: 20, y: 20 },
          { x: 20, y: 20 },
          { x: 20, y: 20 },
        ],
        shouldGrowth: true,
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
        {
          x: 20,
          y: 20,
        },
      ])
    })

    it('move the snake left and growth', () => {
      expect.hasAssertions()

      const newPosition = moveSnake({
        direction: 'LEFT',
        currentPosition: [
          { x: 20, y: 20 },
          { x: 20, y: 20 },
          { x: 20, y: 20 },
        ],
        shouldGrowth: true,
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
        {
          x: 20,
          y: 20,
        },
      ])
    })
  })
})
