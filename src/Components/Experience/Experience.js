import React from "react";
import "./Experience.css";
function Experience() {
  const renderStars = () => {
    const numStars = 54;

    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<b key={i} style={{ animationDelay: `${(i * 0.1) + 0.1}s` }}>★</b>);
    }

    return stars;
  };
  return (
    <div classname="experience">
      <div className="ex-data">
        <h2 className="first-tag">Experience.</h2>
      </div>
      <div className="ex-details">
        <div className="ex-box">
          <div className="ex-head">
            <div className="ex-cp-tag">
            <p className="ex-tag">Computer Operator</p> 
            <span>From 08/2018 To 09/2022</span>
            <button className="ex-btn" >Full Time</button>
            </div>
          
          <div className="ex-cp">
          <p className="ex-cp-name">Star Book Distribution Pvt. Ltd.</p> 
          </div>
          </div>
        </div>
        <div className="ex-box">
          <div className="ex-head">
          <p className="ex-tag"></p>
          </div>
        </div>
      </div>
      <div className="star-container">
        {renderStars()}
      </div>
    </div>
  );
}

export default Experience;
