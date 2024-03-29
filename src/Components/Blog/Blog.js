import React from "react";
import "./Blog.css";
import Movieimage from '../../images/Movie app.gif';
import Cybrary from "../../images/Cybrary.gif";
import Whatsapp from "../../images/Whatsapp.gif";
import Applemusic from "../../images/Applemusic.gif";
import Spacex from "../../images/Spacex.gif";
import Hotel from "../../images/Hotel.gif";
const Blog = () => {
  return (
    <div className="blog">
    
      <div className="project">
      <div className="blog-data">
        <h2 className="first-tag">Projects</h2>
        <div className="project-container">
        <a href="https://rji-apple-music.vercel.app/Listen" target="no_follow"> 
             <div className="project-box">
           
                <div className="project-img">
                    <img id="movie-img" src={Applemusic} alt="Movie" />
                    </div>
                    <h3 className="project-title">Apple Music</h3>
             </div>
             </a>
        <a href="https://whatsappv1.vercel.app/" target="no_follow"> 
             <div className="project-box">
           
                <div className="project-img">
                    <img id="movie-img" src={Whatsapp} alt="Movie" />
                    </div>
                    <h3 className="project-title" >WhatsApp</h3>
             </div>
             </a>
             <a href="https://space-x-chi-brown.vercel.app/home" target="no_follow"> 
             <div className="project-box">
           
                <div className="project-img">
                    <img id="movie-img" src={Spacex} alt="Movie" />
                    </div>
                    <h3 className="project-title" >SpaceX</h3>
             </div>
             </a>
        <a href="https://cybria-sandy.vercel.app/" target="no_follow"> 
             <div className="project-box">
           
                <div className="project-img">
                    <img id="movie-img" src={Cybrary} alt="Movie" />
                    </div>
                    <h3 className="project-title" >Cybria</h3>
             </div>
             </a>
             <a href="https://spartans-ten.vercel.app/" target="no_follow"> 
             <div className="project-box">
           
                <div className="project-img">
                    <img id="movie-img" src={Hotel} alt="Movie" />
                    </div>
                    <h3 className="project-title" >Spartan Hotel</h3>
             </div>
             </a>
             
        <a href="https://movie-dec.vercel.app/" target="no_follow">
            <div className="project-box">
                   <div className="project-img">
                    <img id="movie-img" src={Movieimage} alt="Movie" />
                    </div>
                    <h3 className="project-title" >Movie Deck</h3>
             </div>
             </a>
            
        </div>
      </div>
      </div>
      <div className="blog-data">
        <h2 className="first-tag">Latest Blog</h2>
        <div className="blog-container">
          <div className="blog-item">
            <div className="blog-img"></div>
            <a href="https://rjihack.blogspot.com" target="no-follow"> <h2>Rjitech</h2></a>
          </div>         
          <div className="blog-item">
            <div className="blog-img2"></div>
            <a href="https://rjihack.blogspot.com" target="no-follow"> <h2>Rjihack</h2></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
