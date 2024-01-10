import React, { useEffect, useState } from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";

const MainHomePage = () => {
  const [counters, setCounters] = useState({
    developers: 0,
    projects: 0,
    expertise: 0,
    countries: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounters((prevCounters) => ({
        ...prevCounters,
        developers: prevCounters.developers < 35 ? prevCounters.developers + 1 : 35,
        projects: prevCounters.projects < 250 ? prevCounters.projects + 1 : 250,
        expertise: prevCounters.expertise < 6 ? prevCounters.expertise + 1 : 6,
        countries: prevCounters.countries < 3 ? prevCounters.countries + 1 : 3,
      }));
    }, 200); // Change the interval (in milliseconds) as needed

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const navigate = useNavigate();

  return (
    <div>
      <section className="counter">
        <div className="container">
          <div style={{ margin: "30px 0px" }}>
            <div style={{ paddingBottom: "20px", paddingTop: "30px" }} className="counter--in">
              <div className="col-lg-5 counter__left">
                <div style={{ marginBottom: "20px" }}>
                  <h2>TODAY YOU CAN WIN UPTO</h2>
                </div>
              </div>
              <div className="responsive-flex" style={{ display: "flex", gap: "30px", maxWidth: "100%" }}>
                <div className="responsive-flex-in" style={{ display: "flex", gap: "30px" }}>
                  <div className="vdoCntLst">
                    <p className="vdoCntLstCount">{counters.developers}</p>
                    <p className="vdoCntLstTlt">Products Developers</p>
                  </div>
                  <div className="vdoCntLst">
                    <p className="vdoCntLstCount">{counters.projects}</p>
                    <p className="vdoCntLstTlt">Projects Delivered</p>
                  </div>
                </div>
                <div className="responsive-flex-in" style={{ display: "flex", gap: "30px" }}>
                  <div className="vdoCntLst">
                    <p className="vdoCntLstCount">{counters.expertise}</p>
                    <p className="vdoCntLstTlt">Years of Expertise</p>
                  </div>
                  <div className="vdoCntLst">
                    <p className="vdoCntLstCount">{counters.countries}</p>
                    <p className="vdoCntLstTlt">Countries Served</p>
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

export default MainHomePage;
