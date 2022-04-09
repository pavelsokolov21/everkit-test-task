import { FC } from 'react'
import classes from './menu-item.module.css'

interface Props {
  icon: JSX.Element
  isActive: boolean
  className?: string
}

export const MenuItem: FC<Props> = ({ className, icon, isActive, children }) => (
  <li
    className={`${classes.menuItem} ${className} ${
      isActive ? classes.menuItem_active : ''
    }`}
  >
    <div className={classes.menuItem__icon}>{icon}</div>
    <p className={classes.menuItem__text}>{children}</p>
  </li>
)
