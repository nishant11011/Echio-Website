import NavBar from '../HomePageComponents/NavBar'
import HomePageMainContent from '../HomePageComponents/HomePageMainContent'
import React from 'react';
import Sponsors from '../HomePageComponents/Sponsors';
import SponsorsData from '../HomePageComponents/SponsorsData';

export default  function HomePage(){
    const sponsorsElements = SponsorsData.map((sponsor)=>{
        return <Sponsors sponsorSrc={sponsor}/>;
    })
 
    return(
<div className="gradient-to-top">
    <NavBar />
    <div id="homePageContent">
    <HomePageMainContent />
    <div className="sponsors-container">
        <span className="sponsors-slide">
        {sponsorsElements}
        </span>
        <span className="sponsors-slide">
        {sponsorsElements}
        </span>
    </div>
    </div>
      
</div>
    );
}
