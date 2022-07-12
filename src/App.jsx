
import './App.css'
import { Link, Route, Routes,  } from 'react-router-dom'
import Home from './components/Home'
import PlayerTemplate from './components/PlayerTemplate'
import PlayerTemplateStay from './components/templatesPlay/PlayerTemplateStay'
import PlayerTemplateTheWeeknd from './components/templatesPlay/PlayerTemplateTheWeeknd'
import Starboy from './components/templatesPlay/Starboy'
import Drake from './components/templatesPlay/Drake'
import WhereU from './components/templatesPlay/whereU'

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

      



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/player-template' element={<PlayerTemplate />} />
        <Route path='/player-template-stay' element={<PlayerTemplateStay />} />
        <Route path='/player-template-theweeknd' element={<PlayerTemplateTheWeeknd />} />
        <Route path='/starboy' element={<Starboy />} />
        <Route path='/drake' element={<Drake />} />
        <Route path='/where-u' element={<WhereU />} />

      </Routes>

      {/* <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search-page' element={<SearchPage />} />
      </Routes> */}
    </div>
  )
}

export default App


{/* <li><Link to='/'>Home</Link></li>
            <li><Link to='/search-page'>Search</Link></li>
            
          </ul>
        </nav>
      </header>
      


      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search-page' element={<SearchPage />} />
      </Routes> */}