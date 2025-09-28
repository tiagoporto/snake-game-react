import { use } from 'react'
import { ScoreContext } from '../Board/context/score'

export const Score = () => {
  const { score } = use(ScoreContext)

  return (
    <p data-testid="score">
      Score: <span className="font-bold">{score}</span>
    </p>
  )
}
