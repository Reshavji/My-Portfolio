import React from "react";
import "./Experience.css";
function Experience() {
  return (
    <div classname="experience">
      <div className="ex-data">
        <h2 className="first-tag">Experience</h2>
      </div>
      <div className="ex-details">
        <div className="ex-box">
          <div className="ex-head">
            <div className="ex-cp-tag">
              <p className="ex-tag">Computer Operator</p>
              <span>From 08/2018 To 09/2022</span>
              <button className="ex-btn">Full Time</button>
            </div>

            <div className="ex-cp">
              <p className="ex-cp-name">Star Book Distribution Pvt. Ltd.</p>
              <p className="ex-work">
                Email Handling, Product Listing on E-Commerce, E-xcel, Managing Product store data.
                Provided exceptional customer service by managing inbound calls.
              </p>
            </div>
          </div>
        </div>
        <div className="ex-box">
          <div className="ex-head">
            <div className="ex-head">
              <div className="ex-cp-tag">
                <p className="ex-tag">Cyber Security Trinee</p>
                <span>From 06/2017 To 04/2018</span>
                <button className="ex-btn">Part Time</button>
              </div>

              <div className="ex-cp">
                <p className="ex-cp-name">Lucideus Pvt. Ltd.</p>
                <p className="ex-work">
                  I learned about the various types of cyber threats, such as
                  malware, phishing attacks, and social engineering techniques,
                  and how these threats can compromise the security of Computers
                  and Networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
