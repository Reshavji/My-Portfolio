import React from 'react';
import "./Details.css";
function Details() {
    const skills = [
        { name: 'HTML/CSS', percentage: 90 },
        { name: 'Java Script', percentage: 75 },
        { name: 'React JS', percentage: 70 },
        { name: 'Java', percentage: 70 },
    ];
  return (
    <div className='details'>
        <h2 className="first-tag">Education & Skills</h2>
        <div className='details-box'>
            <div className='details-data'>
<div className='details-item'>
    <div className='data-first'>
        <p>2012-2015</p>
    <p className='subject'>B.A. in Economics</p>
    <p>MJPRU (Bareilly)</p>
    </div>
    <div className='data-first'>
        <p>2011-2012</p>
        <p className='subject'>Intermediate (Physics, Chemistry, Math)</p>
    <p>RRSVM (Dhampur)</p>
    </div>
    <div className='data-first'>
        <p>2009-2010</p>
        <p className='subject'>Matriculation (Math)</p>
    <p>RRSVM (Dhampur)</p>
    </div>
    
</div>
            </div>
            <div className='details-data'>
            <div className="progress-container">
            {skills.map((skill, index) => (
                <div className="skill" key={index}>
                    <span className='percent'>{skill.percentage}%</span>
                    
                    <div className='skill-box'>
                    <div className="skill-name">{skill.name}</div>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${skill.percentage}%` }}>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
            </div>
        </div>
    </div>
  )
}

export default Details