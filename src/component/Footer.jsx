import React from "react";
import "./Footer.css";
import { FaAngleRight, FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Footer = () =>
{
  const navigate = useNavigate()
  return (
    <div>
      <footer 
        className="footer-section"
        style={{ backgroundImage: "url(assets/images/footer/bg.webp)"}}
      >
        <div style={{paddingBottom:"1px"}} className="footer-top">
          <div className="container">
            <div  className="row g-3 justify-content-center g-lg-0">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="/images/phoneicon.webp" alt="Phone-icon" />
                    </div>
                    <div className="lab-content">
                      <span> <a href="tel:+91 98282 84421">Phone Number  +91 98282 84421</a>
</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="/images/02_1.webp" alt="email-icon" />
                    </div>
                    <div className="lab-content">
                      <span>Email : metablock@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="/images/03_1.webp" alt="location-icon" />
                    </div>
                    <div className="lab-content">
                      <span>Address : Jaipur Rajashtan India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{paddingTop:"8%"}} className="footer-middle ">
          <div className="container">
            <div className="row padding-lg-top">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item mb-lg-0">
                    <div className="fm-item-title mb-4">
                      <img style={{width:"250px"}} src="images/logo (123).webp" alt="logo" />
                    </div>
                    <div className="fm-item-content">
                      <p className="mb-4">
                        "Immerse yourself in the world of gaming with this
                        website—a comprehensive hub offering a rich array of
                        content, from insightful reviews and expert guides to
                        the latest gaming news, fostering a vibrant community of
                        passionate gamers."
                      </p>
                      {/* <ul className="match-social-list d-flex flex-wrap align-items-center">
                    <li><a href="#"><img src="assets/images/match/social-1.png" alt="vimeo" /></a></li>
                    <li><a href="#"><img src="assets/images/match/social-2.png" alt="youtube" /></a></li>
                    <li><a href="#"><img src="assets/images/match/social-3.png" alt="twitch" /></a></li>
                  </ul> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item mb-lg-0">
                    <div className="fm-item-title">
                      <h4>Top jackpot games</h4>
                    </div>
                    <div className="fm-item-content">
                      <div className="fm-item-widget lab-item">
                        <div className="lab-inner">
                          <div className="lab-thumb">
                            <a href="#">
                              {" "}
                              <img
                                src="/images/download (2).webp"
                                alt="footer-widget-img"
                                className="rounded-3"
                              />
                            </a>
                          </div>
                          <div className="lab-content">
                            <a >
                              <h6> Rummy Tourment</h6>
                            </a>

                            <div className="rating">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fm-item-widget lab-item">
                        <div className="lab-inner">
                          <div className="lab-thumb">
                            <a href="#">
                              <img
                                src="/images/download (1).webp"
                                alt="footer-widget-img"
                                className="rounded-3"
                              />
                            </a>
                          </div>
                          <div className="lab-content">
                            <a href="blog-single.html">
                              <h6>3 Patti Game</h6>
                            </a>

                            <div className="rating">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fm-item-widget lab-item">
                        <div className="lab-inner">
                          <div className="lab-thumb">
                            <a href="#">
                              <img
                                src="/images/images (13).webp"
                                alt="footer-widget-img"
                                className="rounded-3"
                              />
                            </a>
                          </div>
                          <div className="lab-content">
                            <a href="blog-single.html">
                              <h6>Ludo Game</h6>
                            </a>

                            <div className="rating">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div >
                    <div className="fm-item-title">
                      <h4>Our All Games</h4>
                    </div>
                    <div className="fm-item-content">
                      <p>
                        Delve into the exciting world of casino games, where
                        luck meets skill in an immersive gaming experience. From
                        classic favorites like poker, blackjack, and roulette to
                        modern slot machines with dynamic themes, our casino
                        games offer thrilling opportunities to test your
                        strategy and enjoy the rush of winning.
                      </p>
                      <form>
                        {/* <div className="form-group mb-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="form-group mb-2">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div> */}
                        <button style={{marginTop:"15px"}}   className="default-button">
                          <span   onClick={()=>navigate('/AllGames')}>
                           ALL Games <FaAngleRight />
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="footer-bottom" style={{ maxWidth: "100%", margin: "0 auto" }}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="footer-bottom-content text-center d-flex flex-column align-items-center">
          <p>
            ©2023 <a href="index.html">Casina</a> - All Rights Reserved.
          </p>
          <ul className="footer-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
            <li><Link to="terms_and_conditions">Terms And Conditions</Link></li>
            <li><Link to="Contact">Contact us</Link></li>
            <li><Link to="privacy_policy">Privacy Policy</Link></li>
            <li><Link to="Refund_and_cancellation_policy">Refund And Cancellation</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

      </footer>
    </div>
  );
};

export default Footer;



  