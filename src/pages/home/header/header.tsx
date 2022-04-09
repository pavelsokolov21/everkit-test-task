import { FC } from 'react'
import classes from './header.module.css'

export const Header: FC = () => (
  <header className={classes.header}>
    <h1 className={classes.header__title}>Токены Everscale</h1>
    <div>Sorting</div>
  </header>
)
