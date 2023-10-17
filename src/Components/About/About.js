import React from "react";
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
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people new Experiences. </p>
            <p className="third-title">I'm a Freelancer Front-end Developer
            with over 3 years of experience. I'm from San Francisco. I code and
            create web elements for amazing people around the world. I like work
            with new people. New people new Experiences.</p>
       <div className="about-details">
       <div class="column">
      <table>
        <tr>
          <th>Name:-</th>
          <td>Reshav Kumar</td>
        </tr>
        <tr>
          <th>Birthday:-</th>
          <td>4th April 1994</td>
        </tr>
        <tr>
          <th>Age:-</th>
          <td>26 years</td>
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
          <th>Phone:-</th>
          <td>(+91) 9837758354</td>
        </tr>
        <tr>
          <th>Email:-</th>
          <td>reshavkumar9837@gmail.com</td>
        </tr>
        <tr>
          <th>Skype:-</th>
          <td>nairob.40</td>
        </tr>
        <tr>
          <th>Freelance:-</th>
          <td>Available</td>
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
