import { use } from 'react'
import { ScoreContext } from '../Board/context/score'

export const Score = () => {
  const { score } = use(ScoreContext)

  return (
    <div>
      <h2>
        Score: <span className="font-bold">{score}</span>
      </h2>
    </div>
  )
}
