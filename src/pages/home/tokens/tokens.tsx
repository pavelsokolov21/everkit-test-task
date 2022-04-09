import { FC } from 'react'
import { tokens } from '../../../tokens'
import { Token } from './token'
import classes from './tokens.module.css'

export const Tokens: FC = () => (
  <ul className={classes.tokens}>
    {tokens.map((token) => (
      <Token
        key={token.id}
        id={token.id}
        name={token.name}
        logoURI={token.logoURI}
        symbol={token.symbol}
        price={token.price}
        priceChange={token.priceChange}
        volume={token.volume}
        volumeChangePercentage={token.volumeChangePercentage}
        tvl={token.tvlChangePercentage}
        tvlChangePercentage={token.tvlChangePercentage}
        users={token.users}
        description={token.description}
      />
    ))}
  </ul>
)
