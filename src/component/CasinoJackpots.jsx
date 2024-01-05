import React from "react";
import "./CasinoJackpots.css";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const CasinoJackpots = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="jaqport"
        style={{ backgroundImage: "url(assets/images/jaqport/jaqport-bg.webp)", paddingTop:"70px" }}
      >
        <div  className="container">
          
          <div className="section-wrapper">
            <div  className="">
              
              <div >
                <div className="jaqport__right mx-auto">
                  <div   className="jaqport__top">
                    <div  className="jaqport__title">
                      <div  className="jaqport__title-title">
                        <h4>Skills Games</h4>
                      </div>
                   
                    </div>
                    <div >
                      <div  className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="game__item item-layer">
                            <div className="game__inner text-center p-0">
                              <div className="game__thumb mb-0">
                                <img
                                  src="/images/_44022881-2484-420b-8084-6ea647b20173.webp"
                                  alt="game-img"
                                  className="rounded-3 w-100"
                                />
                              </div>
                              <div className="game__overlay">
                                <h4>poker games</h4>

                                <a href="#" className="default-button">
                                  <span>
                                    play now <FaAngleRight />
                                  </span>{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="game__item item-layer">
                            <div className="game__inner text-center p-0">
                              <div className="game__thumb mb-0">
                                <img
                                  src="/images/_6c574ce7-3689-4486-a77a-4d940b8f2f76.webp"
                                  alt="game-img"
                                  className="rounded-3 w-100"
                                />
                              </div>
                              <div className="game__overlay">
                                <h4>Roulette games</h4>

                                <a href="#" className="default-button">
                                  <span>
                                    play now <FaAngleRight />
                                  </span>{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="game__item item-layer">
                            <div className="game__inner text-center p-0">
                              <div className="game__thumb mb-0">
                                <img
                                  src="/images/_4e9749a8-10b1-4513-8f37-3b17d8a0eb05.webp"
                                  alt="game-img"
                                  className="rounded-3 w-100"
                                />
                              </div>
                              <div className="game__overlay">
                                <h4>3 Patti games</h4>

                                <a href="#" className="default-button">
                                  <span>
                                    play now <FaAngleRight />
                                  </span>{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jaqport__bottom">
                    <div className="jaqport__title">
                      <div className="jaqport__title-title">
                        <h4>RUNNING JACKPOTS</h4>
                      </div>
                      {/* <div className="jaqport__title-button">
                        <a
                          className="default-button reverse-effect"
                          onClick={() => {
                            navigate("/AllGames");
                            window.scrollTo(0, 0);
                          }}
                        >
                          <span>
                            Browse All Games <FaAngleRight />
                          </span>
                        </a>
                      </div> */}
                    </div>
                    <div className="jaqport__body">
                      <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="game__item item-layer">
                            <div className="game__inner text-center p-0">
                              <div className="game__thumb mb-0">
                                <img
                                  src="/images/_84dc39c8-b5a0-41ed-91d7-d0c54dfde9f1.webp"
                                  alt="game-img"
                                  className="rounded-3 w-100"
                                />
                              </div>
                              <div className="game__overlay">
                                <h4>Rummy games</h4>

                                <a href="#" className="default-button">
                                  <span>
                                    play now <FaAngleRight />
                                  </span>{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="game__item item-layer">
                            <div className="game__inner text-center p-0">
                              <div className="game__thumb mb-0">
                                <img
                                  src="/images/logo for a poker w poker chips playing cards (1).webp"
                                  alt="game-img"
                                  className="rounded-3 w-100"
                                />
                              </div>
                              <div className="game__overlay">
                                <h4>Poker games</h4>
                                
                                <a href="#" className="default-button">
                                  <span>
                                    play now <FaAngleRight />
                                  </span>{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                          <div className="game__item item-layer">
                            <div className="game__inner text-center p-0">
                              <div className="game__thumb mb-0">
                                <img
                                  src="/images/logo for a poker w poker chips playing cards (2).webp"
                                  alt="game-img"
                                  className="rounded-3 w-100"
                                />
                              </div>
                              <div className="game__overlay">
                                <h4>Private games</h4>

                                <a href="#" className="default-button">
                                  <span>
                                    play now <FaAngleRight />
                                  </span>{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <section style={{paddingTop:"70px"}} >
        <div className="container">
          <div className="section-header">
            <h2>Gaming Features</h2>
            <p>
              At Modeltheme, we show only the best websites and portfolios built
              completely with passion, simplicity and creativity !
            </p>
          </div>
          <div className="section-wrapper game game-style2">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img className="image-container-in"src="/images/_4e0ea09a-df3c-403f-b861-514acd3b5a97.webp" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }}>PAYMENT LIMITATION</a>{" "}
                      </h4>
                      <p>
                        Payment limitations refer to the constraints or restrictions imposed on financial transactions, or comply with regulatory requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img className="image-container-in"  src="/images/_46cf31a1-6862-4258-8f71-5e4bce44108c.webp" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }}>Great Solutions</a>{" "}
                      </h4>
                      <p>
                        Great solutions transcend problems, offering innovative and effective resolutions to challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img className="image-container-in" src="/images/_9567ce55-03b8-48cc-a8db-5a56beeea91c.webp" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }} >Support in Person</a>{" "}
                      </h4>
                      <p>
                       Support in person provides personalized assistance and direct engagement, fostering a tangible and responsive connection to address needs or concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img className="image-container-in" src="/images/_d880da64-c7e5-40b1-af57-208a897a4aec.webp" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4>
                        <a style={{ color: "#ff0052" }}>Daily Challenges </a>{" "}
                      </h4>
                      <p>
                        Daily challenges present opportunities for growth and learning, while rewards celebrate the persistence and achievements encountered on the journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img className="image-container-in" src="/images/_bd6afd2c-a5e3-4fcd-93de-1f20c6bebe13.webp" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }} >Progressive Jackpots
</a>{" "}
                      </h4>
                      <p>
Progressive jackpots continuously grow, accumulating larger rewards over time, creating exciting opportunities for significant winnings in games and activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img className="image-container-in" src="/images/skillgames1.webp" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }}>Chat and Social Integration
</a>{" "}
                      </h4>
                      <p>
Chat and social  fostering interactive and engaging experiences  and social elements within platforms and applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img className="image-container-in" src="/images/_e7c63633-4ecd-4265-8ea3-b49f70f52a1a.webp" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }}>Tournaments and Leaderboards
</a>{" "}
                      </h4>
                      <p>
 bringing a dynamic edge to activities by showcasing player rankings and fostering a spirited environment for participants to strive for excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img className="image-container-in" src="/images/_b6d8c4c3-c89b-4fd7-a932-940b5d07026b.webp" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }} >
                          Multiplayer Gameplay
                        </a>{" "}
                      </h4>
                      <p>
                        Real-time multiplayer gameplay offers an immersive and dynamic experience, enhancing the excitement and social interaction in gaming environments.
                      </p>
                    </div>
                  </div>
                  
                </div>
                
              </div>
              <div className=" text-center">
      <a className="default-button reverse-effect" onClick={() => { navigate('/AllGames'); window.scrollTo(0, 0); }}>
  <span>Browse All Games <FaAngleRight /></span>
</a>

        
      </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="collection-section padding-top padding-bottom">
        <div className="container">
          <div className="section-header">
            <h2>Support to casino</h2>
          </div>
          <div className="section-wrapper game">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img
                        src="/images/images__user___1_-removebg-preview.png"
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img
                        src="/images/images__12_-removebg-preview.png"
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img
                        src="/images/images-removebg-preview (1).png"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
     {/* <section className="collection-section padding-top padding-bottom">
        <div className="container">
          <div className="section-header">
            <h2>Gaming Features</h2>
            <p>
              At Modeltheme, we show only the best websites and portfolios built
              completely with passion, simplicity and creativity !
            </p>
          </div>
          <div className="section-wrapper game game-style2">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img src="/images/images.jpeg" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }} href="">PAYMENT LIMITATION</a>{" "}
                      </h4>
                      <p>
                        Holisticly underwhe fully researched deliverables for
                        revoluonary sourcess skills and technically sound
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img src="/images/images (1).jpeg" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }} href="">Great Solutions</a>{" "}
                      </h4>
                      <p>
                        Holisticly underwhe fully researched deliverables for
                        revoluonary sourcess skills and technically sound
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img src="/images/images (2).jpeg" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }} href="">Support in Person</a>{" "}
                      </h4>
                      <p>
                        Holisticly underwhe fully researched deliverables for
                        revoluonary sourcess skills and technically sound
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img src="/images/images (3).jpeg" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4>
                        <a style={{ color: "#ff0052" }} href="">Support in Person</a>{" "}
                      </h4>
                      <p>
                        Holisticly underwhe fully researched deliverables for
                        revoluonary sourcess skills and technically sound
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img src="/images/images (14).jpeg" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }} href="">Progressive Jackpots:
</a>{" "}
                      </h4>
                      <p>
                      Include progressive jackpot systems to attract players with the allure of substantial, growing prizes.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img src="/images/download.png" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }} href="">Chat and Social Integration:
</a>{" "}
                      </h4>
                      <p>
                      Implement in-game chat features for players to communicate during gameplay. 

                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img src="/images/download (3).jpeg" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }} href="">Tournaments and Leaderboards:
</a>{" "}
                      </h4>
                      <p>
                      Organize regular tournaments to engage players and maintain a competitive environment.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="game__item item-layer">
                  <div className="game__inner text-center">
                    <div className="game__thumb">
                      <img src="/images/images (15).jpeg" alt="game-img" />
                    </div>
                    <div className="game__content">
                      <h4 >
                        <a style={{ color: "#ff0052" }} href="">
                          Real-Time Multiplayer Gameplay:
                        </a>{" "}
                      </h4>
                      <p>
                        Enable players to compete with each other in real-time,
                        enhancing the social aspect of the games. Live Dealers:
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
     
    </div>
  );
};

export default CasinoJackpots;
