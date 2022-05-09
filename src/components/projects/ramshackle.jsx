import '../../Styles/projects.css'

export default function ramshackle (){

    return(
        <div className='projects_box'>
            <div>
                fecha
            </div>
            <div>
               <h1>Ramshackle collective</h1> 
            </div>
            <div className='info_project'>
                <p>
                    This is the final project at Irohack. In this case I team up with a kollegue again
                    We divided some tasks but help each other to develop de project.
                    This is the first development using JS React frameWork. It was very usefull to introduce
                    the concepts of hooks, components and states. The project focuses more in the learning of
                    React and JS itself rather than in CSS or the design. The project includes features such as login-signup
                    authentification, connection to a noSQL database, runs promises in the back-end, introduction to filter data
                    and map over data models which we also built. Deployment with Heroku and the file management with Cloudinary.
                    This project runs in two ways. One for the public view ....() and the 'back-site' where the web admin can add,
                    delete, edit projects and events.
                    The project was develop from scratch in six days.
                </p>
            </div>
            <div className='few_buttons_project'>
                <button className='button_link_project'>To the public view</button>
                <button className='button_link_project'>To the admin view</button>
            </div>
            

        </div>
    )
}