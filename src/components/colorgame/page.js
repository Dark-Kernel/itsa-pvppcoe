'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// 1st 3 dummy last 3 real to use
const colorImages = [
  { path: '/colors/Random1.png', hex: '#FF33CC' },
  { path: '/colors/Random2.png', hex: '#009999' },
  { path: '/colors/Random3.png', hex: '#660066' },
  // { path: '/colors/Saffron.png', hex: '#FF671F' },
  // { path: '/colors/Green.png', hex: '#046A38' },
  // { path: '/colors/Blue.png', hex: '#06038D' },
]

export default function ColorGame() {
  const rounds = 3
  const chancesPerRound = 3
  const [gameStarted, setGameStarted] = useState(false)
  const [currentRound, setCurrentRound] = useState(1)
  const [currentChance, setCurrentChance] = useState(1)
  const [roundResults, setRoundResults] = useState([])
  const [currentColorImage, setCurrentColorImage] = useState(null)
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [teamName, setTeamName] = useState('')

  useEffect(() => {
    let timer
    if (gameStarted && !gameOver) {
      timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000))
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [gameStarted, gameOver, startTime])

  function getRandomColorImage() {
    return colorImages[Math.floor(Math.random() * colorImages.length)]
  }

  function initializeGame() {
    if (!teamName.trim()) {
      setError("Please enter a Team name before starting the game.")
      return
    }
    setError('')
    setGameStarted(true)
    setGameOver(false)
    setCurrentRound(1)
    setCurrentChance(1)
    setRoundResults([])
    setStartTime(Date.now())
    setElapsedTime(0)
    const newColorImage = getRandomColorImage()
    setCurrentColorImage(newColorImage)
  }

  function isValidHex(hex) {
    return /^#[0-9A-Fa-f]{6}$/.test(hex)
  }

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return { r, g, b }
  }

  function colorDistance(color1, color2) {
    const rDiff = color1.r - color2.r
    const gDiff = color1.g - color2.g
    const bDiff = color1.b - color2.b
    return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff)
  }

  function checkColor() {
    setError('')  // Clear any previous errors

    if (!userInput.startsWith('#')) {
      setError("HEX color must start with '#'")
      return
    }

    if (!isValidHex(userInput)) {
      setError("Please enter a valid HEX color code (e.g., #FF5733)")
      return
    }

    const userColorRGB = hexToRgb(userInput)
    const finalColorRGB = hexToRgb(currentColorImage.hex)
    
    const distance = colorDistance(userColorRGB, finalColorRGB)
    const similarity = Math.max(0, (1 - distance / Math.sqrt(255 * 255 * 3)) * 100)
    
    setRoundResults(prevResults => [
      ...prevResults,
      {
        round: currentRound,
        chance: currentChance,
        similarity: similarity.toFixed(2)
      }
    ])

    alert(`The color is ${similarity.toFixed(2)}% similar.`);

    if (similarity === 100) {
      moveToNextRound("Right! The color match perfectly.")
    } else {
      if (currentChance >= chancesPerRound) {
        moveToNextRound(`Moving to next round.`)
      } else {
        setCurrentChance(prevChance => prevChance + 1)
      }
    }

    // setUserInput('')
  }

  function moveToNextRound(message) {
    if (currentRound >= rounds) {
      setGameOver(true)
    } else {
      setCurrentRound(prevRound => prevRound + 1)
      setCurrentChance(1)
      const newColorImage = getRandomColorImage()
      setCurrentColorImage(newColorImage)
      alert(`${message}\n\nRound ${currentRound + 1}: Now guess the HEX code of this color!`)
    }
  }

  function handleInputChange(e) {
    const input = e.target.value
    setUserInput(input)
    
    // Real-time validation
    if (input && !input.startsWith('#')) {
      setError("Hex color must start with '#'")
    } else if (input && !/^#[0-9A-Fa-f]{0,6}$/.test(input)) {
      setError("Invalid hex color format")
    } else {
      setError('')
    }
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="font-sans flex flex-col items-center justify-center p-20 bg-gray-300 border-4 border-color0">
      {!gameStarted ? (
        <div className="font-sans flex flex-col items-center justify-center p-20 bg-gray-300 border-4 border-color0">
          <h1 className="text-4xl font-bold mb-4 text-center">Color Match Challenge</h1>
          <h2 className="text-2xl font-semibold mb-6 text-center">Test Your Color Perception</h2>
          <ul className="list-disc pl-6 mb-8 text-left">
            <li>You have 3 rounds in this game</li>
            <li>Each round gives you 3 chances to guess the color</li>
            <li>Enter the HEX code of the color you see</li>
            <li>The closer your guess, the higher your score</li>
            <li>Try to match the color perfectly!</li>
            <li>Average of all rounds and less the time spent will qualify</li>
          </ul>
          <div className="mb-4">
            <label htmlFor="team-name" className="block mb-2">Enter Your Team Name:</label>
            <input
              type="text"
              id="team-name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="p-2 text-lg w-full border border-gray-300 rounded"
              placeholder="Enter team name"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={initializeGame}
            className="p-3 text-lg bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Start Game
          </button>
        </div>
      ) : gameOver ? (
        <div className="font-sans flex flex-col items-center justify-center p-20 bg-gray-300 border-4 border-color0">
          <h2 className="text-3xl font-bold mb-6">Game Over! Here are your results:</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 mx-auto">Team Name: {teamName}</h3>
            {roundResults.map((result, index) => (
              <p key={index} className="mb-2">
                Round {result.round}, Chance {result.chance}: {result.similarity}% similarity
              </p>
            ))}
            <p className="mt-4">Total Time Spent: <span className='font-bold'>{formatTime(elapsedTime)}</span> sec.</p>
          </div>
          {/* <button onClick={initializeGame} className="mt-6 p-3 text-lg bg-green-500 text-white rounded hover:bg-green-600 transition-colors">Play Again</button> */}
        </div>
      ) : (
        <div className='font-sans flex flex-col items-center justify-center p-20 bg-gray-300 border-4 border-color0'>
          <h1 className="text-3xl font-bold mb-4">Color Match Game</h1>
          <h2 className="text-2xl font-semibold mb-4 text-center">Team Name: {teamName}</h2>
          {/* <p className="mb-6">Try to match the color displayed in the image! You have 3 rounds, with 3 chances per round.</p> */}

          <div className="mb-6">
            {/* <label htmlFor="color-input" className="block mb-2">Enter Hex Code (e.g., #FF5733): </label> */}
            <input
              type="text"
              id="color-input"
              placeholder="#FF5733"
              className="p-2 text-lg w-40 border border-gray-300 rounded mr-2"
              value={userInput}
              onChange={handleInputChange}
              maxLength={7}
            />
            <button
              onClick={checkColor}
              className="p-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              disabled={!!error}
            >
              Check Match
            </button>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {currentColorImage && (
            <div className="w-52 h-52 border-2 border-black overflow-hidden">
              <Image
                src={currentColorImage.path}
                alt="Color to match"
                width={208}
                height={208}
                className="object-fit"
              />
            </div>
          )}

          <div className="mt-4">
            <p>Current Round: {currentRound}</p>
            <p>Current Chance: {currentChance}</p>
            {/* <p className="mt-2 font-bold">Time: {formatTime(elapsedTime)}</p> */}
          </div>
        </div>
      )}
    </div>
  )
}

