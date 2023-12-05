import React from "react";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import InstagramIcon from "@material-ui/icons/Instagram";
import "./About.css";
import Profile from "../../images/Reshavji.gif";
function About() {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="item">
          <div className="about-profile">
            <img id="about-profile" src={Profile} alt="Profile" />
          </div>
          <h1>Reshav Kumar</h1>
          <div class="txt" id="txt">
            <b>F</b>
            <b>u</b>
            <b>l</b>
            <b>l</b>
            <b>-</b>
            <b>S</b>
            <b>t</b>
            <b>a</b>
            <b>c</b>
            <b>k</b>
            <b id="gap"></b>
            <b>W</b>
            <b>e</b>
            <b>b</b>
            <b id="gap"></b>
            <b>D</b>
            <b>e</b>
            <b>v</b>
            <b>e</b>
            <b>l</b>
            <b>o</b>
            <b>p</b>
            <b>e</b>
            <b>r</b>
          </div>
        </div>

        <div className="about-text">
          <h2 className="first-tag">Biography</h2>
          <p className="second-title">
            I'm a Freelancer Front-end Developer and a Cyber Security Learner. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people new Experiences.{" "}
          </p>
          <p className="third-title">
            I am eagerly seeking a dynamic and challenging opportunity to
            contribute my skills and expertise to an esteemed organization. With
            a relentless thirst for learning and a passion for growth, I aspire
            to broaden my horizons and develop new techniques to enhance both my
            own professional trajectory and the success of the organization.
            Together, I believe we can achieve unprecedented heights of
            excellence and create a lasting impact in our field.
          </p>
          <div className="about-details">
            <div class="column">
              <table>
                <tr>
                  <th>Name:-</th>
                  <td>Reshav Kumar</td>
                </tr>
                <tr>
                  <th>Phone:-</th>
                  <td>
                    <a href="tel:+91-9837758354">+91-9837758354</a>
                  </td>
                </tr>
                <tr>
                  <th>Email:-</th>
                  <td>
                    <a href="mailto:reshavkumar9837@gmail.com">
                      reshavkumar9837@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Address:-</th>
                  <td>Delhi</td>
                </tr>
              </table>
            </div>
            <div class="column">
              <table>
                <tr>
                  <th>Qualification-</th>
                  <td>Graduate</td>
                </tr>
                <tr>
                  <th>Website:-</th>
                  <td>
                    <a href="https://rjitech.blogspot.com">Rjitech</a>
                  </td>
                </tr>
                <tr>
                  <th>Freelance:-</th>
                  <td>Available</td>
                </tr>
                <tr>
                  <th></th>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
