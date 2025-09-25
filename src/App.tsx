import { Score } from './components/Score'
import { ScoreProvider } from './components/Board/context/score'
import { Board } from './components/Board'
import { Instructions } from './components/Instructions'

export const App = () => {
  return (
    <ScoreProvider>
      <main className="flex flex-col items-center">
        <h1 className="text-3xl my-5 font-bold">Classic Snake Game</h1>

        <Board />
        <Instructions />
        <Score />
      </main>
    </ScoreProvider>
  )
}
