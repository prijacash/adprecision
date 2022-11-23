import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


// pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Quality from './components/pages/Quality'
import Capabilities from './components/pages/Capabilities'
import Contact from './components/pages/Contact';


// partials
import NavBar from './components/partials/NavBar'
import Footer from './components/partials/Footer'


function App() {

  const [theme, setTheme] = useState('light');
  const [logo, setLogo] = useState('https://media.discordapp.net/attachments/1039613871217983488/1042925913874120774/telegram-cloud-photo-size-1-5145468334001728232-x.jpg');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setLogo('https://media.discordapp.net/attachments/1039613871217983488/1042925887747797064/telegram-cloud-photo-size-1-5145468334001728231-x.jpg')
    } else {
      setTheme('light');
      setLogo('https://media.discordapp.net/attachments/1039613871217983488/1042925913874120774/telegram-cloud-photo-size-1-5145468334001728232-x.jpg')
    }
  };




  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <div className={`${theme} App flex flex-col min-h-screen`}>
      <Router>
        <header>
          <NavBar theme={theme} toggleTheme={toggleTheme}/>
        </header>
        <div>
          <p className='text-3xl italic font-semibold mt-4 mb-4'>A & D PRECISION MFG. INC.</p>
        </div>

        <div className='flex justify-center'>
          <img src={logo} className='logo'/>
        </div>

        <div className='mt-4'>
          <Routes >
            <Route 
              path='/'
              element={<Home />}          
            />

            <Route 
              path='/about'
              element={<About />}          
            />

            <Route 
              path='/capabilities'
              element={<Capabilities />}          
            />

            <Route 
              path='/quality'
              element={<Quality />}          
            />

            <Route
              path='/contact'
              element={<Contact />}
            />
          </Routes>
        </div>
      </Router>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

