import React from 'react';
import Typed from "react-typed";
//import {Link} from 'react-router-dom';

const Header = () => {
    return (
        
        <div className="header-wraper">
            <div className="main-info">
<h1>web developement</h1>
<Typed
className ="typed-text"
strings={["Web developper", "FrontEnd ReactJs"," Backend NodeJs" ]}
typeSpeed={40}
backSpeed={60}
loop
/>

 


            </div>
        </div>
       
    )

}

export default Header
