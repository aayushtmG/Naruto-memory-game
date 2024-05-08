import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import HintButton from "./components/HintButton"
import CardGrid from "./components/CardGrid"
function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [reset, setReset] = useState(true)

  const endRound = () => {
    if (score > bestScore) {
      setBestScore(score)
    }
    setReset(true)
    setScore(0)
    alert("You lose!")
  }

  const incrementScore = () => {
    setScore(() => score + 1)
    setReset(false)
  }
  return (
    <>
      <NavBar score={score} bestScore={bestScore} />
      <HintButton />
      <CardGrid
        incrementScore={incrementScore}
        endRound={endRound}
        reset={reset}
      />
    </>
  )
}

export default App
