import { useState } from 'react'
import '../Styles/About.css'


export default function About(){

    const [showMore, setShowMore] = useState(false)
    const  aboutData = 
    <>
<div className='content'>
    <p className='paragraph'>
        I recently finished a 9 week Bootcamp at Ironhack Berlin in 2022. We covered and worked with JavaScript
        (React, Express), Html5, CSS, MOngoDB, GitHub, Cloudinary, Heroku. Oh and Katas, we did a looot of them.
        Run three different projects during the course, alone and in a team. Since I really enjoyed it I can not
        wait to get more knowledge and experience in the industry!!
    </p>
    <p className='paragraph'>
        Since I finished I was enthusiastic and hands on to sit the knowledge gained and to expand it.
        I have already done a 20h JIRA Softwere class in Udemy to feel comfortable with team workflows. I have practice
        played and trained in WordPress to understand better web design and Content management.
        I have also develop this personal website and currently I am enrolled in a Google Analytics Course (expended by ....)
        to understand web performance and last but not least, a CSS fron end development class (expended by ....) 
    </p>
    <p className='paragraph'>
        Personally i am open to work in a possition that relates to the new knowledge I aquired.
        I value the chances to grow and keep improving my hard skills. And if I had a chance to choose, 
        I prefer working in the Front End development, thus I believe there is more place for creativity
        and I just simply enjoy it more. 
    </p>
    <p className='paragraph'>
        I am a very peacefull person who tends to empathise very easily and who loves a good
        conversation and a beer above anything. Thus we could say I am very communicative and
        love to work with people. In my opinion there is nothing like sharing your thoughts, I
        believe that puting them on the table strengths relationships as well as brings the team
        to an extra stage. I want to believe I am a creative person. Maybe more like a dreamer.
        Let's be honest, sometimes I get lost in them  even without sleeping.
    </p>
    <p className='paragraph'>
        In my free time I am a similar person to working Hector. I have played Waterpolo for eigth
        years and before that I tried some football. Always in a team. I guess that was crucial to
        understand when to put yourself in a leading or follower role and individually give your best
        aiming a higher collective purpose. I enjoy nature and otdoors activities, thogh since I am
        in Berlin I am getting to enjoy other things which are awakening a big curiosity on me.
    </p>
</div>
</>;

    return(
        
        <div className="box" id='About'>
            <h2  className='about_title'>About me</h2>
            <div className='content'>
                <p className='paragraph'>
                    Hello world. I am Hector Marin Fenoll I am a Spanish soul based in Berlin.
                    I am an aspiring Web Developer who recently decided to change carreer and swim into
                    the tech industry. I hold a Bachellor in Business science, and a second Bachellor on
                    Tourism, both expired by University of Alicante.
                </p>
                
                <p className='paragraph'>
                    I have a background in services, mainly in hospitality. I have worked in a Property Agency(sales),
                    Bank(sales), in a Hotel(multi department), in a Catering company(waiter and food preparation), and
                    in a Cafe(events and waiter). I was able to manage people, work indipently and work in teams. 
                </p>
                
            </div>
            
            {showMore ? aboutData : ''}
            <button className='btn btn-one' onClick={() => setShowMore(!showMore)}>
                <span>{showMore? 'Show less' : 'Show more'}</span>
            </button> 
            
        </div>
        
    )
}