import { expect, describe, it, vi } from 'vitest'
import { clearBoard } from './clear-board'

const clearRectMock = vi.fn()

const contextMock = {
  clearRect: clearRectMock,
} as unknown as CanvasRenderingContext2D

describe('clearBoard', () => {
  it('clear the board', () => {
    expect.hasAssertions()

    clearBoard(contextMock)

    expect(clearRectMock.mock.calls[0]).toEqual([0, 0, 400, 400])
  })
})
