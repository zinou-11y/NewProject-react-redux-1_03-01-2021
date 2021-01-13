import React from 'react';
import {WorkSection , Worktitle , Span , Workpart ,Icon,Homebtn, Parttitle, Line, Partdesc } from  './style.js';


const Begin = () => {
return (
    <div>
            <WorkSection>
            <div class="container">
                <Worktitle>CHOISISSEZ <Span> VOTRE ITINÉRAIRE : </Span></Worktitle>
                <Workpart first = "1">
                <Parttitle>De la recherche d'un  expert !</Parttitle>
                    <Icon className= "fa fa-search fa-2x"></Icon>
                    
                    <Line/>
                    <Partdesc>
                    Sélectionnez des profils d'indépendants, briefez-les sur votre projet,proposez un contrat.
                    Choisissez votre ou vos profils de pigistes préférés et commencez à collaborer directement sur SkillValue </Partdesc>
                    <Homebtn>Select profiles</Homebtn>
                </Workpart>
                
                
                <Workpart>
                <Parttitle>Parlez plutôt à notre CTO sur  votre projets </Parttitle>
                    <Icon className= "fa fa-briefcase fa-2x"></Icon>
                    
                    <Line/>
                    <Partdesc>
                    Nous identifions vos besoins en talents, vos défis techniques et votre style de communication. Concentrez-vous à 100% .</Partdesc>
                    <Homebtn>Let's Find Out</Homebtn>
                </Workpart>
                
                
                <Workpart>
                <Parttitle>Concentrez-vous sur votre entreprise</Parttitle>
                    <Icon className= "fa fa-building fa-2x"></Icon>
                    
                    <Line/>
                    <Partdesc>
                    Nous nous occuperons des tâches administratives. Nous nous occuperons même de l'espace de bureau si vous en avez besoin.                    </Partdesc>
                    <Homebtn>Sign Up</Homebtn>
            </Workpart>
            </div>
        </WorkSection>
    </div>
);
}

export default Begin;