import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-conatiner">

    {/* left side */}

    <div className="flexColStart f-left">
       <img src=" https://tse1.mm.bing.net/th?id=OIP.iB481pASZ6Req5V_nfi-jQHaGo&pid=Api&P=0&h=180"   alt="logo " width={120}/>
    </div><br/>
       <span className="secondaryText">                                                                                           
        Our vision is to make all people <br/>
        the best place to live for them.
       </span>
    </div>
      {/* right side */}

      <div className="flexColStart f-right">
        <span className="primaryText">Information</span>
        <span className='secondaryText'>145 Newyork,FL,4571,USA</span>

            <div className='flexCenter f-menu'>
            <span>Property</span>
            <span>services</span>
            <span>Product</span>
            <span>About Us</span>

            </div>

        </div>
    
          

       

    </section>
  )
}

export default Footer