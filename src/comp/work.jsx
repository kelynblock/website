import React from "react";
import "./work.css";

const work = () => {
  return (
    <>
      {" "}
      <div className="work">
        <div className="container">
          <div className="left">
            <div className="contant">
              <div className="box">
                <div className="img_box">
                  <img src="../img/project1.jpeg" alt="project"></img>
                </div>
                <p>web design </p>
                <h3>dynamic</h3>
              </div>
              <div className="box">
                <div className="img_box">
                  <img src="../img/project2.jpeg" alt="project"></img>
                </div>
                <p>photography</p>
                <h3>disel h1</h3>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="heading">
              <img src="../img/star-2.png" alt="star"></img>
              <h2>all projects</h2>
              <img src="../img/star-2.png" alt="star"></img>
            </div>
            <div className="contant">
              <div className="box">
                <div className="img_box">
                  <img src="../img/project3.jpeg"></img>
                </div>
                <p>mobile designing</p>
                <h3>seven studio</h3>
              </div>
              <div className="box">
                <div className="img_box">
                  <img src="../img/project4.jpeg"></img>
                </div>
                <p>mobile designing</p>
                <h3>seven studio</h3>
              </div>
              <div className="box">
                <div className="img_box">
                  <img src="../img/project5.jpeg"></img>
                </div>
                <p>mobile designing</p>
                <h3>seven studio</h3>
              </div>{" "}
              <div className="box">
                <div className="img_box">
                  <img src="../img/project6.jpeg"></img>
                </div>
                <p>mobile designing</p>
                <h3>seven studio</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default work;
