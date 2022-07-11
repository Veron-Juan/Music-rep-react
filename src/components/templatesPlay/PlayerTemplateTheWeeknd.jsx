import '../templatesPlay/PlayerTemplateTheWeeknd.css'





const playButton = ()=>{
    const discImage = document.querySelector('.disc-theweeknd');
    const buttonPlay = document.querySelector('.play')
    const buttonPause = document.querySelector('.button-pause')
    discImage.classList.toggle('rotate');
    buttonPause.classList.toggle('inactive');
    buttonPlay.classList.toggle('inactive')
    
  }

const pauseButton = ()=>{
    
    const discImage = document.querySelector('.disc-theweeknd');
    const buttonPlay = document.querySelector('.play')
    const buttonPause = document.querySelector('.button-pause');
    discImage.classList.toggle('pause-animation');
    buttonPlay.classList.toggle('inactive');
    buttonPause.classList.toggle('inactive');
    discImage.classList.toggle('play-animation');

}





export default function PlayerTemplateTheWeeknd(){
    return(
        <div className='player-container-template'>
            <img src='https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/03/20/10/the-weeknd-2003.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart'/>
            <div className="player-container">
            <div className="disc-container">
                <div className="disc-theweeknd">
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