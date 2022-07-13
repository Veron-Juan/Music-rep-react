import '../styles/Header.css'
import { useState } from 'react'



export default function Header(){
    const [toggle, setToggle] = useState(false);

    const handleTogle = () => {
        setToggle(!toggle);
        
    }
    
    return(
        <header className='header'>
        <h3>logo</h3>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <span onClick={handleTogle} class="material-symbols-outlined">
menu
</span>
        {toggle && <nav className='menu-mobile'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>}
        
        
      </header>
    )
}