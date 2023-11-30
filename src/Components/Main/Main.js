import React, { useEffect, useRef } from "react";
import Profile from "../../images/Reshavji.gif";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import "./Main.css";

function Main() {
  const aboutRef = useRef(null); // Ref for the next component (About, for example)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      const componentBottom = document.documentElement.scrollHeight - window.innerHeight;

      // Check if scrolled to the bottom of the component
      if (currentPosition === componentBottom) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the next component
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container" ref={aboutRef}>
      <div className="header">
        <div className="number">
          <div className="icon"><PhoneAndroidOutlinedIcon /></div>
          <span><a href="tel:+91-9837758354">+91-9837758354</a></span>
        </div>
        <div className="email">
          <div className="icon"><EmailOutlinedIcon  /></div>
          <span><a href="mailto:reshavkumar9837@gmail.com">reshavkumar9837@gmail.com</a></span>
        </div>
      </div>
      <div className="main">
        <div className="main-text">
          <div className="star">★</div>
          <h3>Hello, My Name is</h3>
          <h1 id="name">Reshav Kumar</h1>
          <div className="developer">I am a<div id="text"></div></div>
          <p className="sub-title">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <a href="https://github.com/Reshavji/My-Portfolio/raw/main/ReshavResume.pdf" download>
            <button className="main-btn">Download CV</button>
          </a>
        </div>
        <div className="profile">
          <img id="profile" src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Main;
