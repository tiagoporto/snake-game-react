import { render, screen } from '@testing-library/react'
import { expect, describe, it, vi } from 'vitest'

vi.mock('./App', () => ({
  App: () => <div data-testid="app">App Mock</div>,
}))

describe('main', () => {
  it('create the react app', async () => {
    const container = document.createElement('div')
    container.id = 'root'
    document.body.appendChild(container)

    await import('./main')

    render(<></>)

    expect(screen.getByTestId('app')).toBeInTheDocument()
  })
})
