import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SwipeableTemporaryDrawer from "./resnav";
import SwipeableTemporaryDrawer2 from "./resnav2";
import {
  FaFacebookMessenger,
  FaTwitter,
  FaVimeo,
  FaSkype,
  FaRss,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { IoIosInformationCircle } from 'react-icons/io';
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header style={{height:"110px"}}  className="header-section">
        <div className="container">
          <div style={{display:"flex",marginTop:"-10px",justifyContent:"space-around",alignItems:"center"}} >
            <div   className="brand-logo d-none d-lg-inline-block">
              <div className="logo">
               <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                  <img src="images/logo (123).webp" style={{width:"120px",marginBottom:"35px"}} alt="logo" />
                </a> 
              
                
              </div>
            </div>
            <div className="header-menu-part">
              <div className="header-top">
                <div  className="header-top-area">
                  <ul  className="left">
                    <li>
                      <FaPhone /> <a href="tel:+91 8107196932" target="blank">+917240650376</a>
                    </li>
                    <li>
                      <FaMapMarkerAlt />
                <a  href="https://www.google.com/maps/place/Tamanna+Apartment/@26.8949515,75.7489926,15.17z/data=!4m6!3m5!1s0x396db566ba42c1ed:0xce00513b5fd69b04!8m2!3d26.8942671!4d75.7655693!16s%2Fg%2F11h39zw_sb?entry=ttu" target='blank'>jaipur,Rajasthan</a>

                    </li>
                  </ul>
                  <ul className="social-icons d-flex align-items-center">
                    <li>
                      <a
                        href="https://www.facebook.com/metablocktechnologies"
                        target="blank"
                        className="fb"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="blank"
                        className="twitter"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/919358593003"
                        target="blank"

                        className="vimeo"
                      >
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/metablocktechnologies/mycompany/"
                        target="blank"
                        className="skype"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    {/* <li>
                      <a href="" className="rss">
                        <FaRss />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div style={{height:"105px",lineHeight:"1px"}} className="header-bottom">
                <div className="header-wrapper justify-content-lg-end">
                  <div className="mobile-logo d-lg-none">
                    <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                      <img  src="images/logo (123).webp" alt="logo" />
                    </a>
                  </div>
                  <div  className="menu-area">
                    <ul  className="menu">
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/")}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/About")}
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/Tournament")}
                        >
                          Tournament
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/AllGames")}
                        >
                          All Games
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/Contact")}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>

                    <li className="ResNav">
                        <SwipeableTemporaryDrawer/>
                      </li>
                      <li className="ResNav2">
                        <SwipeableTemporaryDrawer2/>
                      </li>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;