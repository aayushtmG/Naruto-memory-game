import  { useEffect, useState } from "react"
function Card({ shuffle, reset, name, endRound, incrementScore }) {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    if (isClicked) {
      endRound()
    } else {
      incrementScore()
    }
    shuffle()
    setIsClicked(!isClicked)
  }
  useEffect(() => {
    if (reset == true) {
      setIsClicked(false)
    }
  }, [reset])
  return (
    <div
      className="flex flex-col items-center w-[150px] h-[150px] md:w-[200px] md:h-[250px]  hover:shadow-2xl hover:shadow-[#31363F]  bg-cardColor  p-1 md:p-2 rounded-lg cursor-pointer 2xl:w-[260px] 2xl:h-[350px]"
      onClick={handleClick}
    >
      <img
        src={`/assets/images/${name}.jpg`}
        alt={`${name} image`}
        className=" h-full object-cover rounded-md  max-h-[200px] 2xl:max-h-[300px] w-full  object-top  "
      />
      <p className="hidden sm:block uppercase text-primary font-semibold tracking-wide text-sm md:text-xl mt-2">
        {name}
      </p>
    </div>
  )
}

export default Card
