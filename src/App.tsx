import { useState } from 'react'
import { Sidebar } from './components/sidebar'
import { categories } from './tokens'
import './App.css'
import { Home } from './pages/home'

function App() {
  const [category, setCategory] = useState(categories[0])

  return (
    <div className="app">
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
