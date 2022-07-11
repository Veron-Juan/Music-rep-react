
import './App.css'
import Home from './components/Home'
import PlayerTemplate from './components/PlayerTemplate'

function App() {
  
  return (
    <div className="App">
      <header className='header'>
        <h3>logo</h3>
        <nav>
          <ul>
            <li>home</li>
            <li>set</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <Home />
      <PlayerTemplate />
    </div>
  )
}

export default App
