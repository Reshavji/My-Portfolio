<<<<<<< HEAD
import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-data">
        <div className="contact-box1">
          <h1>Get in touch</h1>
          <p>
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
          <div className="contact-icon">
            <div className="address-box">
                <div className="icon">
                <RoomIcon fontSize="large" />
              </div>
              <p>Delhi</p>
            </div>
            <div className="address-box">
                <div className="icon">
                <EmailOutlinedIcon fontSize="large" />
              </div>
              <a href="mailto:reshavkumar9837@gmail.com">reshavkumar9837@gmail.com</a>
            </div>
            <div className="address-box">
                <div className="icon">
                <PhoneAndroidOutlinedIcon fontSize="large" />
              </div>
              <a href="tel:+91-9837758354">+91-9837758354</a>
            </div>
          </div>
        </div>
        <div className="contact-box2">
          <h2>Say Something</h2>
          <div className="contact-form">
            <div className="first-input">
              <input
                type="text"
                placeholder="Full name"
                minlength="5"
                maxlength="15"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                minlength="5"
                maxlength="15"
                required
              />
            </div>
            <input type="text" placeholder="Subject" required></input>
            <textarea placeholder="Type comment" required></textarea>
            <button type="submit" class="contact-btn">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="map-box"></div>
      <footer>
        <div className="footer">
          <div className="footer-icons">
            <FacebookIcon fontSize="small" />
            <TwitterIcon fontSize="small" />
            <LinkedInIcon fontSize="small" />
            <InstagramIcon fontSize="small" />
            <GitHubIcon fontSize="small" />
          </div>
          <div className="copyright">© 2023 copyright all right reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
=======
import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-data">
        <div className="contact-box1">
          <h1>Get in touch</h1>
          <p>
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
          <div className="contact-icon">
            <div className="address-box">
                <div className="icon">
                <RoomIcon fontSize="large" />
              </div>
              <p>Delhi</p>
            </div>
            <div className="address-box">
                <div className="icon">
                <EmailOutlinedIcon fontSize="large" />
              </div>
              <a href="mailto:reshavkumar9837@gmail.com">reshavkumar9837@gmail.com</a>
            </div>
            <div className="address-box">
                <div className="icon">
                <PhoneAndroidOutlinedIcon fontSize="large" />
              </div>
              <a href="tel:+91-9837758354">+91-9837758354</a>
            </div>
          </div>
        </div>
        <div className="contact-box2">
          <h2>Say Something</h2>
          <div className="contact-form">
            <div className="first-input">
              <input
                type="text"
                placeholder="Full name"
                minlength="5"
                maxlength="15"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                minlength="5"
                maxlength="15"
                required
              />
            </div>
            <input type="text" placeholder="Subject" required></input>
            <textarea placeholder="Type comment" required></textarea>
            <button type="submit" class="contact-btn">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="map-box"></div>
      <footer>
        <div className="footer">
          <div className="footer-icons">
            <FacebookIcon fontSize="small" />
            <TwitterIcon fontSize="small" />
            <LinkedInIcon fontSize="small" />
            <InstagramIcon fontSize="small" />
            <GitHubIcon fontSize="small" />
          </div>
          <div className="copyright">© 2023 copyright all right reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
>>>>>>> 705bb3426b111000a2987d5e57e92b63fbe113f8
