import type { Direction } from '../utils'
import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useEffect } from 'react'

export const useHandleKeys = (
  currentDirection: Direction,
  setDirection: Dispatch<SetStateAction<Direction>>,
) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          if (currentDirection !== 'DOWN') {
            setDirection('UP')
          }

          break
        case 'ArrowDown':
          if (currentDirection !== 'UP') {
            setDirection('DOWN')
          }

          break
        case 'ArrowRight':
          if (currentDirection !== 'LEFT') {
            setDirection('RIGHT')
          }
          break
        case 'ArrowLeft':
          if (currentDirection !== 'RIGHT') {
            setDirection('LEFT')
          }
          break
        default:
          break
      }
    },
    [currentDirection, setDirection],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}
