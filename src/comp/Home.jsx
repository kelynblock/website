import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import {
  AiOutlineDoubleRight,
  AiOutlineCamera,
  AiOutlineDribbble,
  AiOutlineTwitter,
} from "react-icons/ai";
import { PiPencilCircleBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="top_container">
          <div className="left_container">
            <div className="img_container">
              <div className="img_box">
                <img src="../img/me.jpg" alt="me"></img>
              </div>
            </div>
            <Link to="/about" className="link">
              <div className="detail_container">
                <h4>a React Developer</h4>
                <h3>Kelyn Block</h3>
                <p>I am a Indianapolis -based React Developer </p>
                <div className="icon">
                  <AiOutlineDoubleRight />
                </div>
              </div>
            </Link>
          </div>
          <div className="right_container">
            <div className="contant">
              <div className="top_box">
                <p>latest works and featured</p>
              </div>
              <div className="bottom_box">
                <div className="box">
                  <div className="img_box">
                    <img src="img/sign.png" alt="sign"></img>
                  </div>
                  <Link to="/about" className="link">
                    <div className="deatil">
                      <div className="info">
                        <p>more about me</p>
                        <h3>credentials</h3>
                      </div>
                      <div className="icon">
                        <AiOutlineDoubleRight />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="box">
                  <div className="img_box">
                    <img src="img/my-works.png" alt="work"></img>
                  </div>
                  <Link to="/work" className="link">
                    <div className="deatil">
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
        </div>
        <div className="mid_container">
          <div className="contant">
            <div className="box">
              <div className="img_box">
                <img src="img/gfonts.png" alt="fonts"></img>
              </div>
              <Link to="/blog" className="link">
                <div className="detail">
                  <div className="info">
                    <p>blog</p>
                    <h3>fonts</h3>
                  </div>
                  <div className="icon">
                    <AiOutlineDoubleRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className="box2">
              <div className="img_box">
                <div className="img_container">
                  <AiOutlineCamera />
                  <PiPencilCircleBold />
                  <FaReact />
                  <BiCodeAlt />
                </div>
              </div>
              <Link to="/services" className="link">
                <div className="detail">
                  <div className="info">
                    <p>specialiazation</p>
                    <h3>services offering</h3>
                  </div>
                  <div className="icon">
                    <AiOutlineDoubleRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className="box3">
              <div className="img_box">
                <div className="img_container">
                  <div className="img">
                    <AiOutlineDribbble />
                  </div>
                  <div className="img">
                    <AiOutlineTwitter />
                  </div>
                </div>
              </div>
              <Link to="/contact" className="link">
                <div className="detail">
                  <div className="info">
                    <p>stay with me</p>
                    <h3>profiles</h3>
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
    </>
  );
};

export default Home;
