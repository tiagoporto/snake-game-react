import { expect, describe, it, vi } from 'vitest'
import { renderElements } from './render-elements'

const fillRectMock = vi.fn()

const contextMock = {
  fillStyle: null,
  fillRect: fillRectMock,
} as unknown as CanvasRenderingContext2D

const elementsMock = [
  {
    x: 0,
    y: 5,
  },
  {
    x: 5,
    y: 5,
  },
  {
    x: 10,
    y: 5,
  },
  {
    x: 15,
    y: 5,
  },
]

describe('renderElements', () => {
  it('render element', () => {
    expect.hasAssertions()

    renderElements(contextMock, elementsMock, 'red')

    expect(contextMock.fillStyle).toEqual('red')
    expect(fillRectMock.mock.calls[0]).toStrictEqual([0, 5, 20, 20])
    expect(fillRectMock.mock.calls[1]).toStrictEqual([5, 5, 20, 20])
    expect(fillRectMock.mock.calls[2]).toStrictEqual([10, 5, 20, 20])
    expect(fillRectMock.mock.calls[3]).toStrictEqual([15, 5, 20, 20])
  })
})
