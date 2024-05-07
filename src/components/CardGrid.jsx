import React, { useEffect, useState } from "react"
import Card from "./Card"

function CardGrid({ score, setScore, setBestScore, bestScore }) {
  const nameList = [
    "naruto",
    "itachi",
    "shikamaru",
    "sakura",
    "minato",
    "hinata",
    "jiraya",
    "kakashi",
    "madara",
    "rocklee",
    "orochimaru",
    "sasuke",
  ]
  const resetGame = () => {
    if (score > bestScore) {
      setBestScore(score)
    }
    setScore(0)
  }

  const handleClick = () => {
    setScore((score) => score + 1)
    setArr(shuffleCard(arr))
  }
  const list = nameList.map((name) => (
    <Card name={name} key={name} onClick={handleClick} resetGame={resetGame} />
  ))
  const [arr, setArr] = useState(list)
  const shuffleCard = (arr) => {
    let shuffledArr = arr.slice()
    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * (arr.length - 1))
      ;[shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]
    }
    return shuffledArr
  }
  useEffect(() => {
    setArr(shuffleCard(arr))
  }, [])
  useEffect(() => {
    console.log("Score affected: ", score, bestScore)
  }, [score, bestScore])
  return (
    <div className="px-8 grid grid-cols-6 2xl:grid-cols-6 place-items-center gap-8">
      {arr}
    </div>
  )
}

export default CardGrid
