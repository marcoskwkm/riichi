import { useMemo, useState } from 'react'

import Selector from './Selector'

const FU_LIST = [
  { label: '20', value: 20 },
  { label: '25', value: 25 },
  { label: '30', value: 30 },
  { label: '40', value: 40 },
  { label: '50', value: 50 },
  { label: '60', value: 60 },
  { label: '70', value: 70 },
  { label: '80', value: 80 },
  { label: '90', value: 90 },
  { label: '100', value: 100 },
  { label: '110', value: 110 },
]

const HAN_LIST = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6-7', value: 6 },
  { label: '8-10', value: 8 },
  { label: '11+', value: 11 },
  { label: 'Yakuman', value: 13 },
]

const getPlayerPoints = (base: number, mult: number) =>
  (100 * Math.floor((base * mult + 99) / 100)).toFixed(0)

const ScoreTable: React.FC = () => {
  const [fu, setFu] = useState<number>(20)
  const [han, setHan] = useState<number>(1)

  const basePoints = useMemo(() => {
    switch (true) {
      case han >= 13:
        return 8000
      case han >= 11:
        return 6000
      case han >= 8:
        return 4000
      case han >= 6:
        return 3000
      case han >= 5:
        return 2000
      default:
        const points = Math.min(2000, Math.pow(2, han + 2) * fu)
        return points >= 1920 ? 2000 : points
    }
  }, [han, fu])

  return (
    <div className="flex w-full flex-col items-center">
      <div className="text-md self-start sm:text-base">Han:</div>
      <Selector
        value={han}
        options={HAN_LIST}
        onOptionChange={(option) => setHan(option.value)}
      />
      <div className="text-md mt-4 self-start sm:text-base">Fu:</div>
      <Selector
        value={fu}
        options={FU_LIST}
        onOptionChange={(option) => setFu(option.value)}
      />
      <div className="mt-8 flex w-full max-w-sm items-center justify-between">
        <div>
          <div className="font-bold">Oya:</div>
          <div>Tsumo: {getPlayerPoints(basePoints, 2)}</div>
          <div>Ron: {getPlayerPoints(basePoints, 6)}</div>
        </div>
        <div>
          <div className="font-bold">Ko:</div>
          <div>
            Tsumo: {getPlayerPoints(basePoints, 1)} /{' '}
            {getPlayerPoints(basePoints, 2)}
          </div>
          <div>Ron: {getPlayerPoints(basePoints, 4)}</div>
        </div>
      </div>
    </div>
  )
}

export default ScoreTable
