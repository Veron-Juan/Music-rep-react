import './templateSongs.css'


const playButton = ()=>{
    const discImage = document.querySelector('.disco-image');
    const buttonPlay = document.querySelector('.play')
    const buttonPause = document.querySelector('.button-pause')
    discImage.classList.toggle('rotate');
    buttonPause.classList.toggle('inactive');
    buttonPlay.classList.toggle('inactive')
    
  }

const pauseButton = ()=>{
    
    const discImage = document.querySelector('.disco-image');
    const buttonPlay = document.querySelector('.play')
    const buttonPause = document.querySelector('.button-pause');
    discImage.classList.toggle('pause-animation');
    buttonPlay.classList.toggle('inactive');
    buttonPause.classList.toggle('inactive');
    discImage.classList.toggle('play-animation');

}





export default function TemplateSongs(props){
    return(
        <div className='template-container'>
            
            <img className='template-container-image' src={props.image} />
            <div className="player-container">
            <h3 className='title'>{props.title}</h3>
                <div className="disco-container">
                    
                        <img className='disco-image' src={props.disco} />
                        <figure className="disc-center-figure">
                        <figure className="disc-center-figure--int"  />
                        </figure>
                    
                </div>

            {/* Player */}
            <div className="container-reproductor">
             
            <span  class="material-symbols-outlined ">
volume_up
</span>
            <span class="material-symbols-outlined">
skip_previous 
</span>

    <div className="box-play-pause">

<span onClick={playButton} class="material-symbols-outlined btt play">
play_circle
</span>
<span onClick={pauseButton} class="material-symbols-outlined btt button-pause inactive">
pause
</span>

    </div>

            <span class="material-symbols-outlined ">
skip_next
</span>
            
<span class="material-symbols-outlined">
repeat
</span>
         
        </div>

        <div className="container-input--range">
            <input type="range"></input>
        </div>




        </div>
        </div>
        

    )
}