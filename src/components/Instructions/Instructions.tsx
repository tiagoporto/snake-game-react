import { MAX_SCORE } from '../Board/const'

export const Instructions = () => {
  return (
    <>
      <p>Use the arrow keys to move the snake. Eat the food to grow!</p>

      <p className="mb-5">Maximun score: {MAX_SCORE}</p>
    </>
  )
}
