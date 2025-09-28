import type { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { expect, describe, it, vi } from 'vitest'
import { App } from './App'

describe('<App/>', () => {
  it('renders the App component', () => {
    vi.mock('./components/Board', () => ({
      Board: () => <div data-testid="board">Board Mock</div>,
    }))

    vi.mock('./components/Instructions', () => ({
      Instructions: () => (
        <div data-testid="instructions">Instructions Mock</div>
      ),
    }))

    vi.mock('./components/Score', () => ({
      Score: () => <div data-testid="score">Score Mock</div>,
    }))
    vi.mock('./components/Board/context/score', () => ({
      ScoreProvider: ({ children }: { children: ReactNode }) => (
        <div data-testid="score-provider">{children}</div>
      ),
    }))

    render(<App />)

    const board = screen.getByTestId('board')
    const instructions = screen.getByTestId('instructions')
    const score = screen.getByTestId('score')
    const scoreProvider = screen.getByTestId('score-provider')

    expect(scoreProvider).toContainElement(board)
    expect(scoreProvider).toContainElement(instructions)
    expect(scoreProvider).toContainElement(score)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Classic Snake Game',
    )
    expect(board).toBeInTheDocument()
    expect(instructions).toBeInTheDocument()
    expect(score).toBeInTheDocument()
  })
})
