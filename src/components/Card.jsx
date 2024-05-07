import React, { useState } from "react"
function Card({ name, onClick, resetGame }) {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = (e) => {
    if (isClicked) {
      resetGame()
    } else {
      onClick()
    }
    setIsClicked(!isClicked)
  }
  return (
    <div
      className="flex flex-col items-center w-[200px] h-[250px]  hover:shadow-2xl hover:shadow-[#31363F]  bg-cardColor p-2 rounded-lg cursor-pointer 2xl:w-[260px] 2xl:h-[350px]"
      onClick={handleClick}
    >
      <img
        src={`/src/assets/images/${name}.jpg`}
        alt={`${name} image`}
        className="h-full object-cover rounded-md  max-h-[200px] 2xl:max-h-[300px] w-full  object-top  "
      />
      <p className="uppercase text-primary font-semibold tracking-wide text-xl mt-2">
        {name}
      </p>
    </div>
  )
}

export default Card
