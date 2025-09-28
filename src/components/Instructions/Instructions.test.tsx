import { render, screen } from '@testing-library/react'
import { expect, describe, it } from 'vitest'
import { Instructions } from './Instructions'

describe('<Instructions/>', () => {
  it('renders the Instructions component', () => {
    render(<Instructions />)

    expect(screen.getByTestId('instructions')).toBeInTheDocument()
    expect(screen.getByTestId('max-score')).toHaveTextContent(
      'Maximun score: 30',
    )
  })
})
