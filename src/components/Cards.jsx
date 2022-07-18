import "../styles/Cards.css"
import { useState } from "react";
import data from "../data"
import { Link } from 'react-router-dom'



export default function Cards(props){
        const [play, setPlay] = useState(false);


        const hoverPlay = () => {
                setPlay(!play);
                
            }




        const fondo = document.querySelector('.home-container');
        const front = document.querySelector('.main-container--grid_item');
        const button = document.querySelector('.inactive');

        
        
        const aver = ()=>{
                fondo.classList.toggle('back');
                
        }
        const verplay = ()=>{
                button.classList.toggle('inactive');
        }


        return(
            <div
            
            onMouseEnter={(event)=> {hoverPlay(event), aver(event)} }
                onMouseLeave={(event)=> {hoverPlay(event), aver(event)}} 
                
            className='main-container--grid_item' >
                <img  src={props.image} ></img>
                <Link to={`/${props.link}`} >
                {play && <span  class="material-symbols-outlined">
                        play_circle
                </span>}
                </Link>
                <div className="text-container">
                        <p className="artista">{props.artist}</p>
                        <p className="cancion">{props.song}</p>
                </div>
                

                    
            </div>
        
        
    )
}
