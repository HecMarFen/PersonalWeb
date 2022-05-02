import '../../Styles/education.css'
import { MdComputer } from "react-icons/md"
import { ImLocation } from 'react-icons/im'
import { FaGraduationCap } from 'react-icons/fa'
import { GiDiploma } from 'react-icons/gi'

export default function Education (){
    return(
        <div className='display_box_edu'>   
            <div class="line">
                <h2 class='lineUp'>Education</h2>
            </div>
            <hr/>
            <div className='dip_box'>
                <div className='dip_icon_box'>
                    < MdComputer className='dip_icon'/>
                </div>
                <div>
                    <div>
                        Web Development Bootcamp
                    </div>
                    <div>
                        Ironhack
                    </div>
                    <div>
                        <ImLocation/> Berlin, Germany
                    </div>   
                </div>
            </div>
            <div className='dip_box'>
                <div className='dip_icon_box'>
                    < FaGraduationCap className='dip_icon'/>
                </div>
                <div>
                    <div>
                        Business Bachelor
                    </div>
                    <div>
                        UA - Uiversity of Alicante
                    </div>
                    <div>
                        <ImLocation/> Alicante, Spain
                    </div>   
                </div>
            </div>
            <div className='dip_box'>
                <div className='dip_icon_box'>
                    < FaGraduationCap className='dip_icon'/>
                </div>
                <div>
                    <div>
                        Tourism Bachelor
                    </div>
                    <div>
                        UA - Uiversity of Alicante
                    </div>
                    <div>
                        <ImLocation/> Alicante, Spain
                    </div>   
                </div>
            </div>
            <div className='dip_box'>
                <div className='dip_icon_box'>
                    < GiDiploma className='dip_icon'/>
                </div>
                <div>
                    <div>
                        Erasmus in International Business
                    </div>
                    <div>
                        SGH - Warsaw School of Economics
                    </div>
                    <div>
                        <ImLocation/> Warsaw, Poland
                    </div>   
                </div>
            </div>
        </div>       
    )
}