import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default function NavBar() {

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
        <div className={`App ${theme}`}>
            <nav>
                <div className='flex justify-end'>
                    <div>
                        <ul className='flex items-center gap-2'>
                            <li className='my-1'><Link to='/'>Home</Link></li>{' | '}
                            <li className='my-1'><Link to='/about'>About</Link></li>{' | '}
                            <li className='my-1'><Link to='/engineering'>Engineering</Link></li>{' | '}
                            <li className='my-1'><Link to='/certificate'>Certificates</Link></li>{' | '}
                        </ul>
                    </div>
                    <div className='my-1 mx-2 justify-end'>
                        <button onClick={toggleTheme}>Toggle Theme</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}