import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
const Contact = () =>
{
  const navigate = useNavigate()
  return (
   <div>
  {/* <section className="pageheader-section" style={{backgroundImage: 'url(/images/backgroundimage.webp)'}}>
    <div className="container">
      <div  className="section-wrapper text-center text-uppercase">
        <h2   className="pageheader-title">Contact Us</h2>
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
            <li className="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </nav>
      </div>
    </div>
  </section>  */}
  <div>
     <div className="main-form-popup">
              {/* <div className="img-div">
                <img
                  src="/images/WhatsApp Image 2023-12-27 at 12.23.04_cfc1aa03.webp"
                  alt=""
                />
              </div> */}
              <div className='container-inner'>
                <div>
              <div style={{display:"flex"}} className="form-div-popup-container">
                
                <div className="main-popup-form">
                  <div  className="main-popup-form-inputs">
                    <input  type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name " />
                  </div>
                  <div className="main-popup-form-inputs1">
                    <input type="text" placeholder="Enter your number" />
                    <input type="text" placeholder="Enter your  Gmail" />
                  </div>
                  
                  <div className="main-popup-form-textera">
                    <textarea
                      name=""
                      id=""
                      cols="42"
                      rows="7"
                      placeholder="Enter your subject"
                    ></textarea>
                  </div>
                  
                  <div className="form-button-div">
                    <button>Submit</button>
                  </div>
                </div>
                
              
              <div className='image-inner-none'>
                <img style={{width:"500px",marginLeft:"20%"}} src="/images/Inside a wrecked spaceship is a rave with children (1).webp" alt="" />
              </div>
              </div>
              </div>
              </div>
              
            </div>
    </div> 
  <div className="info-section padding-top padding-bottom">
    <div className="container">
      <div className="section-header">
        <h2>We're Always Eager To Hear From You!</h2>
      </div>
      <div className="section-wrapper">
        <div className="row justify-content-center g-4">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="contact-item text-center">
              <div className="contact-thumb mb-4">
                <a href="https://www.google.com/maps/place/Tamanna+Apartment/@26.8949515,75.7489926,15.17z/data=!4m6!3m5!1s0x396db566ba42c1ed:0xce00513b5fd69b04!8m2!3d26.8942671!4d75.7655693!16s%2Fg%2F11h39zw_sb?entry=ttu" target='blank'>
                <img src="/images/03_1.webp" alt="contact-thumb" />
                </a>
              </div>
              <div className="contact-content">
                <h6 className="title">Office Address</h6>
                <p>Address : Jaipur Rajashtan India</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="contact-item text-center">
              <div className="contact-thumb mb-4">
                <a href="tel:+91 8107196932" target='blank'>
                <img src="/images/phoneicon.webp" alt="contact-thumb" />
                </a>
              </div>
              <div className="contact-content">
                <h6 className="title">Phone number</h6>
                <p>+91 98282 84421</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="contact-item text-center">
              <div className="contact-thumb mb-4">
                <a href="https://mail.google.com/mail/u/0/#inbox" target='blank'>
                <img src="/images/02_1.webp" alt="contact-thumb" />
                </a>
              </div>
              <div className="contact-content">
                <h6 className="title">Send Email</h6>
                <p>metablock@gmil.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact
