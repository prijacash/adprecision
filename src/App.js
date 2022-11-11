import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'


// pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Certificate from './components/pages/Certificate'
import Engineering from './components/pages/Engineering'


// partials
import NavBar from './components/partials/NavBar'


function App() {


  return (
    <div className='App'>
      <Router>
        <header>
          <NavBar />
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

      <footer className='fixed bottom-0'>
        <p className='text-xl italic mb-2'>Sales Contact</p>

        <ul>
          <li>Phone: 714-779-2714</li>
          <li>Email: pvo@adprecisionmfg.com</li>
          <li>Location: 4715 E. Hunter, Anaheim, CA</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

