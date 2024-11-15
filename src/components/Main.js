
import React from "react";
import './index.css'; 
import Header from './Header'; 
import Footer from './Footer'; 
import profile from "./images/profile.png";
import run from "./images/run.jpg" 
import { useNavigate } from 'react-router-dom'; 

export default function Main() {
  const navigate = useNavigate(); 

  const goToAnotherPage = () => {
    navigate('/another'); 
  };
  
  const navigateToWater = () => {
    navigate('/water'); 
  };
  const navigateEx=()=>{
    navigate('/exer');
  }
 const community=()=>{
  navigate('/community');
 }
 const tip=()=>{
  navigate('/tips');
 };
 
  return (
    <div>
      <Header /> 
      <center>
        <div>
          <div className="h">
            <img className="siva" src={run}/>
          </div>
          <div className="j">
            <p className="k">Current Challenges</p>
            <div className="l">
              <p className="m">Calories Calculator</p>
              <p className="m1">Track Your Calories Daily</p>
              <button className="n" onClick={goToAnotherPage}>Calculate</button>
            </div>
            <div className="o">
              <p className="p">Hydration Calculator</p>
              <p className="q">Drink 8 glasses of water every day for a month</p>
              <button onClick={navigateToWater} className="r">Join Now</button>
            </div>
            <div className="s">
              <p className="t">Daily Exercise</p>
              <p className="u">Start Your Exercise Daily</p>
              <button onClick={navigateEx} className="v">Start Now</button>
            </div>
          </div>
          <center>
          <div className="w">
              <p className="x">Fitenss Tips</p>
              <div className="y">
                <p className="z">Tips and Resourcs</p>
                <p className="a1">Live Your Life</p>
                <button onClick={tip} className="b1">Follow the Tips </button>
              </div>
              <div className="c1">
                <p className="d1">Fitness Tips</p>
                <div className="e1">
                  <p className="f1">Tips and Resources</p>
                  <p className="h1">Follow the Tips</p>
                  <button onClick={tip} className="g1"  >Tips</button>
                </div>
              </div>
              <div className="i1">
                <p className="j1" >Community Forum</p>
                <div className="k1">
                  <p className="l1">Join the discussion in our forum and connect with others!</p>
                  <button className="n1" onClick={community}>Join the Forum</button>
                </div>
              </div>
            </div>
          </center>
        </div>
      </center>
      <Footer /> 
    </div>
  );
}
