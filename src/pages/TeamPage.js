import React from 'react'
import "../App.css"

const TeamPage = (props) => {
    return <div className="team-page-container">
        <div className="team-member">
            <div className="img-block">
                <img className="photo" src="https://i.imgur.com/CAop0pu.jpg"/>
                <div className="overlay">
                    <a href="https://www.linkedin.com/in/davidvdev/">
                        <div className="text">Let's Connect</div>
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <p className="member-name">David Vogel</p>
                <p className="title">Full-Stack Developer</p>
            </div>
            <div className="bio-block">
                <p className="bio">I am a fullstack software developer from Minneapolis, Minnesota with a driving motivation to help others solve problems and find joy using tech. Technology is innately human centric, and can assist us in bridging divides between people, cultures, and ideologies. I see empathy as a core human need, and my aim is to design software that recognizes humanity in all of us.</p>
            </div>
        </div>
        <div className="team-member">
            <div className="img-block">
                <img className="photo" src="https://i.imgur.com/K1IOrqE.jpg?2"/>
                <div className="overlay">
                    <a href="https://www.linkedin.com/in/anthony-lofredo/">
                        <div className="text">Let's Connect</div>
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <p className="member-name">Anthony Lofredo</p>
                <p className="title">Full-Stack Developer</p>
            </div>
            <div className="bio-block">
                <p className="bio">I am a software developer who enjoys working with the back-end as well as solving complex algorithms and puzzles. My drive to constantly learn has led me to software development. Outside of coding I am an avid baseball fan and enjoy hiking challenging outdoor trails.  </p>
            </div>
        </div>
    </div>
};

export default TeamPage