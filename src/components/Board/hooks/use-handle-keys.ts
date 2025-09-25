import { moveSnake } from '../utils'
import { useCallback, useEffect } from 'react'

export const useHandleKeys = (
  callback: typeof moveSnake,
  currentPosition: Parameters<typeof moveSnake>[1],
  setSnakePosition: Parameters<typeof moveSnake>[2],
  setDirection: Parameters<typeof moveSnake>[3],
) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          callback('UP', currentPosition, setSnakePosition, setDirection)
          break
        case 'ArrowDown':
          callback('DOWN', currentPosition, setSnakePosition, setDirection)

          break
        case 'ArrowRight':
          callback('RIGHT', currentPosition, setSnakePosition, setDirection)
          break
        case 'ArrowLeft':
          callback('LEFT', currentPosition, setSnakePosition, setDirection)
          break
        default:
          break
      }
    },
    [currentPosition, setSnakePosition, setDirection, callback],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}
