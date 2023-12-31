import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import "../App.css"



import { CgFileDocument } from "react-icons/cg";
import { hover } from "@testing-library/user-event/dist/hover";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  
  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
       
<p ><a href="/" className="logo"><strong> Inception Health</strong>Labs</a></p>      </div>
      <ul className="navbar-list">
        
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/team">Team</Link>
        </li>
        <li className="navbar-item">
          <Link to="/publication">Publications</Link>
        </li>
        <li className="navbar-item">
          <Link to="/initiatives">Initiatives</Link>
        </li>
        <li className="navbar-item">
          <Link to="/learning">Learning</Link>
        </li>
      
      </ul>
        
    </nav>
 
  );
}

export default NavBar;
