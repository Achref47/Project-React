import React from "react";
import "./Home.css"

function Home() {
  return (
    <div className="bodyy">
      <div>
        <h1> We operate at the intersection of <span className="pp">HealthResearch</span> and <span className="pp">Computer Science(s)</span> to improve Healthcare</h1>
        <br>
        </br>
        <p className="rr">We are bringing an outside in approach to change healthcare to be more person-centered, seamless, safe, and enjoyable to experience.</p>
        <button href="/projects">
Read about our current projects
        </button>
      </div>
      <div className="tab">
<h2 className="h22">Recent Publications
</h2>
        <div className="tabb">
          <div>
            <hr></hr>
            <p> <a href="" className="ay">Addressing depression and behavioral health needs through a digital program at scale </a>Published by</p>
            <p><a href="" className="ay">Zak Sharif-Sidi</a>, <a href="" className="ay">Bill Wong</a>, <a href="" className="ay">Christine Shen</a>, <a href="" className="ay">Melek Somai</a>, <a href="" className="ay">Bradley Crotty</a> in Healthcare on June, 2021</p>
          <br></br><hr></hr></div>
          <div>
            <hr></hr>
            <p><a href="https://link.springer.com/article/10.1007/s11606-020-06583-7" className="aa" >Impact of Pre-visit Contextual Data Collection on Patient-Physician Communication and Patient Activation: a Randomized Trial</a> </p>
            <p>Published by <a href="" className="ay">Jeana Holt,</a><a href="" className="ay"> Rachel Cusatis,</a> <a href="" className="ay">Onur Asan,</a> <a href="" className="ay">Melek Somai</a>,<a href="" className="ay">Bradley Crotty </a> in Journal of General Internal Medicine on February, 2021</p>
          <hr></hr></div>
          <div>
            <hr></hr>
            <p><a href="" className="ay" >Digital Platform for Screening Healthcare Professionals for COVID-19 </a>Published by Melek Somai in Medium on January, 2021
            
            </p>
          <br></br><br></br><br></br><br></br><br></br><hr></hr></div>
          
          <h5><a href="/publications" className="aa"> Check our publications</a> </h5>
        </div> 
</div>
    </div>
  );
}

export default Home;
