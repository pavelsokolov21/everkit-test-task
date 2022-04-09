import { FC } from 'react'
import classes from './main.module.css'

export const MainLayout: FC = ({ children }) => (
  <main className={classes.main}>
    <div className={classes.container}>{children}</div>
  </main>
)
