// import React from 'react'
// import React, { useState } from 'react';
// import "./Header.css" 
// import MenuIcon from '@mui/icons-material/Menu';
// import OutsideClickHandler from "react-outside-click-handler";
// const Header = (prev) => {
//   const[menuOpened,setMenuOpened]= useState(false)
  
//   const getmenuStyles=(menuOpened)=>{
//     if(document.documentElement.clientWidth<=800){
//       return {right:menuOpened ?"-100%":"0"};
//   }
//   }
//   return (
//     <section className="h-wrapper">
//     <div className=" flexCenter paddings innerWidth h-container">
//     <div className='logo'>
//         <img src="https://tse2.mm.bing.net/th?id=OIP.fFBENXpx79tzPdtWX4UvaQHaHa&pid=Api&P=0&h=180" alt="logo" width={80} />
//         </div>
//         <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
//         <div className= "flexCenter h-menu" style={getmenuStyles(menuOpened)}>
          
//             <a href="">Residencies  </a>
//             <a href="">Our Value</a>
//             <a href="">Contact Us</a>
//             <a href="">Get Started</a>
//             <button className='button'>
//             <a href="">Contact</a>
//             </button>
//         </div>
//         </OutsideClickHandler>
//         <div className="menu-icon" onClick={{}=setMenuOpened(!menuOpened)}>
//     <MenuIcon size={30} />

//     </div>
//     </div>
  

//     </section>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getmenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened ? "-100%" : "0" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <div className='logo'>
          <img src="https://tse2.mm.bing.net/th?id=OIP.fFBENXpx79tzPdtWX4UvaQHaHa&pid=Api&P=0&h=180" alt="logo" width={80} />
        </div>
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getmenuStyles(menuOpened)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className='button'>
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
          <MenuIcon fontSize="large" />
        </div>
      </div>
    </section>
  );
};

export default Header;
