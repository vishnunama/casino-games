import React from "react";
import "./RealtedGames.css";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
const RealtedGames = () =>
{
  const navigate = useNavigate()
    return (
      <div>
         <div  className="game-section overflow-hidden" style={{backgroundImage: 'url(assets/images/match/bg.webp)',paddingTop:"20px", paddingBottom:"1px"}}>
    <div className="container">
      <div className="section-header">
        <h2>OUR POPULAR GAMES</h2>
      </div>
      {/* <ul className="game__filter">
        <li data-filter="*" className="is-checked"><span className="category">All</span></li>
        <li data-filter=".cat-1"><span className="category">Slots</span></li>
        <li data-filter=".cat-2"><span className="category">Roulette</span></li>
        <li data-filter=".cat-3"><span className="category">Black Jack</span></li>
        <li data-filter=".cat-4"><span className="category">Poker Games</span></li>
      </ul> */}
      <div className="row g-4 grid">
        <div className="col-lg-6 col-12 cat-1">
          <div className="game__item item-layer">
            <div className="game__inner text-center p-0">
              <div className="game__thumb mb-0">
                <img  src="/images/_799703f2-a6d0-4571-9119-3c96fc5c518d.webp" alt="game-img" className="image-inner-in-1" />
              </div>
              <div className="game__overlay">
                <div className="game__overlay-left">
                  <h4> 3 patti games</h4>
                
                </div>
                <div className="game__overlay-right">
                  <a href="#" className="default-button"><span>play now <FaAngleRight /></span> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 cat-2">
          <div className="game__item item-layer">
            <div className="game__inner text-center p-0">
              <div className="game__thumb mb-0">
                <img src="/images/_41e8fc01-96ae-4a0b-8247-161ef52cc5ed.webp" alt="game-img" className="image-inner-in-1" />
              </div>
              <div className="game__overlay">
                <div className="game__overlay-left">
                  <h4> Roulette games</h4>
               
                </div>
                <div className="game__overlay-right">
                  <a href="#" className="default-button"><span>play now <FaAngleRight /></span> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 cat-3">
          <div className="game__item item-layer">
            <div className="game__inner text-center p-0">
              <div className="game__thumb">
                <img  src="/images/_f4df77ef-0441-4de8-93f8-0f08732dbaac.webp" alt="game-img"  className="image-inner-in-1" />
              </div>
              <div className="game__overlay">
                <div className="game__overlay-left">
                  <h4>Dragon Tiger games</h4>
                
                </div>
                <div className="game__overlay-right">
                  <a href="#" className="default-button"><span>play now <FaAngleRight /></span> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 cat-4">
          <div className="game__item item-layer">
            <div className="game__inner text-center p-0">
              <div className="game__thumb">
                <img  src="/images/_0205568b-80a7-4dd0-b9c9-0d88b18a1d55.webp" alt="game-img"className="image-inner-in-1" />
              </div>
              <div className="game__overlay">
                <div className="game__overlay-left">
                  <h4>Call Break games</h4>
                  
                </div>
                <div className="game__overlay-right">
                  <a href="#" className="default-button"><span>play now <FaAngleRight /></span> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center mt-4">
      <a className="default-button reverse-effect" onClick={() => { navigate('/AllGames') }}>
  <span>Browse All Games <FaAngleRight /></span>
</a>

        
      </div>
    </div>
  </div>
  
         <section style={{paddingTop:"70px"}}>
        <div className="container">
          <div className="section-header">
            <h2> Casino Gaming Experience</h2>
          </div>
          <div className="section-wrapper game">
            <div className="row g-4 justify-content-center">
 
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img className="image-container"
                        style={{borderRadius:"60px"}}
                        src="/images/_88e1128b-0858-41b5-88ea-ac01a5e493d1.webp"
                        alt="game-img"
                      />
                    </div>
                    <div className="game__content">
                      <h4 style={{ color: "#ff0052" }}>
                        User-Friendly Interface:
                      </h4>
                      <p>
                        Design an intuitive and easy-to-navigate user interface
                        to enhance user experience, promoting accessibility and
                        seamless interaction. Ensure responsiveness for optimal
                        usability across various devices.
                      </p>

          <a style={{cursor:"pointer"}} onClick={() => { navigate('/AllGames') }}  className="default-button"><span> All Games <FaAngleRight /></span> </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img style={{borderRadius:"60px"}} className="image-container"
                        src="/images/_e2e7bcf4-2e86-45a4-bb8c-c2cef4fcf230.webp"
                        alt="game-img"
                      />
                    </div>
                    <div className="game__content">
                      <h4 style={{ color: "#ff0052" }}>Game Variety:</h4>
                      <p>
                        Provide a diverse selection of casino games, including
                        ludo, rummy, teen patti, and dragon tiger, offering
                        popular variations to suit varied player preferences and
                        interests.
                      </p>
          <a style={{cursor:"pointer"}} onClick={() => { navigate('/AllGames');  }}  className="default-button"><span> All Games  <FaAngleRight /></span> </a>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img className="image-container"
                      style={{borderRadius:"60px"}}
                        src="/images/_5cd0e1fb-1425-414b-8c65-149ddc5f0388.webp"
                        alt="game-img"
                      />
                    </div>
                    <div className="game__content">
                      <h4 style={{ color: "#ff0052" }}>
                        Secure and Fair Gameplay:
                      </h4>
                      <p>
                        Incorporate stringent security measures to safeguard
                        user data and financial transactions, fostering a
                        trustworthy gaming environment. Employ certified RNGs to
                        ensure fairness in gameplay.
                      </p>
                         <a style={{cursor:"pointer"}} onClick={() => { navigate('/AllGames'); }}  className="default-button"><span> All Games <FaAngleRight /></span> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
        
      </section>

</div>

  );
};

export default RealtedGames;
