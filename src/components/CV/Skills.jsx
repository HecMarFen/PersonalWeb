import '../../Styles/education.css'
import '../../Styles/skills.css'
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
                <div className='show_skills'>
                    <div className='main_skills'>
                        < GiSkills className='dip_icon' />
                    </div> 
                    <div>
                        <div className='secondary_skills'>
                            <MdPeopleAlt/> Empathize
                        </div>
                        <div className='secondary_skills'>
                            <GiTalk /> Communication
                        </div>
                        <div className='secondary_skills'>
                            <RiTeamFill /> Team Player
                        </div>
                        <div className='secondary_skills'>
                            <BsCheckLg /> Positive Actitude
                        </div>
                        <div className='secondary_skills'>
                            <GrAssistListening/>Good listener
                        </div>
                        <div className='secondary_skills'>
                            <FaArrowRight /> Proactive
                        </div>

                    </div>
                    <div>
                        
                    </div>
                
                </div>
                <div className='show_skills'>
                    <div className='main_skills'>
                        <AiOutlineRobot className='dip_icon'/>
                    </div>
                    <div>
                        <div>
                        <RiFileExcel2Fill className='secondary_skills'/> Excell
                        </div>
                        <div>
                        <SiMongodb className='secondary_skills'/> MongoDB
                        </div>
                        <div>
                        <DiJavascript1 className='secondary_skills'/>JavaScript
                        </div>
                        <div>
                        <SiHtml5 className='secondary_skills' /> HTML5
                        </div>
                        <div>
                        <SiCsswizardry className='secondary_skills'/> CSS3
                        </div>
                        <div>
                        <RiReactjsFill className='secondary_skills'/>React.js
                        </div>
                        <div>
                        <BsFillBootstrapFill className='secondary_skills' /> Bootstrap
                        </div>
                        <div>
                        <FaGithub className='secondary_skills' />GitHub
                        </div>
                    </div>
                    <div>
                        <div>
                        <BsCloudCheckFill className='secondary_skills'/>Cloudinary
                        </div>
                        <div>
                        <GrHeroku className='secondary_skills' />Heroku
                        </div>
                        <div>
                        <GrWordpress className='secondary_skills'/>Wordpress
                        </div>
                        <div>
                        <SiJirasoftware className='secondary_skills'/>Jira Software
                        </div>
                        <div>
                        <SiGoogleanalytics className='secondary_skills'/>Google Analytics
                        </div>
                        <div>
                        <RiPlaneLine className='secondary_skills' />Spanish Tourism Market knowledge
                        </div>
                        <div>
                        <MdEuroSymbol className='secondary_skills' /> Business knowledge
                        </div>

                    </div>
                </div>
            </div> 
        </div> 
    )
}