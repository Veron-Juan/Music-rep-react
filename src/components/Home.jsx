import "../styles/Home.css"
import { Link } from 'react-router-dom'
import Cards from "./Cards"
import { useState } from "react"


export default function Home(){


    return(
        <div className="home-container back">
        
            <div 
            
             className="main-container--grid">
                <Link to='/player-template'>
                <Cards
                    image='https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/6/b/a/4/1047251616149217.jpg'/>
                </Link>

                <Link to='/player-template'>
                <Cards
                    image='https://cdns-images.dzcdn.net/images/cover/64ec37a4cf512c7810c40ba0d318ff1e/264x264.jpg'/>
                </Link>

                <Link to='/player-template-theweeknd'>
                <Cards
                    image='https://www.theweeknd.com/sites/g/files/aaj14676/f/styles/suzuki_breakpoints_image_tablet_sq/public/release/201911/2ac634c217fba52b18e776e98f1d2c82889c59ed.jpg?itok=wqd78_mO'/>
                </Link>

                <Link to='/player-template'>
                <Cards
                    image='https://images.genius.com/8468771360e61224a58e79d25a35c966.1000x1000x1.png'/>
                </Link>

                <Link to='/player-template'>
                <Cards
                    image='https://plazamusica.com.ar/wp-content/uploads/2021/03/61f51drplnL._SL1200_.jpg'/>
                </Link>

                <Link to='/player-template-stay'>
                <Cards
                    image='https://www.lahiguera.net/musicalia/artistas/the_kid_laroi/disco/11404/the_kid_laroi_fuck_love-portada.jpg'/>
                </Link>

                <Link to='/player-template'>
                <Cards
                    image='https://lastfm.freetls.fastly.net/i/u/500x500/8d6acedbe66b4e69ced210643799dc4c.jpg'/>
                </Link>

                <Link to='/player-template'>
                <Cards
                    image='https://pbs.twimg.com/media/FTcHW-YWUAApkUZ.png'/>
                </Link>
                
                
                
                
        </div>
        
        
        {/* <Link to='/player-template'>
        <img src="https://discoslongplay.com/wp-content/uploads/2021/04/81MP3AopvxL._SL1400_-1.jpg"/>
        </Link> */}
        
    </div>)
}
    

    
    