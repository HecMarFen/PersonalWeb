import '../../Styles/projects.css'

export default function planted (){
    return(
        
        <div className='projects_box'>
                
            <div>
                fecha
            </div>
            <div>
               <h1> Planted app</h1> 
            </div>
            <div className='info_project'>
                <p>
                    Planted is a App develop with Js. This is the first project that I developed
                    where a Database interacts with the user via requests. The project uses sessions to handle the login-signup
                    logic and express.js for the back end. The front end is developed with HTML and CSS. 
                    The project consists on a general plant Database which I also built, that allows the user to
                    add it to a personal collection. Then we can delete it or edit certain parameters of the plant.
                    I hoped to include a algorithm which depending on the plant values will trigger a alarm to notify
                    the plant water needs. However i run out of time and I decided to explore for the first time the CSS
                    flexbox model which helped me to understand how a app or web is structured.
                    The project was develop in four days and the seconth under Ironhack teachers supervision.
                </p>
            </div>
            <button className='button_link_project'>To the app</button>

        </div>
    )
}