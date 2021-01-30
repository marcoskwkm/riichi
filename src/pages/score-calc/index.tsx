import React from 'react'

import ScoreCalcTrainer from '../../components/ScoreCalcTrainer'

const ScoreCalc: React.FC = () => (
  <div className="h-full min-h-screen p-8 bg-gray-200">
    <ScoreCalcTrainer />
    <div className="mt-8">
      <p className="font-bold text-lg">How to calculate hand scores</p>
      <p className="mt-2 font-bold">Basic score calculation</p>
      <p>
        Mangan: 2000, Haneman: 3000, Baiman: 4000, Sanbaiman: 6000, Yakuman:
        8000
      </p>
      <p>Otherwise, basic points = min(Fu * 2 ^ (2 + han), 2000).</p>
      <p className="mt-2 font-bold">Paying multipliers</p>
      <p>Dealer tsumo: each player pays 2 * basic points</p>
      <p>Dealer ron: discarding player pays 6 * basic points</p>
      <p>
        Non-dealer tsumo: dealer pays 2 * basic points, other players pay 1 *
        basic points
      </p>
      <p>Non-dealer ron: discarding player pays 4 * basic points</p>
      <p>Each value to be paid should be rounded up to the nearest 100</p>
      <div className="mt-2">
        <a
          href="http://arcturus.su/wiki/Scoring_table"
          className="text-xs text-gray-400"
        >
          Source: http://arcturus.su/wiki/Scoring_table
        </a>
      </div>
    </div>
  </div>
)

export default ScoreCalc
