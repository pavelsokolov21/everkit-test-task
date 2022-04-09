import { createContext, FC, useContext, useState } from 'react'

interface ProviderInterface {
  initialValue: string
}

interface Value {
  query: string
  setQuery: (value: string) => void
}

const Context = createContext<Value>({
  query: '',
  setQuery: () => {},
})

export const BarProvider: FC<ProviderInterface> = ({ children, initialValue }) => {
  const [query, setQuery] = useState(initialValue)

  const value: Value = {
    query,
    setQuery: (value: string) => setQuery(value),
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useBar = () => useContext(Context)
