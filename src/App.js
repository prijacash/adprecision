import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


// pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Certificate from './components/pages/Certificate'
import Engineering from './components/pages/Engineering'


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
          <p>A & D PRECISION MFG. INC.</p>
        </div>

        <div className='flex justify-center'>
          <img src={logo} />
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
              path='/engineering'
              element={<Engineering />}          
            />

            <Route 
              path='/certificate'
              element={<Certificate />}          
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

