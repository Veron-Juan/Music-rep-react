import '../templatesPlay/Drake.css'
import TemplateSongs from './TemplateSongs'






export default function Drake(){
    return(
        <TemplateSongs
        title='Drake - Hold on going home'
        image='https://mixlr-assets.s3.amazonaws.com/artwork/27d9349fb49ac9aa976b83d3b3ccffa3/base@2x.jpeg'
        disco='https://i.discogs.com/RRSdWSxJJMXCS-w6S5Ym-U9UgLZQNyZmjrFsTdhAH6w/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1Nzcz/MzktMTU2MjUyMzAx/MC03NzkyLmpwZWc.jpeg'
        />
    )
}

// const playButton = ()=>{
//     const discImage = document.querySelector('.disc-drake');
//     const buttonPlay = document.querySelector('.play')
//     const buttonPause = document.querySelector('.button-pause')
//     discImage.classList.toggle('rotate');
//     buttonPause.classList.toggle('inactive');
//     buttonPlay.classList.toggle('inactive')
    
//   }

// const pauseButton = ()=>{
    
//     const discImage = document.querySelector('.disc-drake');
//     const buttonPlay = document.querySelector('.play')
//     const buttonPause = document.querySelector('.button-pause');
//     discImage.classList.toggle('pause-animation');
//     buttonPlay.classList.toggle('inactive');
//     buttonPause.classList.toggle('inactive');
//     discImage.classList.toggle('play-animation');

// }





// export default function Drake(){
//     return(
//         <div className='player-container-template'>
//             <img src='https://mixlr-assets.s3.amazonaws.com/artwork/27d9349fb49ac9aa976b83d3b3ccffa3/base@2x.jpeg'/>
//             <div className="player-container">
//             <div className="disc-container">
//                 <div className="disc-drake">
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