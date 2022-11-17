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
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
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

