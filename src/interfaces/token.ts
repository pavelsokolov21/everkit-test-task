export interface PriceChange {
  hours24: number
  days7: number
  days365: number
}

export interface Token {
  id: number
  name: string
  symbol: string
  address: string
  logoURI: string
  categories: string[]
  description: string
  price: number
  priceChange: PriceChange
  volume: number
  volumeChangePercentage: number
  tvl: number
  tvlChangePercentage: number
  users: number
}
