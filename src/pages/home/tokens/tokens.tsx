import { FC, useEffect, useState } from 'react'
import { useBar } from '../../../components/bar/provider'
import { tokens } from '../../../tokens'
import { Token } from './token'
import classes from './tokens.module.css'

export const Tokens: FC = () => {
  const { query } = useBar()
  const [filteredTokens, setFilteredTokens] = useState(tokens)

  useEffect(() => {
    if (query === 'all') {
      setFilteredTokens(tokens)

      return
    }

    const newTokens = tokens.filter(({ categories }) => categories.includes(query))
    setFilteredTokens(newTokens)
  }, [query])

  return (
    <ul className={classes.tokens}>
      {filteredTokens.map((token) => (
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
}
