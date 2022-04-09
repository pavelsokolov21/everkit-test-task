import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Paths } from '../../../enums/paths.enum'
import { MenuItem as MenuItemInterface } from '../../../interfaces/menu-item'
import { MenuItem } from './menu-item'
import classes from './menu.module.css'

interface Props {
  menu: MenuItemInterface[]
}

export const Menu: FC<Props> = ({ menu }) => {
  const { pathname } = useLocation()

  return (
    <ul className={classes.menu}>
      {menu.map((item) => (
        <Link to={item.id === 'tokens' ? Paths.HOME : Paths.SEARCH}>
          <MenuItem
            key={item.id}
            className={classes.menuItem}
            icon={item.icon}
            isActive={
              `/${item.id}` === pathname ||
              (item.id === 'tokens' && pathname === Paths.HOME)
            }
          >
            {item.title}
          </MenuItem>
        </Link>
      ))}
    </ul>
  )
}
