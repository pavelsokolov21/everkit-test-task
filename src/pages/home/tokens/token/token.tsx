import { FC, useState } from 'react'
import { Token as TokenInterface } from '../../../../interfaces/token'
import { icons } from '../../../../menu'
import classes from './token.module.css'

type Props = Omit<TokenInterface, 'categories' | 'address'>

const getClassByPercentage = (percentage: number): string => {
  if (percentage > 0) {
    return classes.token__percentageChanges_positive
  } else if (percentage < 0) {
    return classes.token__percentageChanges_negative
  }

  return classes.token__percentageChanges_neutral
}

export const Token: FC<Props> = ({
  id,
  logoURI,
  name,
  symbol,
  price,
  priceChange,
  volume,
  volumeChangePercentage,
  tvl,
  tvlChangePercentage,
  users,
  description,
}) => {
  const [isDescriptionOpened, setIsDescriptionOpened] = useState(false)

  return (
    <li className={classes.token}>
      <div className={classes.token__infoContainer}>
        <span className={classes.token__id}>#{id}</span>
        <div className={classes.token__companyContainer}>
          <img className={classes.token__logo} src={logoURI} alt={name} />
          <div className={classes.token__companyNameContainer}>
            <p className={classes.token__name}>{name}</p>
            <p className={classes.token__symbol}>{symbol}</p>
          </div>
        </div>
        <div>
          <p className={classes.token__price}>{price} $</p>
          <div className={classes.token__percentageContainer}>
            {Object.values(priceChange).map((percentage) => (
              <span
                className={`${classes.token__percentageChanges} ${getClassByPercentage(
                  percentage,
                )}`}
              >
                {percentage}%
              </span>
            ))}
          </div>
        </div>
        <div className={classes.token__volumeContainer}>
          <p className={classes.token__volume}>{volume} $</p>
          <p className={classes.token__volumeChangePercentage}>
            {volumeChangePercentage}%
          </p>
        </div>
        <div className={classes.token__tvlContainer}>
          <p className={classes.token__tvl}>{tvl} $</p>
          <p className={classes.token__tvlChangePercentage}>{tvlChangePercentage}%</p>
        </div>
        <div className={classes.token__usersContainer}>
          <div>{icons.users}</div>
          <p className={classes.token__users}>{users}</p>
        </div>
        <button
          className={`${classes.token__openDescriptionButton} ${
            isDescriptionOpened ? classes.token__openDescriptionButton_opened : ''
          }`}
          onClick={() => setIsDescriptionOpened(!isDescriptionOpened)}
        >
          {icons.chevron}
        </button>
      </div>
      <div
        className={`${classes.token__description} ${
          isDescriptionOpened ? classes.token__description_opened : ''
        }`}
      >
        <p>{description}</p>
      </div>
    </li>
  )
}
