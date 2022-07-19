import "../styles/Home.css"
// import { Link } from 'react-router-dom'
import Cards from "./Cards"
// import { useState } from "react"
import data from "../data"



export default function Home(){

    const cards = data.map(item => {
        return (
            <Cards
            key={item.id}
            image = {item.coverImage}
            artist={item.artist}
            song={item.song}
            link={item.link}
            />
        )
    })

    return(
        <div  className="home-container back">
        
            <div  
            
             className="main-container--grid">
                {cards}
                
            </div>
            {}
         
        </div>
        )
        
}
    


        

    