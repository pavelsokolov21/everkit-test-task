import { FC } from 'react'
import classes from './bar.module.css'
import { useBar } from './provider'

interface QueryItem {
  title: string
  id: string
}

interface Props {
  items: QueryItem[]
}

export const Bar: FC<Props> = ({ items }) => {
  const { query, setQuery } = useBar()

  return (
    <ul className={classes.bar}>
      {items.map(({ title, id }) => (
        <li>
          <button
            className={`${classes.bar__button} ${
              query === id ? classes.bar__button_active : ''
            }`}
            onClick={() => setQuery(id)}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  )
}
