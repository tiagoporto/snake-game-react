import { use } from 'react'
import { ScoreContext } from '../Board/context/score'

export const Score = () => {
  const { score } = use(ScoreContext)

  return (
    <div>
      <h2>Score: {score}</h2>
    </div>
  )
}
