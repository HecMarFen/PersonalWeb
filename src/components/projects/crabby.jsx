import '../../Styles/projects.css'

export default function crabby (){
    return(
        <div className='projects_box'>
            <div>
                fecha
            </div>
            <div>
               <h1> Crabby Game</h1> 
            </div>
            <div className='info_project2'>
                <p>
                    This project is pure JavaScript based. It is developed under OOP and P5.
                    The project consists on a canvas where different objects interact between them.
                    There is a win-lose logic based on points. 
                    The game itself is a teaching game where the player becomes a crab who has to clean
                    a beach while avoiding damaging other beach animals and being eaten.
                    This is the first project I ever built in development context and thus the first one during
                    the Ironhack Bootcamp.
                    The whole project was develop from scratch in 4 days
                    
                </p>
            </div>
            <button className='button_link_project'>To the game</button>

        </div>
    )
}