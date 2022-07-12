import '../templatesPlay/Starboy.css'





const playButton = ()=>{
    const discImage = document.querySelector('.disc-starboy');
    const buttonPlay = document.querySelector('.play')
    const buttonPause = document.querySelector('.button-pause')
    discImage.classList.toggle('rotate');
    buttonPause.classList.toggle('inactive');
    buttonPlay.classList.toggle('inactive')
    
  }

const pauseButton = ()=>{
    
    const discImage = document.querySelector('.disc-starboy');
    const buttonPlay = document.querySelector('.play')
    const buttonPause = document.querySelector('.button-pause');
    discImage.classList.toggle('pause-animation');
    buttonPlay.classList.toggle('inactive');
    buttonPause.classList.toggle('inactive');
    discImage.classList.toggle('play-animation');

}





export default function Starboy(){
    return(
        <div className='player-container-template'>
            <img src='https://i.pinimg.com/564x/6f/e7/e4/6fe7e434dc3d63cbe3af94048883c8fa.jpg'/>
            <div className="player-container">
            <div className="disc-container">
                <div className="disc-starboy">
                    <figure className="disc-stay-figure">
                    <figure className="disc-stay-figure--int" />
                    </figure>
                </div>
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