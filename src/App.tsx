import { Home } from './pages/home'
import { Sidebar } from './components/sidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
