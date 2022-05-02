import '../../Styles/education.css'
import { GiSkills} from 'react-icons/gi'
import {AiOutlineRobot} from 'react-icons/ai'
import {MdPeopleAlt} from 'react-icons/md'
import {GiTalk} from 'react-icons/gi'
import {RiTeamFill} from 'react-icons/ri'
import {BsCheckLg} from 'react-icons/bs'
import {GrAssistListening} from 'react-icons/gr'
import {FaArrowRight} from 'react-icons/fa'
import {RiFileExcel2Fill} from 'react-icons/ri'
import {SiMongodb} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'
import {SiHtml5} from 'react-icons/si'
import {SiCsswizardry} from 'react-icons/si'
import {RiReactjsFill} from 'react-icons/ri'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsCloudCheckFill} from 'react-icons/bs'
import {GrHeroku} from 'react-icons/gr'
import {GrWordpress} from 'react-icons/gr'
import {SiJirasoftware} from 'react-icons/si'
import {SiGoogleanalytics} from 'react-icons/si'
import {RiPlaneLine} from 'react-icons/ri'
import {MdEuroSymbol} from 'react-icons/md'

export default function Skills (){
    return(
        <div className='display_box_edu'>   
            <div class="line">
                <h2 class='lineUp'>Skills</h2>
            </div>
            <hr/>
            <div>
                < GiSkills />
                <AiOutlineRobot />
                <MdPeopleAlt/> empathize
                <GiTalk /> communication
                <RiTeamFill /> Team Player
                <BsCheckLg /> Positive Actitude
                <GrAssistListening/>Good listener
                <FaArrowRight /> Proactive
                <RiFileExcel2Fill/> Excell
                <SiMongodb/> MongoDB
                <DiJavascript1/>JavaScript
                <SiHtml5 /> HTML5
                <SiCsswizardry/> CSS3
                <RiReactjsFill />React.js
                <BsFillBootstrapFill /> Bootstrap
                <FaGithub />GitHub
                <BsCloudCheckFill/>Cloudinary
                <GrHeroku />Heroku
                <GrWordpress/>Wordpress
                <SiJirasoftware/>Jira Software
                <SiGoogleanalytics />Google Analytics
                <RiPlaneLine />Spanish Tourism Market knowledge
                <MdEuroSymbol /> Business knowledge

            </div> 
        </div> 
    )
}