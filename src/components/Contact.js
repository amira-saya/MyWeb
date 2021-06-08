import React from 'react';
import '../App.css'




const Contact = () => {
    return (
        <div className="wrapper">
        <form className="form">
          <div className="pageTitle title">Contact me </div>
          <div className="secondaryTitle title">Please fill this form to contact me.</div>
          <input type="text" className="name formEntry" placeholder="Name" />
          <input type="text" className="email formEntry" placeholder="Email"/>
          <textarea className="message formEntry" placeholder="Message"></textarea>
          
          <button className="submit formEntry" onclick="thanks()">Submit</button>
        </form>
      </div>
    
    )
}

export default Contact  
