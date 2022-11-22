import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default function NavBar({ toggleTheme }) {

    // const [theme, setTheme] = useState('light');
    // const toggleTheme = () => {
    //   if (theme === 'light') {
    //     setTheme('dark');
    //   } else {
    //     setTheme('light');
    //   }
    // };
  
    // useEffect(() => {
    //   document.body.className = theme;
    // }, [theme]);

    return (
        <div className={`App ` }>
            <nav>
                <div className="fixed-top flex justify-between items-end w-screen h-15 max-w-100 bg-slate-600 text-xl font-light text-stone-50 px-5 py-2">
                    <div>
                        <ul className='flex items-center gap-2'>
                            <li className='my-1 italic font-bold'><Link to='/'>A&D PRECISION</Link></li>{' | '}
                            <li className='my-1'><Link to='/about'>About Us</Link></li>{' | '}
                            <li className='my-1'><Link to='/capabilities'>Capabilities</Link></li>{' | '}
                            <li className='my-1'><Link to='/quality'>Quality</Link></li>{' | '}
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