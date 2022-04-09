import { FC } from 'react'
import { icons } from '../../../menu'
import classes from './logo.module.css'

interface Props {
  className?: string
}

export const Logo: FC<Props> = ({ className }) => (
  <div className={`${classes.logo} ${className}`}>{icons.logo}</div>
)
