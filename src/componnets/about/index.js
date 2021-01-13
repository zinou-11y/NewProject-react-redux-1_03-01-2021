import React from 'react';

import './style.css';
const About = () => {
  return (
    <> 
        <div className="creative" >
            
            <div className="container">
                <div className="creative-info">
                    <h2 className="info-title"><span>RESTER</span>  EN CONTACT</h2>
                    <h4 className="info-dir">Rejoignez plus de 400 000 professionnels de
                     l'informatique pour recevoir les dernières actualités, articles, quiz et exercices de 
                    codage de SkillValue directement dans leur boîte de réception chaque mois.</h4>
                    <p className="info-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </p>
                    <form>
                    <input type="email" placeholder="Your Email"/>
                    <input type="submit" value="Contact Us"/>
                </form>
                </div>
            </div>
        </div>
        
    </>
  );
}

export default About;