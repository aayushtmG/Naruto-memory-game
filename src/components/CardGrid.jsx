import React, { useEffect, useState } from "react"
import Card from "./Card"
function CardGrid({ reset, endRound, incrementScore }) {
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
  const [arr, setArr] = useState(nameList)
  const shuffleCard = (arr) => {
    let shuffledArr = arr.slice()
    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * (arr.length - 1))
      ;[shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]
    }
    return shuffledArr
  }
  const shuffle = () => {
    setArr(shuffleCard(arr))
  }
  useEffect(() => {
    setArr(shuffleCard(arr))
  }, [])

  return (
    <div className="px-8 grid grid-cols-2 py-2 sm:grid-cols-3 lg:grid-cols-6  2xl:grid-cols-6 place-items-center gap-8">
      {arr.map((name) => (
        <Card
          name={name}
          key={name}
          incrementScore={incrementScore}
          endRound={endRound}
          reset={reset}
          shuffle={shuffle}
        />
      ))}
    </div>
  )
}

export default CardGrid
