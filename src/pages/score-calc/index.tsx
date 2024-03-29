import ScoreCalcTrainer from './components/ScoreCalcTrainer'

const ScoreCalcPage: React.FC = () => (
  <div className="h-full min-h-screen bg-gray-200 p-8">
    <ScoreCalcTrainer />
    <div className="mt-8 max-w-xl">
      <p className="text-lg font-bold">Instructions</p>
      <p className="mt-2">
        You are given the information of a winning hand (han, fu,
        dealer/non-dealer and tsumo/ron). Type the corresponding hand score in
        the input box in the following format:
      </p>
      <p className="mt-2">
        <span className="font-bold">Ron:</span> The full hand value
      </p>
      <p>
        <span className="font-bold">Non-dealer tsumo:</span> The value for
        non-dealers, then the value for the dealer, separated by comma, forward
        slash, space, pipe symbol or any combination of these. For instance, for
        1 han 30 fu non-dealer tsumo, "300 500", "300/500" and "300, |500 " are
        all valid answers.
      </p>
      <p>
        <span className="font-bold">Dealer tsumo:</span> The value paid by every
        other player
      </p>
      <p className="mt-2">
        Please note that there is no rounding to Mangan for 3 han 60 fu and 4
        han 30 fu hands.
      </p>
    </div>
    <div className="mt-8">
      <p className="text-lg font-bold">How to calculate hand scores</p>
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

export default ScoreCalcPage
