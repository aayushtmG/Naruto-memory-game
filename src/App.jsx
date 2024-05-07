import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import HintButton from "./components/HintButton"
import CardGrid from "./components/CardGrid"
function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  return (
    <>
      <NavBar score={score} bestScore={bestScore} />
      <HintButton />
      <CardGrid
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  )
}

export default App
