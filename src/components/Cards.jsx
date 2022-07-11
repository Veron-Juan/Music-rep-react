import "../styles/Cards.css"

export default function Cards(props){

        const fondo = document.querySelector('.home-container');
        const front = document.querySelector('.main-container--grid_item');

        
        const aver = ()=>{

                
                fondo.classList.toggle('back');
              }

        return(


            <div

            onMouseEnter={aver}
                onMouseLeave={aver}
            className='main-container--grid_item'>
                    <img src={props.image} ></img>
                    <h3></h3>
                    <p></p>
            </div>
        
        
    )
}
