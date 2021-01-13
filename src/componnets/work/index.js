import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import Styles from './style.module.css';
import {WorkSection , Worktitle , Span , Workpart ,Icon,Homebtn, Parttitle, Line, Partdesc } from  './style.js';
function Work  (){
    return (
        <WorkSection>
            <div class="container">
                <Worktitle>CHOISISSEZ <Span> VOTRE ITINÉRAIRE : </Span></Worktitle>
                <Workpart first = "1">
                    <Icon className= "fa fa-search fa-2x"></Icon>
                    <Parttitle>De la recherche d'un  expert !</Parttitle>
                    <Line/>
                    <Partdesc>
                    Sélectionnez des profils d'indépendants, briefez-les sur votre projet,proposez un contrat.
                    Choisissez votre ou vos profils de pigistes préférés et commencez à collaborer directement sur SkillValue </Partdesc>
                    <Homebtn><Link  className={Styles.title} to='/begin'> Select profiles </Link> </Homebtn>
                      
                </Workpart>
                
                
                <Workpart>
                    <Icon className= "fa fa-briefcase fa-2x"></Icon>
                    <Parttitle>Parlez plutôt à notre CTO sur  votre projets </Parttitle>
                    <Line/>
                    <Partdesc>
                    Nous identifions vos besoins en talents, vos défis techniques et votre style de communication. Concentrez-vous à 100% .</Partdesc>
                    <Homebtn><Link  className={Styles.title} to='/begin'> Let's Find Out </Link> </Homebtn>
                    
                </Workpart>
                
                
                <Workpart>
                    <Icon className= "fa fa-building fa-2x"></Icon>
                    <Parttitle>Concentrez-vous sur votre entreprise</Parttitle>
                    <Line/>
                    <Partdesc>
                    Nous nous occuperons des tâches administratives. Nous nous occuperons même de l'espace de bureau si vous en avez besoin.                    </Partdesc>
                    <Homebtn><Link  className={Styles.title} to='/signin'> Sign Up </Link> </Homebtn>
                    
            </Workpart>
            </div>
        </WorkSection>
  );
}

export default Work;