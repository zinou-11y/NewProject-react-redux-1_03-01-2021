import About from '../about';
import Home from '../home';
import Footer from '../footer';

import Profile from '../profile';
import Work from '../work';
import Porto from '../porto';
import Socialmedia from '../socialmedia';
import { Component } from 'react';



class Index extends Component {
  render (){
  return (
    <div>
      <Home />
      <Work />
      <Profile />
      <About />
      <Porto/>
      <Socialmedia/>
      <Footer/>   
    </div>
  );
}
}
  


export default Index;
