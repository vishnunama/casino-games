import React, { useEffect, useState } from "react";
import './Home.css'
import CasinoJackpots from "./CasinoJackpots";
import RealtedGames from "./RealtedGames";
import Question from "./Question";
import FreeSpin from "./FreeSpin";
import GameReview from "./GameReview";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MainHomePage from "./MainHomePage";
const Home = () =>

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
    return <div className="container">
      <div className="color-in" >
    <div style={{display:"flex",gap:"20px"}}  >
      <div className="col-xl-6 col-lg-7 col-12">
        <div style={{paddingTop:"150px"}}   className="banner__content">
          <h3>most trusted website</h3>
          <h1>Online Casino</h1>
          <h2>Genuine Money Transaction</h2>
          <p>
Dive into the excitement with our vast selection of 25 thrilling casino games. From classic favorites to modern twists, our website offers an immersive experience for every gaming enthusiast. Join us for a dynamic journey filled with entertainment, strategy, and the chance to win big!</p>
          <a onClick={()=>navigate('/Contact')}  className="default-button"><span> CONTACT   <FaAngleRight /></span> </a>
        </div>
      </div>
      <div>
        <img style={{width:"100vh",marginTop:"120px"}} src="/images/_316bfa09-8fc2-4b8f-bb84-3c7d45bdd52b-removebg-preview.webp" alt="" />
      </div>
    </div>
    </div>
 



<div><MainHomePage/></div>
        <div>
            <RealtedGames/>
      <div>
    <CasinoJackpots/>
</div>
        </div>
      <div>
        <FreeSpin/>
      </div>
      <div>
        <GameReview/>
      </div>
        <div>
            <Question/>
      </div>
  </div>;
};

export default Home;




 
 