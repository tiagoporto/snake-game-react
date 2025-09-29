import type { PropsWithChildren } from 'react'
import { use, useEffect } from 'react'
import { render, screen } from '@testing-library/react'
import { expect, describe, it } from 'vitest'
import { ScoreContext, ScoreProvider } from '../Board/context/score'
import { Score } from './'

const TestProvider = ({ children }: PropsWithChildren<object>) => {
  const { setScore } = use(ScoreContext)

  useEffect(() => {
    setScore(42)
  }, [setScore])

  return <div>{children}</div>
}

describe('Score', () => {
  it('renders the Score component', () => {
    render(
      <ScoreProvider>
        <Score />
      </ScoreProvider>,
    )

    expect(screen.getByTestId('score')).toHaveTextContent('Score: 0')
  })

  it('renders the Score component with the updated score', () => {
    render(
      <ScoreProvider>
        <TestProvider>
          <Score />
        </TestProvider>
      </ScoreProvider>,
    )

    expect(screen.getByTestId('score')).toHaveTextContent('Score: 42')
  })
})
