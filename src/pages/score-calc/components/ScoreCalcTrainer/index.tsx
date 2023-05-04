import React, { useEffect, useState } from 'react'

import ScoreCalcPrompt from '../ScoreCalcPrompt'
import { ALL_SCORES } from './constants'

const isCommonHand = (hand: HandScore) => !hand.fu || hand.fu <= 50
const isLowHanHand = (hand: HandScore) => hand.han <= 4

const getRandomHand = (
  options: { common?: boolean; lowHan?: boolean } = {}
) => {
  let pool = ALL_SCORES

  if (options.common) {
    pool = pool.filter(isCommonHand)
  }

  if (options.lowHan) {
    pool = pool.filter(isLowHanHand)
  }

  const idx = Math.floor(pool.length * Math.random())
  return pool[idx]
}

const ScoreCalcTrainer: React.FC = () => {
  const [hand, setHand] = useState<HandScore>(getRandomHand())
  const [guess, setGuess] = useState<string>('')
  const [commonOnly, setCommonOnly] = useState<boolean>(true)
  const [lowHanOnly, setLowHanOnly] = useState<boolean>(true)

  useEffect(() => {
    if (
      (commonOnly && !isCommonHand(hand)) ||
      (lowHanOnly && !isLowHanHand(hand))
    ) {
      setHand(getRandomHand({ common: commonOnly, lowHan: lowHanOnly }))
    }
  }, [commonOnly, lowHanOnly, hand])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return
    }

    // Allows space, comma, forward slash and pipe as separators
    const sanitizedScoreString = guess
      .split(/[ ,/|]/)
      .filter((x) => !!x)
      .join('/')

    if (sanitizedScoreString === hand?.score) {
      setHand(getRandomHand({ common: commonOnly }))
      setGuess('')
    } else {
      console.log('Wrong. Answer:', hand?.score)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <ScoreCalcPrompt hand={hand} />
      <div className="mt-4 flex items-center gap-x-4">
        <label>
          <input
            className="mr-2"
            type="checkbox"
            checked={commonOnly}
            onChange={(event) => setCommonOnly(event.target.checked)}
          />
          50 fu or less only
        </label>
        <label>
          <input
            className="mr-2"
            type="checkbox"
            checked={lowHanOnly}
            onChange={(event) => setLowHanOnly(event.target.checked)}
          />
          4 han or less only
        </label>
      </div>
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
