import React from "react";
import "./home1.css";
import { Link } from "react-router-dom";
import {
  AiOutlineDoubleRight,
  AiOutlineCamera,
  AiOutlineDribble,
  AiOutlinkeTwitter,
} from "react-icons/ai";
import { PiPencilCircleBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import Nav from "./Nav";

const Home1 = () => {
  return (
    <>
      <Nav />
      <div className="home">
        <div className="top_container">
          <div className="left_container">
            <div className="im_container">
              <div className="img_box">
                <img src="img/me.png" alt="me"></img>
              </div>
            </div>
          </div>
          <Link to="/about" className="link">
            <div className="deatail_container">
              <h4>a web designer</h4>
              <h3> Kelyn Block</h3>
              <p>I'm an Indianapolis-based web developer</p>
              <div className="icon">
                <AiOutlineDoubleRight />
              </div>
            </div>
          </Link>
        </div>
        <div className="right_container">
          <div className="content">
            <div className="top_box">
              <p>latest works and features</p>
            </div>
            <div className="bottom_box">
              <div className="box">
                <div className="img_box">
                  <img className="img/my-works.png" alt="work"></img>
                </div>
                <Link to="/about" className="link">
                  <div className="detail">
                    <div className="info">
                      <p>showcase</p>
                      <h3>projects</h3>
                    </div>
                    <div className="icon">
                      <AiOutlineDoubleRight />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mid_container">
          <div className="content">
            <div className="box">
              <div className="img_box">
                <AiOutlineCamera />
                <PiPencilCircleBold />
                <FaReact />
                <BiCodeAlt />
              </div>
            </div>
            <div className="detail">
              <div className="info">
                <p>spcecialization</p>
                <h3>services offering</h3>
              </div>
              <div className="icon">
                <AiOutlineDoubleRight />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <AiOutlineDribble />
              <AiOutlinkeTwitter />
            </div>
            <div className="detail">
              <div className="info">
                <p>blog</p>
                <h3>fonts</h3>
              </div>
              <div className="icon">
                <AiOutlineDoubleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1;
