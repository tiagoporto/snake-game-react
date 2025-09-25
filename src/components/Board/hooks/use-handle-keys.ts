import type { Direction } from '../utils'
import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useEffect } from 'react'

export const useHandleKeys = (
  setDirection: Dispatch<SetStateAction<Direction>>,
) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          setDirection('UP')

          break
        case 'ArrowDown':
          setDirection('DOWN')

          break
        case 'ArrowRight':
          setDirection('RIGHT')
          break
        case 'ArrowLeft':
          setDirection('LEFT')
          break
        default:
          break
      }
    },
    [setDirection],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}
