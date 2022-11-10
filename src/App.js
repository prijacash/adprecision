import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Certificate from './components/pages/Certificate'
import Engineering from './components/pages/Engineering'


// partials
import Navbar from './components/partials/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>

        <div>
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
        </div>
      </Router>
    </div>
  );
}

export default App;

