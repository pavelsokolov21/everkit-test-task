import { FC } from 'react'
import { MenuItem as MenuItemInterface } from '../../../interfaces/menu-item'
import { MenuItem } from './menu-item'
import classes from './menu.module.css'

interface Props {
  menu: MenuItemInterface[]
}

export const Menu: FC<Props> = ({ menu }) => (
  <ul className={classes.menu}>
    {menu.map((item) => (
      <MenuItem
        key={item.id}
        className={classes.menuItem}
        icon={item.icon}
        isActive={item.id === 'tokens'}
      >
        {item.title}
      </MenuItem>
    ))}
  </ul>
)
