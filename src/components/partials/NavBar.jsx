import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul className='flex flex-row items-center justify-center gap-2'>
                <li className='my-2'><Link to='/'>Home</Link></li>{' | '}
                <li className=''><Link to='/about'>About</Link></li>{' | '}
                <li className=''><Link to='/engineering'>Engineering</Link></li>{' | '}
                <li className=''><Link to='/certificate'>Certificates</Link></li>
            </ul>
        </div>
    )
}