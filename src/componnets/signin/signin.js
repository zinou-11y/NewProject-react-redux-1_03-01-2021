import React from 'react';
import './style.css';
const Singin = () => {
  return (
        <div >
            <div className="container">
                <h2 className="drop-title">Please Sign<span>-IN to Complet your test :</span></h2>
                <form action="">
                    <div className="form-input">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                    </div> 
                    <input type="submit" value="Sign-In"/>
                </form>
            </div>
        </div>
  );
}

export default Singin;