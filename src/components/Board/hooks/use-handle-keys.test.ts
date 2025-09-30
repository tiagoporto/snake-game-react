import { expect, describe, it, vi } from 'vitest'
import { useHandleKeys } from './'
import { renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const setDirectionMock = vi.fn()

describe('useHandleKeys', () => {
  it('do not trigger other keys than the arrow keys', async () => {
    expect.hasAssertions()

    renderHook(() => useHandleKeys('UP', setDirectionMock))
    await userEvent.keyboard('{Delete}')
    await userEvent.keyboard('{T}')
    await userEvent.keyboard('{Tab}')

    expect(setDirectionMock).not.toHaveBeenCalled()
  })

  it('set direction up', async () => {
    expect.hasAssertions()

    renderHook(() => useHandleKeys('LEFT', setDirectionMock))
    await userEvent.keyboard('{ArrowUp}')

    expect(setDirectionMock).toHaveBeenCalledWith('UP')
  })

  it('do not set direction down if current direction is up', async () => {
    expect.hasAssertions()

    renderHook(() => useHandleKeys('DOWN', setDirectionMock))
    await userEvent.keyboard('{ArrowUp}')

    expect(setDirectionMock).not.toHaveBeenCalled()
  })

  it('set direction down', async () => {
    expect.hasAssertions()

    renderHook(() => useHandleKeys('RIGHT', setDirectionMock))
    await userEvent.keyboard('{ArrowDown}')

    expect(setDirectionMock).toHaveBeenCalledWith('DOWN')
  })

  it('do not set direction up if current direction is down', async () => {
    expect.hasAssertions()

    renderHook(() => useHandleKeys('UP', setDirectionMock))
    await userEvent.keyboard('{ArrowDown}')

    expect(setDirectionMock).not.toHaveBeenCalled()
  })

  it('set direction right', async () => {
    expect.hasAssertions()

    renderHook(() => useHandleKeys('UP', setDirectionMock))
    await userEvent.keyboard('{ArrowRight}')

    expect(setDirectionMock).toHaveBeenCalledWith('RIGHT')
  })

  it('do not set direction right if current direction is left', async () => {
    expect.hasAssertions()

    renderHook(() => useHandleKeys('LEFT', setDirectionMock))
    await userEvent.keyboard('{ArrowRight}')

    expect(setDirectionMock).not.toHaveBeenCalled()
  })

  it('set direction left', async () => {
    expect.hasAssertions()

    renderHook(() => useHandleKeys('DOWN', setDirectionMock))
    await userEvent.keyboard('{ArrowLeft}')

    expect(setDirectionMock).toHaveBeenCalledWith('LEFT')
  })

  it('do not set direction left if current direction is right', async () => {
    expect.hasAssertions()

    renderHook(() => useHandleKeys('RIGHT', setDirectionMock))
    await userEvent.keyboard('{ArrowRLeft}')

    expect(setDirectionMock).not.toHaveBeenCalled()
  })
})
