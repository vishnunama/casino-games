import React from "react";
import "./Footer.css";
import { FaAngleRight, FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <footer
        className="footer-section"
        style={{ backgroundImage: "url(assets/images/footer/bg.webp)" }}
      >
        <div style={{paddingBottom:"1px"}} className="footer-top">
          <div className="container">
            <div  className="row g-3 justify-content-center g-lg-0">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    
                    <div className="lab-thumb">
                      <a href="tel:+91 98282 84421">
                      <img  src="/images/phoneicon.webp" alt="Phone-icon" />
                      </a>
                    </div>
                    <div className="lab-content">
                      <span> <a href="tel:+91 98282 84421"> Phone Number  +91 98282 84421  </a> 
</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                    <a href="mailto:metablock108@gmail.com" target="blank">
                      <img src="/images/02_1.webp" alt="email-icon" /> </a>
                    </div>
                    <div className="lab-content">
                      <a href="mailto:metablock108@gmail.com" target="blank">
                      <span>Email : metablock108@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <a href="https://www.google.com/maps/place/Tamanna+Apartment/@26.8949515,75.7489926,15.17z/data=!4m6!3m5!1s0x396db566ba42c1ed:0xce00513b5fd69b04!8m2!3d26.8942671!4d75.7655693!16s%2Fg%2F11h39zw_sb?entry=ttu" target="blank">
                      <img src="/images/03_1.webp" alt="location-icon" />
                      </a>
                    </div>
                    <div className="lab-content">
                      <span> <a href="https://www.google.com/maps/place/Tamanna+Apartment/@26.8949515,75.7489926,15.17z/data=!4m6!3m5!1s0x396db566ba42c1ed:0xce00513b5fd69b04!8m2!3d26.8942671!4d75.7655693!16s%2Fg%2F11h39zw_sb?entry=ttu" target="blank">Address : Jaipur Rajashtan India </a> </span>
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
                      <img style={{width:"250px"}} src="images/WhatsApp_Image_2024-01-09_at_18.14.16_c401108b-removebg-preview.webp" alt="logo" />
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
                                src="/images/_2e76f90b-26f8-49f8-878d-2a36f096f391.webp"
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
                                src="/images/_f1f8a7d6-7fc1-4576-a84b-4645d1a13427.webp"
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
                                src="/images/_a49c1924-7784-4b61-9767-8b6775a6d578.webp"
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
                        <button  style={{marginTop:"15px",marginBottom:"20px"}}   className="default-button">
                          <span   onClick={()=>navigate('/AllGames')}  >
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
            © {new Date().getFullYear()} <a href="index.html">Casina</a> - All Rights Reserved.
          </p>
                  <ul
                    className="footer-container"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: "2rem",
                    }}
                  >
                    <li><Link to="terms_and_conditions" target="blank" >Terms And Conditions</Link></li>
                    <li><Link to="Contact" target="blank" >Contact us</Link></li>
                    <li>
                      <Link to="privacy_policy" target="blank" >
                        Privacy Policy
                      </Link>
                    </li>
                    <li><Link to="Refund_and_cancellation_policy" target="blank">Refund And Cancellation</Link></li>
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
