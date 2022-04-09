import { FC } from 'react'
import { Bar } from '../../../components/bar'
import { categories } from '../../../tokens'
import classes from './header.module.css'

export const Header: FC = () => (
  <header className={classes.header}>
    <h1 className={classes.header__title}>Токены Everscale</h1>
    <Bar items={categories} />
  </header>
)
