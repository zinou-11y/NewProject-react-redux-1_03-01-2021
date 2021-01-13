import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {Navbarsection , Logo,Logotext, Ullist, Listitem,Homebtn } from './style.js' ;

import Styles from './style.module.css'; 


const Navbar = () => {
  return (
  <Navbarsection >
    <div className="container">
      <Logo >
        <Logotext> Ultra Discover </Logotext>
      </Logo>
        <Ullist >
          <Listitem ><Link className={Styles.title} to='/'>Home</Link></Listitem>
          <Listitem ><Link className={Styles.title} to="/coder">For Coders</Link></Listitem>
          <Listitem ><Link className={Styles.title} to="/freelancer">For FreeLancers</Link></Listitem>
          <Listitem ><Link className={Styles.title} to="/companie">For Companies</Link></Listitem>
          <Listitem ><Link className={Styles.title} to="/about">About</Link></Listitem>
          <Listitem ><Link className={Styles.title} to='/contact'> Contact</Link></Listitem>
          <Homebtn ><Link className={Styles.title2} to='/signin'>Sign-in</Link> </Homebtn>
          <Homebtn ><Link className={Styles.title2} to='/login'>Log-in</Link> </Homebtn>
          
        </Ullist>
    </div>
  </Navbarsection>

  );
}

export default Navbar;