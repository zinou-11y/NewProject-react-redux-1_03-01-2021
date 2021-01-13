import Contact from './componnets/contact';
import Navbar from './componnets/navbar';
import Index from './componnets/index';
import About from './componnets/about';
import Begin from './componnets/begin/begin';
import Signin from './componnets/signin/signin';
import Login from './componnets/login/login';
import Coder from './componnets/forcoders/index';
import Companie from './componnets/forcompanies/index';
import Freelancer from './componnets/forfrelancers/index';




import { Component } from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';


class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component= {Index} />
        <Route path='/contact' component= {Contact}/>
        <Route path='/about' component= {About}/>
        <Route path='/begin' component= {Begin}/>
        <Route path='/signin' component= {Signin}/>
        <Route path='/login' component= {Login}/>
        <Route path='/coder' component= {Coder}/>
        <Route path='/companie' component= {Companie}/>
        <Route path='/freelancer' component= {Freelancer}/>

        
        

      </BrowserRouter>
    );
  }

  }


export default App;
