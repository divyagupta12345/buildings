 import Header from "./Header";
import Hero from "./Hero";
import "./Header.css"
import "./Hero.css"
import "./App1.css"
import Company from "./Company";
import Residence from "./Residence";
  import SwiperSlide from "./SwiperSlide";
    import Contact from "./Contact";
   import Getstarted from "./Getstarted";
    import Footer from "./Footer";
    
    function App() {
  return (
     <>
    <div className="App">
    <div>
    <div className="white-gradient"/>
    
    <Header/>
    <Hero/>
    </div>
    <Company/>
    <Residence/>
     <SwiperSlide/> 
      <Contact/>
        <Getstarted/>
        <Footer/>
        
        </div>
      </>
      );
      }
      export default App;