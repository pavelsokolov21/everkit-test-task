import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Sidebar } from './components/sidebar'
import './App.css'
import { Search } from './pages/search'
import { Paths } from './enums/paths.enum'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path={Paths.HOME} element={<Home />} />
        <Route path={Paths.SEARCH} element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
