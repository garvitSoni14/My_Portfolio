import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import { NavBar } from './components/NavBar/NavBar';
import {Banner} from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2300);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
   <>
    {showSplash && (
      <div className="splash-screen" aria-label="Loading Garvit Soni portfolio">
        <div className="splash-mark">GS</div>
        <p>Garvit Soni</p>
      </div>
    )}
    <div className={`app-container ${showSplash ? "app-loading" : "app-ready"}`}>
      <NavBar/>
      <Banner/>
      <Footer/>
    </div>
   </>
  )
}

export default App;
