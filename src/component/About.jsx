import React from "react";
import "./About.css";
import RealtedGames from "./RealtedGames";
import Question from "./Question";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section
        className="pageheader-section"
        style={{ backgroundImage: "url(/images/1000_F_416254586_YnctPtejbIpnRuwdPK2wd559TpSm3duR-transformed-transformed.webp)" }}
      >
        <div className="container">
          <div className="section-wrapper text-center text-uppercase">
            <h2 className="pageheader-title">About</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    Home
                  </a>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="section-wrapper padding-top">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="col-lg-6 col-12">
                <div className="testimonial__thumb position-relative">
                  {/* <img style={{width:"650px"}}  src="/images/trophy_cleanup.jpg" alt="testimonial" /> */}
                  <iframe style={{maxWidth:"100%"}} className="car-video-in" src="https://www.youtube.com/embed/g5eQgEuiFC8" data-rel="lightcase">
                   
                    <span className="pluse" />
                  </iframe>
                  {/* <div className="video-icon">
                <a href="https://www.youtube.com/embed/g5eQgEuiFC8" data-rel="lightcase">
                <FaPlay style={{color:"red" }} />
                  <span className="pluse" />
                </a>
              </div> */}
                </div>
              </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="about-wrapper">
                  <div className="section-header">
                    <h2>we are professional team esport</h2>
                  </div>
                  <div className="about-content">
                    <p>
                      At Modeltheme, we show only the best websites and
                      portfolios built completely with passion simplicity and
                      creativity!
                    </p>
                    <ul className="about-list">
                      <li className="about-item d-flex flex-wrap">
                        <div className="about-item-thumb">
                          <img src="/images/icon-1.webp" alt="Icon" />
                        </div>
                        <div className="about-item-content">
                          <h5>103k Community Earning</h5>
                          <p>
                            Distinctively provide acces mutfuncto users whereas
                            communicate leveraged services
                          </p>
                        </div>
                      </li>
                      <li className="about-item d-flex flex-wrap">
                        <div className="about-item-thumb">
                          <img src="/images/icon-2.webp" alt="Icon" />
                        </div>
                        <div className="about-item-content">
                          <h5>34m+ Registered Players</h5>
                          <p>
                            Distinctively provide acces mutfuncto users whereas
                            communicate leveraged services
                          </p>
                        </div>
                      </li>
                      <li className="about-item d-flex flex-wrap">
                        <div className="about-item-thumb">
                          <img src="/images/icon-3.webp" alt="Icon" />
                        </div>
                        <div className="about-item-content">
                          <h5>240k Streams Complete</h5>
                          <p>
                            Distinctively provide acces mutfuncto users whereas
                            communicate leveraged services
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <RealtedGames />
      </div>
      <div>
        <Question />
      </div>
    </div>
  );
};

export default About;
