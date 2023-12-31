import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import "../../style.css"
import Typewriting from "./Typewriting"
import img from "../../Assets/Ash in THE wONDERLAND  cover.jpg"
import AudioComponent from "./audio"
import BookTable from "./BookTable"
import ScrollToTopButton from "./Scroll"
function  Writing() {
  return (
    
    <div className="typewriting">
      <Typewriting/> 
       
      <div className="Ash-Idea">
        
        <div>
        <p className="pg">
In a distant galaxy, on the enigmatic planet Batalia, a grieving man named <span className="Ash">Ash</span>  struggles to cope with the loss of his wife. Determined to fulfill his late wife's dream of caring for their daughter, he decides to leave the organization he once belonged to. Just when <span className="Ash">Ash</span>  believes he has found solace in a quiet life, unexpected events shatter his world anew.

Batalia, with its unique laws of nature, faces a grave threat that can only be averted with <span className="Ash">Ash</span>'s expertise. Reluctantly, he embarks on a perilous journey with his daughter, only to find himself separated from her, forced to navigate the challenges alone.

            Amidst his quest, <span className="Ash">Ash</span>  encounters an angel, a celestial being of immense power, who offers him assistance. However, the aid comes at a cost. To save Batalia and return to his daughter, Ash must sacrifice something incredibly precious, testing the depths of his love, determination, and the lengths he's willing to go to protect both his family and an entire world.
</p>
        </div>
        
        <div>
    
          <img className="myAvtarsrc" src={img} style={{ height: '750px', width: '460px' }}></img>
        </div>
        
      </div>
      <div style={{ display: 'none'}}>
        <AudioComponent />
        </div>
      <div style={{ margin: "-12px" }}><BookTable /></div>
      <ScrollToTopButton/>
      </div>
      
    
  );
}

export default Writing;
