import React from 'react'

interface Props {
  hand: HandScore | undefined
  className?: string
}

const handToString = (hand: HandScore) => {
  const result = [
    `${hand.han} han`,
    ...(hand.fu ? [`${hand.fu} fu`] : []),
    hand.dealer ? 'dealer' : 'non-dealer',
    hand.win,
  ]

  return result.join(', ')
}

const ScoreCalcPrompt: React.FC<Props> = (props) => (
  <div className="w-full border border-black p-4 f1 text-center text-3xl">
    {props.hand && handToString(props.hand)}
  </div>
)

export default ScoreCalcPrompt
