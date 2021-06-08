import React from 'react'
import S1 from '../images/S1.jpg';
import S2 from '../images/S2.jpg';

const Portfolio = () => {
    return (
        <div>
            <div className="Portfolio1"><img src={S1} alt="portfolio"/></div>
            <div className="Portfolio2"><img src={S2} alt ="portfolio"></img></div>
             </div>
    )
}

export default Portfolio;
