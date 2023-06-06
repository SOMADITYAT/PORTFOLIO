import { useState } from "react";
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode && "dark"}> 
    <Header darkMode={darkMode} setDarkMode={setDarkMode} />

    <main className="bg-white dark:bg-gray-900 dark:text-white"> 

       <Hero/>
       <Services/>
       <Portfolio/>
       <Testimonial/>
       <Contact/>
       <Footer/>
    </main>
    </div>
  );
}
export default App
