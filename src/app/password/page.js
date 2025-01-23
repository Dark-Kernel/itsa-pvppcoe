"use client"

import React, { useEffect, useState } from "react"

export default function RandomInvertedNumbers() {
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
    generateRandomInvertedNumbers()
  }, [])

  function generateRandomInvertedNumbers() {
    const originalNumber = "1950"
    const digits = originalNumber.split("")

    // Invert the digits randomly (shuffle them)
    const invertedDigits = []
    while (digits.length > 0) {
      const randomIndex = Math.floor(Math.random() * digits.length)
      invertedDigits.push(digits[randomIndex])
      digits.splice(randomIndex, 1)
    }

    // Create an array of random digits excluding those in "1950"
    const allDigits = "0123456789".split("")
    const remainingDigits = allDigits.filter((digit) => !invertedDigits.includes(digit))

    // Add remaining random digits to the final array to fill up 200 total numbers
    let allNumbers = [...invertedDigits]
    while (allNumbers.length < 200) {
      const randomNum = remainingDigits[Math.floor(Math.random() * remainingDigits.length)]
      allNumbers.push(randomNum)
    }

    // Shuffle the numbers array to randomly place inverted digits
    allNumbers = allNumbers.sort(() => Math.random() - 0.5)

    setNumbers(allNumbers)
  }

  return (
    <div className="bg-gray-100 p-5">
        <h1 className="flex justify-center font-bold text-3xl pb-4">🔐 Find the Password to Unlock PC 🔐</h1>
      <div className="pl-10 grid grid-cols-10 gap-5">
        {numbers.map((num, index) => (
          <div
            key={index}
            className={`flex justify-center items-center w-16 h-16 bg-blue-200 rounded-lg text-xl ${invertedDigits.includes(num) ? "font-bold" : ""}`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  )
}

const invertedDigits = "1950".split("")