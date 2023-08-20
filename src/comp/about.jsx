import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="top_container">
            <div className="left_box">
              <div className="contant">
                <div className="img_box">
                  <img src="../img/me2.jpg" alt="me"></img>
                </div>
              </div>
            </div>
            <div className="right_box">
              <div className="contant">
                <div className="heading">
                  <img src="img/star-2.png" alt="star"></img>
                  <h2>self-summary</h2>
                  <img src="img/star-2.png" alt="star"></img>
                </div>
                <div className="deatil">
                  <img src="img/icon2.png" alt="icon"></img>
                  <div className="info">
                    <h3>Kelyn Block</h3>
                    <p>
                      I am a Indianapolis React developer-based product designer
                      with a focus on web design, illustration, a visual
                      development. I have a diverse range of experience having
                      worked across various fields and industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mid_conatiner">
            <div className="container">
              <div className="exp">
                <h2>experience</h2>
                <div className="box">
                  <p>2023</p>
                  <h3>React Developer</h3>
                </div>
                <div className="box">
                  <p>2023</p>
                  <h3>Front-End Developer</h3>
                </div>
              </div>
              <div className="edu">
                <h2>education</h2>
                <div className="box">
                  <p>1998-2002</p>
                  <h3>Bachelor Degree in Industrial Technology</h3>
                  <p>Indiana State Uinversity</p>
                </div>
                <div className="box">
                  <p>2023</p>
                  <h3>React Development Bootcamp</h3>
                  <p>Per Scholas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
