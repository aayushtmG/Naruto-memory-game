import React, { useState } from "react"

function HintButton() {
  return (
    <div className="flex items-center  md:gap-4 ">
      <img
        src="/assets/hint.svg"
        alt="hint icon"
        className=" w-10  animate-pulse cursor-pointer p-2 text-cardColor hover:scale-105 transition-transform ease-in-out duration-200 2xl:w-12"
        id="how-to-play"
      />
      <span className="opacity-0 text-sm text-cardColor p-2  transition-opacity ease-out duration-300">
        Get points by clicking the image, Try not to repeat the same image
      </span>
    </div>
  )
}

export default HintButton
