interface HandScore {
  han: number
  fu: number | null
  dealer: boolean
  win: 'ron' | 'tsumo'
  score: string
}

export const ALL_SCORES: HandScore[] = [
  { han: 1, fu: 30, dealer: true, win: 'tsumo', score: '500' },
  { han: 1, fu: 30, dealer: true, win: 'ron', score: '1500' },
  { han: 1, fu: 40, dealer: true, win: 'tsumo', score: '700' },
  { han: 1, fu: 40, dealer: true, win: 'ron', score: '2000' },
  { han: 1, fu: 50, dealer: true, win: 'tsumo', score: '800' },
  { han: 1, fu: 50, dealer: true, win: 'ron', score: '2400' },
  { han: 1, fu: 60, dealer: true, win: 'tsumo', score: '1000' },
  { han: 1, fu: 60, dealer: true, win: 'ron', score: '2900' },
  { han: 1, fu: 70, dealer: true, win: 'tsumo', score: '1200' },
  { han: 1, fu: 70, dealer: true, win: 'ron', score: '3400' },
  { han: 1, fu: 80, dealer: true, win: 'tsumo', score: '1300' },
  { han: 1, fu: 80, dealer: true, win: 'ron', score: '3900' },
  { han: 1, fu: 90, dealer: true, win: 'tsumo', score: '1500' },
  { han: 1, fu: 90, dealer: true, win: 'ron', score: '4400' },
  { han: 1, fu: 100, dealer: true, win: 'tsumo', score: '1600' },
  { han: 1, fu: 100, dealer: true, win: 'ron', score: '4800' },
  { han: 1, fu: 110, dealer: true, win: 'tsumo', score: '1800' },
  { han: 1, fu: 110, dealer: true, win: 'ron', score: '5300' },
  { han: 2, fu: 20, dealer: true, win: 'tsumo', score: '700' },
  { han: 2, fu: 25, dealer: true, win: 'ron', score: '2400' },
  { han: 2, fu: 30, dealer: true, win: 'tsumo', score: '1000' },
  { han: 2, fu: 30, dealer: true, win: 'ron', score: '2900' },
  { han: 2, fu: 40, dealer: true, win: 'tsumo', score: '1300' },
  { han: 2, fu: 40, dealer: true, win: 'ron', score: '3900' },
  { han: 2, fu: 50, dealer: true, win: 'tsumo', score: '1600' },
  { han: 2, fu: 50, dealer: true, win: 'ron', score: '4800' },
  { han: 2, fu: 60, dealer: true, win: 'tsumo', score: '2000' },
  { han: 2, fu: 60, dealer: true, win: 'ron', score: '5800' },
  { han: 2, fu: 70, dealer: true, win: 'tsumo', score: '2300' },
  { han: 2, fu: 70, dealer: true, win: 'ron', score: '6800' },
  { han: 2, fu: 80, dealer: true, win: 'tsumo', score: '2600' },
  { han: 2, fu: 80, dealer: true, win: 'ron', score: '7700' },
  { han: 2, fu: 90, dealer: true, win: 'tsumo', score: '2900' },
  { han: 2, fu: 90, dealer: true, win: 'ron', score: '8700' },
  { han: 2, fu: 100, dealer: true, win: 'tsumo', score: '3200' },
  { han: 2, fu: 100, dealer: true, win: 'ron', score: '9600' },
  { han: 2, fu: 110, dealer: true, win: 'tsumo', score: '3600' },
  { han: 2, fu: 110, dealer: true, win: 'ron', score: '10600' },
  { han: 3, fu: 20, dealer: true, win: 'tsumo', score: '1300' },
  { han: 3, fu: 25, dealer: true, win: 'tsumo', score: '1600' },
  { han: 3, fu: 25, dealer: true, win: 'ron', score: '4800' },
  { han: 3, fu: 30, dealer: true, win: 'tsumo', score: '2000' },
  { han: 3, fu: 30, dealer: true, win: 'ron', score: '5800' },
  { han: 3, fu: 40, dealer: true, win: 'tsumo', score: '2600' },
  { han: 3, fu: 40, dealer: true, win: 'ron', score: '7700' },
  { han: 3, fu: 50, dealer: true, win: 'tsumo', score: '3200' },
  { han: 3, fu: 50, dealer: true, win: 'ron', score: '9600' },
  { han: 3, fu: 60, dealer: true, win: 'tsumo', score: '3900' },
  { han: 3, fu: 60, dealer: true, win: 'ron', score: '11600' },
  { han: 3, fu: 70, dealer: true, win: 'tsumo', score: '4000' },
  { han: 3, fu: 70, dealer: true, win: 'ron', score: '12000' },
  { han: 4, fu: 20, dealer: true, win: 'tsumo', score: '2600' },
  { han: 4, fu: 25, dealer: true, win: 'tsumo', score: '3200' },
  { han: 4, fu: 25, dealer: true, win: 'ron', score: '9600' },
  { han: 4, fu: 30, dealer: true, win: 'tsumo', score: '3900' },
  { han: 4, fu: 30, dealer: true, win: 'ron', score: '11600' },
  { han: 4, fu: 40, dealer: true, win: 'tsumo', score: '4000' },
  { han: 4, fu: 40, dealer: true, win: 'ron', score: '12000' },
  { han: 5, fu: null, dealer: true, win: 'tsumo', score: '4000' },
  { han: 5, fu: null, dealer: true, win: 'ron', score: '12000' },
  { han: 6, fu: null, dealer: true, win: 'tsumo', score: '6000' },
  { han: 6, fu: null, dealer: true, win: 'ron', score: '18000' },
  { han: 7, fu: null, dealer: true, win: 'tsumo', score: '6000' },
  { han: 7, fu: null, dealer: true, win: 'ron', score: '18000' },
  { han: 8, fu: null, dealer: true, win: 'tsumo', score: '8000' },
  { han: 8, fu: null, dealer: true, win: 'ron', score: '24000' },
  { han: 9, fu: null, dealer: true, win: 'tsumo', score: '8000' },
  { han: 9, fu: null, dealer: true, win: 'ron', score: '24000' },
  { han: 10, fu: null, dealer: true, win: 'tsumo', score: '8000' },
  { han: 10, fu: null, dealer: true, win: 'ron', score: '24000' },
  { han: 11, fu: null, dealer: true, win: 'tsumo', score: '12000' },
  { han: 11, fu: null, dealer: true, win: 'ron', score: '36000' },
  { han: 12, fu: null, dealer: true, win: 'tsumo', score: '12000' },
  { han: 12, fu: null, dealer: true, win: 'ron', score: '36000' },
  { han: 13, fu: null, dealer: true, win: 'tsumo', score: '16000' },
  { han: 13, fu: null, dealer: true, win: 'ron', score: '48000' },
  { han: 1, fu: 30, dealer: false, win: 'tsumo', score: '300/500' },
  { han: 1, fu: 30, dealer: false, win: 'ron', score: '1000' },
  { han: 1, fu: 40, dealer: false, win: 'tsumo', score: '400/700' },
  { han: 1, fu: 40, dealer: false, win: 'ron', score: '1300' },
  { han: 1, fu: 50, dealer: false, win: 'tsumo', score: '400/800' },
  { han: 1, fu: 50, dealer: false, win: 'ron', score: '1600' },
  { han: 1, fu: 60, dealer: false, win: 'tsumo', score: '500/1000' },
  { han: 1, fu: 60, dealer: false, win: 'ron', score: '2000' },
  { han: 1, fu: 70, dealer: false, win: 'tsumo', score: '600/1200' },
  { han: 1, fu: 70, dealer: false, win: 'ron', score: '2300' },
  { han: 1, fu: 80, dealer: false, win: 'tsumo', score: '700/1300' },
  { han: 1, fu: 80, dealer: false, win: 'ron', score: '2600' },
  { han: 1, fu: 90, dealer: false, win: 'tsumo', score: '800/1500' },
  { han: 1, fu: 90, dealer: false, win: 'ron', score: '2900' },
  { han: 1, fu: 100, dealer: false, win: 'tsumo', score: '800/1600' },
  { han: 1, fu: 100, dealer: false, win: 'ron', score: '3200' },
  { han: 1, fu: 110, dealer: false, win: 'tsumo', score: '900/1800' },
  { han: 1, fu: 110, dealer: false, win: 'ron', score: '3600' },
  { han: 2, fu: 20, dealer: false, win: 'tsumo', score: '400/700' },
  { han: 2, fu: 25, dealer: false, win: 'ron', score: '1600' },
  { han: 2, fu: 30, dealer: false, win: 'tsumo', score: '500/1000' },
  { han: 2, fu: 30, dealer: false, win: 'ron', score: '2000' },
  { han: 2, fu: 40, dealer: false, win: 'tsumo', score: '700/1300' },
  { han: 2, fu: 40, dealer: false, win: 'ron', score: '2600' },
  { han: 2, fu: 50, dealer: false, win: 'tsumo', score: '800/1600' },
  { han: 2, fu: 50, dealer: false, win: 'ron', score: '3200' },
  { han: 2, fu: 60, dealer: false, win: 'tsumo', score: '1000/2000' },
  { han: 2, fu: 60, dealer: false, win: 'ron', score: '3900' },
  { han: 2, fu: 70, dealer: false, win: 'tsumo', score: '1200/2300' },
  { han: 2, fu: 70, dealer: false, win: 'ron', score: '4500' },
  { han: 2, fu: 80, dealer: false, win: 'tsumo', score: '1300/2600' },
  { han: 2, fu: 80, dealer: false, win: 'ron', score: '5200' },
  { han: 2, fu: 90, dealer: false, win: 'tsumo', score: '1500/2900' },
  { han: 2, fu: 90, dealer: false, win: 'ron', score: '5800' },
  { han: 2, fu: 100, dealer: false, win: 'tsumo', score: '1600/3200' },
  { han: 2, fu: 100, dealer: false, win: 'ron', score: '6400' },
  { han: 2, fu: 110, dealer: false, win: 'tsumo', score: '1800/3600' },
  { han: 2, fu: 110, dealer: false, win: 'ron', score: '7100' },
  { han: 3, fu: 20, dealer: false, win: 'tsumo', score: '700/1300' },
  { han: 3, fu: 25, dealer: false, win: 'tsumo', score: '800/1600' },
  { han: 3, fu: 25, dealer: false, win: 'ron', score: '3200' },
  { han: 3, fu: 30, dealer: false, win: 'tsumo', score: '1000/2000' },
  { han: 3, fu: 30, dealer: false, win: 'ron', score: '3900' },
  { han: 3, fu: 40, dealer: false, win: 'tsumo', score: '1300/2600' },
  { han: 3, fu: 40, dealer: false, win: 'ron', score: '5200' },
  { han: 3, fu: 50, dealer: false, win: 'tsumo', score: '1600/3200' },
  { han: 3, fu: 50, dealer: false, win: 'ron', score: '6400' },
  { han: 3, fu: 60, dealer: false, win: 'tsumo', score: '2000/3900' },
  { han: 3, fu: 60, dealer: false, win: 'ron', score: '7700' },
  { han: 3, fu: 70, dealer: false, win: 'tsumo', score: '2000/4000' },
  { han: 3, fu: 70, dealer: false, win: 'ron', score: '8000' },
  { han: 4, fu: 20, dealer: false, win: 'tsumo', score: '1300/2600' },
  { han: 4, fu: 25, dealer: false, win: 'tsumo', score: '1600/3200' },
  { han: 4, fu: 25, dealer: false, win: 'ron', score: '6400' },
  { han: 4, fu: 30, dealer: false, win: 'tsumo', score: '2000/3900' },
  { han: 4, fu: 30, dealer: false, win: 'ron', score: '7700' },
  { han: 4, fu: 40, dealer: false, win: 'tsumo', score: '2000/4000' },
  { han: 4, fu: 40, dealer: false, win: 'ron', score: '8000' },
  { han: 5, fu: null, dealer: false, win: 'tsumo', score: '2000/4000' },
  { han: 5, fu: null, dealer: false, win: 'ron', score: '8000' },
  { han: 6, fu: null, dealer: false, win: 'tsumo', score: '3000/6000' },
  { han: 6, fu: null, dealer: false, win: 'ron', score: '12000' },
  { han: 7, fu: null, dealer: false, win: 'tsumo', score: '3000/6000' },
  { han: 7, fu: null, dealer: false, win: 'ron', score: '12000' },
  { han: 8, fu: null, dealer: false, win: 'tsumo', score: '4000/8000' },
  { han: 8, fu: null, dealer: false, win: 'ron', score: '16000' },
  { han: 9, fu: null, dealer: false, win: 'tsumo', score: '4000/8000' },
  { han: 9, fu: null, dealer: false, win: 'ron', score: '16000' },
  { han: 10, fu: null, dealer: false, win: 'tsumo', score: '4000/8000' },
  { han: 10, fu: null, dealer: false, win: 'ron', score: '16000' },
  { han: 11, fu: null, dealer: false, win: 'tsumo', score: '6000/12000' },
  { han: 11, fu: null, dealer: false, win: 'ron', score: '24000' },
  { han: 12, fu: null, dealer: false, win: 'tsumo', score: '6000/12000' },
  { han: 12, fu: null, dealer: false, win: 'ron', score: '24000' },
  { han: 13, fu: null, dealer: false, win: 'tsumo', score: '8000/16000' },
  { han: 13, fu: null, dealer: false, win: 'ron', score: '32000' },
]
