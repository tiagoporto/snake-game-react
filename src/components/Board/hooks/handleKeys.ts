import { useCallback, useEffect } from 'react'

export const useHandleKeys = () => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up')
        break
      case 'ArrowDown':
        console.log('down')
        break
      case 'ArrowRight':
        console.log('right')
        break
      case 'ArrowLeft':
        console.log('left')
        break
      default:
        break
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}
