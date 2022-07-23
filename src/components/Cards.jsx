import "../styles/Cards.css"

import { useState } from "react";
import { Link } from 'react-router-dom'



export default function Cards(props){
        const [play, setPlay] = useState(false);

        const hoverPlay = () => {
                setPlay(!play);                
        }
        const aver = ()=>{
                const fondo = document.querySelector('.home-container');
                fondo.classList.toggle('back');  
                }

        return(
            <div
        
            onMouseEnter={(event)=> {hoverPlay(event), aver(event)} }
                onMouseLeave={(event)=> {hoverPlay(event), aver(event)}} 
                
            className='main-container--grid_item' >
                <img  src={props.item.coverImage} ></img>
                <Link to={`/${props.item.link}`} >
                {play && <span  className="material-symbols-outlined">
                        play_circle
                </span>}
                </Link>
                <div className="text-container">
                        <p className="artista">{props.item.artist}</p>
                        <p className="cancion">{props.item.song}</p>
                </div>
                

                    
            </div>
        
        
    )
}
