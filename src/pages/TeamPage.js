import React from 'react'
import "../App.css"

const TeamPage = (props) => {
    return <div className="team-page-container">
        <div className="team-member">
            <div className="img-block">
                <img className="photo" src="https://i1.wp.com/inforrm.org/wp-content/uploads/2018/06/unknown.jpg?ssl=1"/>
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
                <p className="bio">Bio goes here</p>
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