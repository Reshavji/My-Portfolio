<<<<<<< HEAD
import React,{useEffect} from "react";
import Profile from "../../images/Reshavji.gif";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import "./Main.css";
function Main() {
  useEffect(() => {
    const words = ['Frontend Developer.', 'Full Stack Developer.', 'Cyber Security Learner.'];
    const colors = ['#ff9301', '#2E8B57', '#FF6347'];
    const targetId = 'text';
    const target = document.getElementById(targetId);

    if (target) {
      let letterCount = 1;
      let x = 1;
      let waiting = false;

      const interval1 = setInterval(() => {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          setTimeout(() => {
            const usedColor = colors.shift();
            colors.push(usedColor);
            const usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.style.color = colors[0];
            target.style.fontWeight="700";
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);


      // Clean up on component unmount
      return () => {
        clearInterval(interval1);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
    <div className="header">
       <div className="number"><div className="icon"><PhoneAndroidOutlinedIcon /></div><span><a href="tel:+91-9837758354">+91-9837758354</a></span></div>
       <div className="email"><div className="icon"><EmailOutlinedIcon  /></div><span><a href="mailto:reshavkumar9837@gmail.com">reshavkumar9837@gmail.com</a></span></div>
    </div>
    <div className="main">
      <div className="main-text">
      <div class="star">★</div>
        <h3>Hello, My Name is</h3>
        <h1 id="name">Reshav Kumar</h1>
        <div className="developer">I am a<div id="text"></div></div>
        <p className="sub-title">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <button className="main-btn" >Download CV</button>
      </div>
      <div className="profile">
        <img id="profile" src={Profile} alt="Profile" />
      </div>
    </div>
   
    </div>
  );
}

export default Main;
=======
import React,{useEffect} from "react";
import Profile from "../../images/Reshavji.gif";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import "./Main.css";
function Main() {
  useEffect(() => {
    const words = ['Frontend Developer.', 'Full Stack Developer.', 'Cyber Security Learner.'];
    const colors = ['#ff9301', '#2E8B57', '#FF6347'];
    const targetId = 'text';
    const target = document.getElementById(targetId);

    if (target) {
      let letterCount = 1;
      let x = 1;
      let waiting = false;

      const interval1 = setInterval(() => {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          setTimeout(() => {
            const usedColor = colors.shift();
            colors.push(usedColor);
            const usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.style.color = colors[0];
            target.style.fontWeight="700";
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);


      // Clean up on component unmount
      return () => {
        clearInterval(interval1);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
    <div className="header">
       <div className="number"><div className="icon"><PhoneAndroidOutlinedIcon /></div><span><a href="tel:+91-9837758354">+91-9837758354</a></span></div>
       <div className="email"><div className="icon"><EmailOutlinedIcon  /></div><span><a href="mailto:reshavkumar9837@gmail.com">reshavkumar9837@gmail.com</a></span></div>
    </div>
    <div className="main">
      <div className="main-text">
      <div class="star">★</div>
        <h3>Hello, My Name is</h3>
        <h1 id="name">Reshav Kumar</h1>
        <div className="developer">I am a<div id="text"></div></div>
        <p className="sub-title">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <button className="main-btn" >Download CV</button>
      </div>
      <div className="profile">
        <img id="profile" src={Profile} alt="Profile" />
      </div>
    </div>
   
    </div>
  );
}

export default Main;
>>>>>>> 705bb3426b111000a2987d5e57e92b63fbe113f8
