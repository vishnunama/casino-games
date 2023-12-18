import React, { useState } from "react";
import "./Question.css";
const Question = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const faqData = [
    {
      question: "How do I create a Casino account?",
      answer:
        "To create a Casino account, you can click on the 'Sign Up' or 'Register' button on the website or app. Fill in the required information such as your name, phone number, and password. Follow the on-screen instructions to complete the registration process.",
    },
    {
      question: "Where can I redeem my Casino earnings?",
      answer:
        "You can redeem your Casino earnings in the 'My Account' or 'Wallet' section. Look for options like 'Withdraw' or 'Redeem.' Choose your preferred withdrawal method, enter the necessary details, and follow the prompts to withdraw your earnings.",
    },
    {
      question: "How do I start playing Casino games?",
      answer:
        "To start playing Casino games, log in to your account and navigate to the 'Games' or 'Casino' section. Choose the game you want to play, select your bet amount, and click on 'Play' or 'Start.' Follow the game rules and enjoy the gaming experience.",
    },
    {
      question: "How can I enhance my skills in Casino games?",
      answer:
        "To enhance your skills in Casino games, consider practicing regularly and learning game strategies. Many online platforms offer guides and tutorials for different games. Additionally, participating in free or low-stakes games can help you improve without risking significant amounts.",
    },
    // Add more FAQs as needed
  ];
  // Add more FAQs as needed
  const handleAccordionClick = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <section className="faq padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center flex-row-reverse">
            <div className="col-lg-6 col-12">
              <div className="faq-right-part">
                <div className="faq-thumb">
                  <img 
                    src="/images/casino15-removebg-preview.png"
                    alt="faq-thumb"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="faq-left-part">
                <div className="section-header text-start">
                  <h2>FREQUENTLY ASK QUESTION</h2>
                  <p>
                    At Modeltheme we show only the best websites and portfolios
                    built completely with passion simplicity and creativity !
                  </p>
                </div>
                <div className="section-wrapper">
                  <ul className="accordion">
                    {faqData.map((faq, index) => (
                      <li key={index} className="accordion-item">
                        <div
                          className={`accordion-list ${
                            clickedIndex === index ? "active" : ""
                          }`}
                          onClick={() => handleAccordionClick(index)}
                        >
                          <div className="left">
                            <div className="icon" />
                          </div>
                          <div className="right">
                            <h6>{faq.question}</h6>
                          </div>
                        </div>
                        <div
                          style={{ marginTop: "10px" }}
                          className={` ${
                            clickedIndex === index ? "" : "accordion-answer"
                          }`}
                        >
                          <p className="text-white">{faq.answer}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Question;
