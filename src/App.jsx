
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
      
      {/* <Prueba
      image='https://billboard.com.ar/wp-content/uploads/2022/01/maxresdefault.jpg'
      disco='https://images.sk-static.com/images/media/profile_images/artists/5318433/huge_avatar'
      /> */}
    
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

      
      {/* <TemplatePlay
      back-image='https://billboard.com.ar/wp-content/uploads/2022/01/maxresdefault.jpg'
      disc-image='https://espanol.news24viral.com/wp-content/uploads/2020/07/intro-1595267435.jpg'
      /> */}

    </div>
  )
}
export default App


