export interface Game {
    BigBlind?: number
    Players?: Player[]
    Playing?: boolean
    Pot?: number
    SmallBlind?: number
    Turn?: number
    Winner?: number
    id?: number
  }
  
export interface Player {
    Bet?: number
    Cards?: number
    Money?: number
    Name?: string
  }
