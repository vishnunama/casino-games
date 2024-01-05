import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
const Contact = () =>
{
  const navigate = useNavigate()
  return (
   <div>
  <section className="pageheader-section" style={{backgroundImage: 'url(/images/backgroundimage.webp)'}}>
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
  </section> 
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
                  <div className="main-popup-form-inputs">
                    <input type="text" placeholder="First name" />
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
  {/* <div className="contact-section">
    <div className="contact-top padding-top padding-bottom bg-attachment" style={{backgroundImage: 'url(assets/images/video/bg.jpg)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="contact-form-wrapper text-center">
              <div className="section-header">
                <h2>Fill The Form Below So We Can Get To Know You And Your Needs Better.</h2>
              </div>
              <form className="contact-form" action="contact.php" id="contact-form" method="POST">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" id="name" name="name" required="required" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Your Email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Phone" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" id="subject" name="subject" required />
                </div>
                <div className="form-group w-100">
                  <textarea name="message" rows={8} id="message" placeholder="Your Message" required defaultValue={""} />
                </div>
                <div className="form-group w-100 text-center">
                  <button className="default-button" type="submit"><span>Send our Message</span></button>
                </div>
              </form>
              <p className="form-message" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-bottom">
      <div className="contac-bottom">
        <div className="row justify-content-center g-0">
          <div className="col-12">
            <div className="location-map">
              <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.229026386336!2d75.76772217489444!3d26.896225660799896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59e52d6cb5d%3A0x13f14d327ae6a92!2sShyam%20nagar%20metro%20station!5e0!3m2!1sen!2sin!4v1702556120245!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
</div>

  )
}

export default Contact
