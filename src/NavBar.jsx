import React, { useEffect, useState } from "react"

export default function NavBar({ score, bestScore }) {
  return (
    <div className="bg-[#31363F]  ">
      <div className="flex  text-lg text-white container mx-auto  justify-between py-4">
        <h1 className="">
          The Odin Project Memory Game{" "}
          <span className="text-cardColor">(Naruto Theme)</span>
        </h1>
        <div className="flex gap-8 items-center">
          <h3 className="flex items-center gap-2">
            Score:
            <span className="text-[#76ABAE] font-bold text-2xl">{score}</span>
          </h3>
          <h3 className="flex items-center gap-2">
            Best Score:{" "}
            <span className="text-[#76ABAE] font-bold text-2xl">
              {bestScore}
            </span>
          </h3>
        </div>
      </div>
    </div>
  )
}
