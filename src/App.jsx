import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import HintButton from "./components/HintButton"
import CardGrid from "./components/CardGrid"
import WinOverlay from './components/WinOverlay'
function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [reset, setReset] = useState(true)
    const [win, setWin] = useState(false);

  const endRound = () => {
    if (score > bestScore) {
      setBestScore(score)
    }
    setReset(true)
    setScore(0)
    alert("You lose!")
  }
    const restartGame = ()=>{
if (score > bestScore) {
      setBestScore(score)
    }
    setReset(true)
    setScore(0)
    setWin(false)
    }

  const incrementScore = () => {
    setScore(() => score + 1)
    setReset(false)
  }
    useEffect(()=>{
    if(score == 12){
            setWin(true);
    }
    },[score])
  return (
    <>
      <NavBar score={score} bestScore={bestScore} />
      <HintButton />
        { win && <WinOverlay restartGame={restartGame}/>}
      <CardGrid
        incrementScore={incrementScore}
        endRound={endRound}
        reset={reset}
      />
    </>
  )
}

export default App
