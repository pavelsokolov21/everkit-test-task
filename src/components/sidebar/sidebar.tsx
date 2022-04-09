import { FC } from 'react'
import { Logo } from './logo'
import { Menu } from './menu'
import { menu } from '../../menu'
import classes from './sidebar.module.css'

export const Sidebar: FC = () => (
  <aside className={classes.sidebar}>
    <Logo />
    <Menu menu={menu} />
  </aside>
)
