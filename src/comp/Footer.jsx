import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top_container">
          <div className="contant">
            <div className="left_box">
              <div className="box">
                <div className="detail">
                  <h3>04</h3>
                  <p>year experience</p>
                </div>
              </div>
              <div className="box">
                <div className="detail">
                  <h3>+125</h3>
                  <p>Cliente worlwide</p>
                </div>
              </div>
              <div className="box">
                <div className="detail">
                  <h3>+230</h3>
                  <p>total projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
