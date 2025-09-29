import { render, screen } from '@testing-library/react'
import { expect, describe, it, vi } from 'vitest'
import { Board } from './'
import { useGameEngine } from './hooks'
import 'vitest-canvas-mock'

const mocks = vi.hoisted(() => {
  return {
    useGameEngineMock: vi.fn(),
  }
})

vi.mock('./hooks', () => ({
  useGameEngine: mocks.useGameEngineMock,
}))

describe('<Board/>', () => {
  it('renders the Board component', () => {
    expect.hasAssertions()
    render(<Board />)

    const canvas = screen.getByTestId<HTMLCanvasElement>('board')
    const ctx = canvas.getContext('2d')

    expect(canvas).toBeInTheDocument()
    expect(canvas.tagName).toBe('CANVAS')
    expect(useGameEngine).toHaveBeenNthCalledWith(2, ctx)
  })
})
