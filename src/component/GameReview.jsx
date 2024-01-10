import React from "react";
import './GameReview.css'
import { FaPlay, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStarHalfStroke } from "react-icons/fa6";

// import StarIcon from '@mui/icons-material/Star';
const GameReview = () => {
  return (
    <div>
      <div className="testimonial" style={{ backgroundImage: 'url(assets/images/testimonial/bg.png)' }}>
        <div className="container">
          <div className="section-header">
            <h2>our gamers reviews</h2>
            <p>At Modeltheme, we show only the best websites and portfolios built completely with passion simplicity and creativity !</p>
          </div>
          <div className="section-wrapper">
            <div className="row g-4">
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
              <div className="col-lg-6 col-12">
                <div className="testimonial-slider overflow-hidden">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-inner">
                          <div style={{ padding: "10px" }} className="testimonial-head">
                            <div style={{paddingBottom:"10px"}}  className="testi-top">
                              <div className="testimonial-thumb">
                                <img src="/images/images (17).webp" alt="testimonial" />
                              </div>
                              <div className="name-des">
                                <h5>Rahul Agarwal</h5>
                                <p>Gamer</p>
                              </div>
                            </div>
                            <div style={{paddingRight:"20px"}} className="testimonial-footer">
                              <ul  >
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStarHalfAlt/></li>

                              </ul>
                              <h5>4.5</h5>
                            </div>
                          </div>
                          <div className="testimonial-body">
                            <p>A thrilling escape to virtual worlds,engaging narratives and interactive experiences for an unparalleled entertainment journey.</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item">
                        <div className="testimonial-inner">
                          <div className="testimonial-head">
                            <div style={{paddingBottom:"10px"}}  className="testi-top">
                              <div className="testimonial-thumb">
                                <img src="/images/images (16).webp" alt="testimonial" />
                              </div>
                              <div className="name-des">
                                <h5>Aakash sharma</h5>
                                <p>Gamer</p>
                              </div>
                            </div>
                            <div style={{paddingRight:"25px"}} className="testimonial-footer">
                              <ul>
                                 <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStarHalfAlt/></li>
                              </ul>
                              <h5>4.5</h5>
                            </div>
                          </div>
                          <div className="testimonial-body">
                            <p>Cutting-edge interfaces accelerate collaboration, fueling dynamic idea sharing within teams. This synergy propels innovation, streamlines future processes, and paves the way for effective monetization strategies.</p>
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

  );
};

export default GameReview;
