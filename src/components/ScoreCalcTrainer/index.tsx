import React, { useState } from 'react'

import ScoreCalcPrompt from '../ScoreCalcPrompt'
import { ALL_SCORES } from './constants'

const getRandomHand = () => {
  const idx = Math.floor(ALL_SCORES.length * Math.random())
  return ALL_SCORES[idx]
}

const ScoreCalcTrainer: React.FC = () => {
  const [hand, setHand] = useState<HandScore>(getRandomHand())
  const [guess, setGuess] = useState<string>('')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return
    }

    if (guess === hand?.score) {
      setHand(getRandomHand())
      setGuess('')
    } else {
      console.log('Wrong. Answer:', hand?.score)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <ScoreCalcPrompt hand={hand} />
      <input
        className="mt-8 w-56 px-1 border border-gray-400 rounded text-center"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default ScoreCalcTrainer
