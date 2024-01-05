import React, { useEffect, useState } from "react";
import './Home.css'
// import CasinoJackpots from "./CasinoJackpots";
// import RealtedGames from "./RealtedGames";
// import Question from "./Question";
// import FreeSpin from "./FreeSpin";
// import GameReview from "./GameReview";
// import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import MainHomePage from "./MainHomePage";

const MainHomePage= () =>

{
  const [counters, setCounters] = useState({
    developers: 350,
    projects: 1500,
    expertise: 15,
    countries: 75,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounters((prevCounters) => ({
        ...prevCounters,
        developers: prevCounters.developers + 1,
        projects: prevCounters.projects + 1,
        expertise: prevCounters.expertise + 1,
        countries: prevCounters.countries + 1,
      }));
    }, 2000); // Change the interval (in milliseconds) as needed

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount


  const navigate =useNavigate()
    return <div style={{}}>
     
      <section className="counter">
  <div className="container">
       <div style={{margin:" 30px 0px"}} >

    <div style={{paddingBottom:"20px",paddingTop:"30px"}} className="counter--in">
     
        <div className="col-lg-5 counter__left">
          <div  style={{marginBottom:"20px"}}>
            <h2>TODAY YOU CAN WIN UPTO</h2>
            
          </div>
          
        </div>
        
        
                  <div className="responsive-flex" style={{display:"flex",gap:"30px",maxWidth:"100%"}} > 
  <div className="responsive-flex-in" style={{display:"flex",gap:"30px"}}> 
        <div className="vdoCntLst">
          <p className="vdoCntLstCount">{counters.projects}+</p>
          <p className="vdoCntLstTlt">Products Developers</p>
        </div>
      
        <div className="vdoCntLst">
          <p className="vdoCntLstCount">{counters.projects}+</p>
          <p className="vdoCntLstTlt">Projects Delivered</p>
        </div>
        </div> 
    
      <div className="responsive-flex-in" style={{display:"flex",gap:"30px"}}>
        <div style={{}} className="vdoCntLst">
          <p className="vdoCntLstCount">{counters.expertise}+</p>
          <p className="vdoCntLstTlt">Years of Expertise</p>
        </div>
        <div className="vdoCntLst">
          <p className="vdoCntLstCount">{counters.countries}+</p>
          <p className="vdoCntLstTlt">Countries Served</p>
        </div>
        </div>
    </div>
                </div> 


      
    </div>
  </div>
</section>
  </div>;
};

export default MainHomePage;




 
 








///MainHomePage