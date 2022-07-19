
import './App.css'
import { Link, Route, Routes,  } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Stay from './components/templatesPlay/Stay'
import BlindingLights from './components/templatesPlay/BlindingLights'
import Starboy from './components/templatesPlay/Starboy'
import Drake from './components/templatesPlay/Drake'
import WhereU from './components/templatesPlay/whereU'
import TemplateSongs from './components/templatesPlay/TemplateSongs'
import Oasis from './components/templatesPlay/Oasis'
import CharliePuth from './components/templatesPlay/CharliePuth'
import Changues from './components/templatesPlay/Changues'

function App() {
  
  return (
    <div className="App">
      <Header />
       
      
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/player-template' element={<Changues />} />
        <Route path='/player-template-stay' element={<Stay />} />
        <Route path='/player-template-theweeknd' element={<BlindingLights />} />
        <Route path='/starboy' element={<Starboy />} />
        <Route path='/drake' element={<Drake />} />
        <Route path='/where-u' element={<WhereU />} />
        <Route path='/oasis' element={<Oasis />} />
        <Route path='/charlie-puth' element={<CharliePuth />} />

        
      </Routes>

      

    </div>
  )
}
export default App


