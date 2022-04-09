import { FC } from 'react'
import classes from './main.module.css'

export const MainLayout: FC = ({ children }) => (
  <main>
    <div className={classes.container}>{children}</div>
  </main>
)
