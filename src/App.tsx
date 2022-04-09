import { useState } from 'react'
import { Sidebar } from './components/sidebar'
import { tokens, categories } from './tokens'
import './App.css'

function App() {
  const [category, setCategory] = useState(categories[0])

  return (
    <div className="app">
      <Sidebar />
      <div className="tokens">
        {tokens.map((item) => (
          <div className="token">{item.name}</div>
        ))}
      </div>
    </div>
  )
}

export default App
