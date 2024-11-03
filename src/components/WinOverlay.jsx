
const WinOverlay = ({restartGame})=>{

return <div className="w-full h-full flex justify-center  ">
        <div className="h-screen w-full bg-black  opacity-80 fixed z-3 max-md:top-0" onClick={restartGame}></div>
        <div className="p-10 max-md:py-20 2xl:p-32 absolute mt-20  bg-white text-center z-10 rounded-lg space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold"> 🎉 🎉 You win!!! 🎉 🎉</h1>
            <button className="bg-[#31363F] text-white py-2 px-10 rounded-lg text-2xl font-semibold" onClick={restartGame}>Play again</button>
        </div>
        </div>
}

export default WinOverlay
