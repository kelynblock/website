import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import "./contact.css";
const Contact = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let Name, Value;
  const input = (e) => {
    Name = e.target.name;
    Value = e.target.value;
    setData({ ...data, [Name]: Value });
  };
  const senddata = async (e) => {
    const { Name, Email, Subject, Message } = data;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };

    const send = await fetch(
      "https://react-portfolio-c51e0-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(send);
    if (send) {
      alert("Message Sent !");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="left_box">
            <h3>contact info</h3>
            <div className="info">
              <div className="box">
                <div className="icon">
                  <HiOutlineMail />
                </div>
                <div className="detail">
                  <h4>mail us</h4>
                  <p>kelynblock@yahoo.com</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <BsTelephoneInbound />
                </div>
                <div className="detail">
                  <h4>contact us</h4>
                  <p>317-762-4202</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <FiMapPin />
                </div>
                <div className="detail">
                  <h4>location</h4>
                  <p>Plainfield, IN</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right_box">
            <img src="img/icon2.png" alt="icon"></img>
            <h2>
              Let's work <span>together</span>
            </h2>
            <form method="POST" className="form">
              <input
                type="text"
                name="Name"
                value={data.Name}
                placeholder="Name*"
                onChange={input}
              ></input>
              <input
                type="text"
                name="Email"
                value={data.Email}
                placeholder="E-mail*"
                onChange={input}
              ></input>
              <input
                type="text"
                name="Subject"
                value={data.Subject}
                placeholder="Subject*"
                onChange={input}
              ></input>
              <textarea
                placeholder="Message*"
                name="Message"
                value={data.Message}
                onChange={input}
              ></textarea>
              <button type="submit" onClick={senddata}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
