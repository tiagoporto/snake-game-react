import { Score, ScoreProvider } from './components/Score'
import { Board } from './components/Board'

export const App = () => {
  return (
    <ScoreProvider>
      <main className="flex flex-col items-center">
        <h1 className="text-3xl my-5 font-bold">Classic Snake Game</h1>
        <Board />
        <Score />
      </main>
    </ScoreProvider>
  )
}
