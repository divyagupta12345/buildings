import React,{useState} from 'react'
import Location from "./Location";
import "./Location.css";
import 'font-awesome/css/font-awesome.min.css';
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
    <div className="padding innerWidth flexCenter">
    {/* LEFT SIDE*/}
     <div className=" flexColStart hero-left">
        <div className="hero-title">
          <div className="orange-circle"/>
          <h1>
            Discover<br/>
            Most Suitable<br/>
            Property
          </h1>
        </div>
        <div classsName=" flexColStart hero-des">
          <span className="secondaryText">Find a variety of property that suits you  very easily</span><br/>
          <span className="secondaryText">Forgot all difficulties in finding a residence for you</span>
        </div>
        <div className=" flexCenter search-bar">
           <Location/>
           <input type="text" />
           <button className="button">search</button>
          
          </div>
          <div className="flexCenter stats">
            <div classNmae="flexcolstat ">
              <span>
              <CountUp start={8800}  end={9000} duration={4}/>
              <span className="orangeText">+</span>
              </span>
               <br/>
                <span className="secondaryText">Premium Product</span>
              
              
            </div>
          
          
            <div classNmae="flexcolstat ">
              <span>
              <CountUp start={1800}  end={2000} duration={4}/>
            <span className="orangeText">+</span>
              </span>
               <br/>
                <span className="secondaryText">Happy Costumer</span>
              
              
            </div>
      
          
             <div className='flexcolstat '>
              <span>
              <CountUp start={25}  end={30} duration={4}/>
               <span className="orangeText">+</span>
              </span>
               <br/>
                <span className="secondaryText">Award Winning</span>
              
               </div>
            
          </div>
     </div>
  
     <div className="flexCenter hero-right">
        <div className="image-container">
    
            <img src= "https://tse1.mm.bing.net/th?id=OIP.KcQEjVeWZfcG8NzPAh02WwHaFj&pid=Api&P=0&h=180" alt="img"/>
        </div>
     </div>
    </div>

    </section>
  )
}

export default Hero;