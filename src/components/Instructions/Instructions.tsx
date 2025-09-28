import { MAX_SCORE } from '../Board/const'

export const Instructions = () => {
  return (
    <>
      <p data-testid="instructions">
        Use the arrow keys to move the snake. Eat the food to grow!
      </p>

      <p className="mb-5" data-testid="max-score">
        Maximun score: {MAX_SCORE}
      </p>
    </>
  )
}
