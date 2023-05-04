import React, { useEffect, useState } from 'react'

import ScoreCalcPrompt from '../ScoreCalcPrompt'
import { ALL_SCORES } from './constants'

const isCommonHand = (hand: HandScore) => !hand.fu || hand.fu <= 50

const getRandomHand = (options: { common?: boolean } = {}) => {
  const pool = options.common
    ? ALL_SCORES.filter((hand) => isCommonHand(hand))
    : ALL_SCORES

  const idx = Math.floor(pool.length * Math.random())
  return pool[idx]
}

const ScoreCalcTrainer: React.FC = () => {
  const [hand, setHand] = useState<HandScore>(getRandomHand())
  const [guess, setGuess] = useState<string>('')
  const [commonOnly, setCommonOnly] = useState<boolean>(true)

  useEffect(() => {
    if (commonOnly && !isCommonHand(hand)) {
      setHand(getRandomHand({ common: true }))
    }
  }, [commonOnly, hand])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return
    }

    if (guess === hand?.score) {
      setHand(getRandomHand({ common: commonOnly }))
      setGuess('')
    } else {
      console.log('Wrong. Answer:', hand?.score)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <ScoreCalcPrompt hand={hand} />
      <label className="mt-4">
        <input
          className="mr-2"
          type="checkbox"
          checked={commonOnly}
          onChange={(event) => setCommonOnly(event.target.checked)}
        />
        50 fu or less only
      </label>
      <input
        className="mt-4 w-56 rounded border border-gray-400 px-1 text-center"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default ScoreCalcTrainer
