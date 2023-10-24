

import rect from "react";
import "./Contact.css";
 import { MdCall } from "react-icons/md";
  import { HiChatBubbleBottomCenter} from "react-icons/hi2";
  import { IconName } from "react-icons/bs";
  import {BsFillChatLeftDotsFill} from "react-icons/bs";

  const Contact = () => {
    return(
   <section className="c-wrapper">
  <div className="paddings innerwidth  c-container">
      {/* left side */}
      <div className=" flexColStart c-left">
         <span className="orangeText">Our Contact</span>
         <span className="primaryText">We always ready to help you  by provinding the best service. </span>
         <span className="secondaryText">Believe a good place to live can make your life better.</span>
         
  
         <div className="flexColStart contactModes">
           {/* first row */}
           <div className="flexColStart row">
  
              <div className="fleColCenter mode">
                 <div className="flexStart" >
                  <div className=" flexCenter icon">
                      <MdCall size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primartText">Call</span>
                    <span className="secondaryText">021 123 145 123</span>
                  </div>
                 </div>
                 <div className="flexCenter button">Call Now</div>
              </div>
              
            {/* second mode */}
            <div className="fleColCenter mode">
                 <div className="flexStart" >
                  <div className=" flexCenter icon">
                      <BsFillChatLeftDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primartText">Chat</span>
                    <span className="secondaryText">021 123 145 123</span>
                  </div>
                   </div>
                 <div className="flexCenter button">Chat Now</div>
                  </div>
             
             {/* Second row */}
             <div className="fleColCenter mode">
                 <div className="flexStart" >
                  <div className=" flexCenter icon">
                      <HiChatBubbleBottomCenter size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primartText">Message</span>
                    <span className="secondaryText">021 123 145 123</span>
                  </div>
                 </div>
                 <div className="flexCenter button">Message Now</div>
              </div>
  
             
  
  
  
           </div>
  
         </div>
    
      </div>
      </div>
  
  </section>
  )
  }
  
  export default Contact;
           
           
       