import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {Homesection,Homeinformation,Hometitle,Homeinfo,Homedesc,Homebtn,Span,Image} from './style.js';

import Styles from './style.module.css'; 

const Home = () => {
return (
<Homesection>
    <Image src='images/Home/home7.jpg'/>
        <div class="container">
            <Homeinformation>
                <Hometitle >CHOOSE THE BEST DEVELOPERS IN ALGERIA</Hometitle>
                    <Homeinfo>Test your Developer with the first - web site -  in algeria</Homeinfo>
                    <Homedesc >Devenez un <Span> développeur </Span> démarrez votre carrière 
                        Full Stuck Developer and creating modern resposive designs to Web and
                        Mobile. Let us work together.Thank you.</Homedesc>
                <Homebtn ><Link className={Styles.title} to="/begin"> Let's Begin </Link></Homebtn>
            </Homeinformation>
        </div>
</Homesection>
);
}

export default Home;


