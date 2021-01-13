import React from 'react';
import './style.css';
const Porto = () => {
return (
    <div className="profile_skills">
        <div className="container">
            <div className="profile">
                <h2 className="profile-title"><span>Our </span>best develpers</h2>
                <ul className="profile-list">
                    <li className="profile-item">
                        <span>Name</span>
                        Amariche zineddine
                    </li>
                    <li className="profile-item">
                        <span>Birthday</span>
                        25/07/1992
                    </li>
                    <li className="profile-item">
                        <span>Address</span>
                        Ain-edfla
                    </li>
                    <li className="profile-item">
                        <span>Phone</span>
                        0773820633
                    </li>
                    <li className="profile-item">
                        <span>Email</span>
                       insigned11@gmail.com
                    </li>
                    <li className="profile-item">
                        <span>Website</span>
                        <span className="web">www.esbootcamp.com</span>
                    </li>
                </ul>
            </div>
            
            <div className="skills">
                <h2 className="skills-title">Some <span>skills</span></h2>
                
                <div className="bar">
                    <span className="title">Front - end</span>
                    <span className="perc">100%</span>
                    <div className="parent">
                        <span className="sp1"></span>
                    </div>
                </div>

                <div className="bar">
                    <span className="title">laravel</span>
                    <span className="perc">100%</span>
                    <div className="parent">
                        <span className="sp1"></span>
                    </div>
                </div>
                
                <div className="bar">
                    <span className="title">Php</span>
                    <span className="perc">90%</span>
                    <div className="parent">
                        <span className="sp2"></span>
                    </div>
                </div>
                
                <div className="bar">
                    <span className="title">React+Redux</span>
                    <span className="perc">80%</span>
                    <div className="parent">
                        <span className="sp3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
)
}
export default Porto;