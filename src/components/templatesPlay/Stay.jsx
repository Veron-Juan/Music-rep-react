import '../templatesPlay/Stay.css'
import TemplateSongs from './TemplateSongs'



export default function Stay(){
    return(
        <TemplateSongs
        title='The kid laroi ft Justin bieber - Stay'
        image='https://i.ytimg.com/vi/Q2MEz-6oDAU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgmKQIdv8o6RSRoEOJ3yKGRjCUTg'
        disco='https://i.pinimg.com/564x/ce/0b/1e/ce0b1e0e28c811af1cb9199458b482a8.jpg'
        />
    )
}

// const playButton = ()=>{
//     const discImage = document.querySelector('.disc-stay');
//     const buttonPlay = document.querySelector('.play')
//     const buttonPause = document.querySelector('.button-pause')
//     discImage.classList.toggle('rotate');
//     buttonPause.classList.toggle('inactive');
//     buttonPlay.classList.toggle('inactive')
    
//   }

// const pauseButton = ()=>{
    
//     const discImage = document.querySelector('.disc-stay');
//     const buttonPlay = document.querySelector('.play')
//     const buttonPause = document.querySelector('.button-pause');
//     discImage.classList.toggle('pause-animation');
//     buttonPlay.classList.toggle('inactive');
//     buttonPause.classList.toggle('inactive');
//     discImage.classList.toggle('play-animation');

// }





// export default function PlayerTemplateStay(){
//     return(
//         <div className='player-container-template'>
//             <img src='https://i.ytimg.com/vi/Q2MEz-6oDAU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgmKQIdv8o6RSRoEOJ3yKGRjCUTg'/>
//             <div className="player-container">
//             <div className="disc-container">
//                 <div className="disc-stay">
//                     <figure className="disc-stay-figure">
//                     <figure className="disc-stay-figure--int" />
//                     </figure>
//                 </div>
//             </div>

//             {/* Player */}
//             <div className="container-reproductor">
             
//             <span  class="material-symbols-outlined ">
// volume_up
// </span>
//             <span class="material-symbols-outlined">
// skip_previous 
// </span>

//     <div className="box-play-pause">

// <span onClick={playButton} class="material-symbols-outlined btt play">
// play_circle
// </span>
// <span onClick={pauseButton} class="material-symbols-outlined btt button-pause inactive">
// pause
// </span>

//     </div>

//             <span class="material-symbols-outlined ">
// skip_next
// </span>
            
// <span class="material-symbols-outlined">
// repeat
// </span>
         
//         </div>

//         <div className="container-input--range">
//             <input type="range"></input>
//         </div>




//         </div>
//         </div>
        

//     )
// }