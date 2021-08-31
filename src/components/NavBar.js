import { Link } from 'react-router-dom'
import { useMyContext } from './Context'

const NavBar = () => {
  const { menu, hideNav } = useMyContext()

  return (
    <nav className={menu ? 'nav-bar smooth' : 'nav-bar'}>
      <ul>
        <li onClick={hideNav}>
          <Link className='links' to='/'>About</Link>
        </li>
        <li onClick={hideNav}>
          <Link className='links' to='/projects'>Projects</Link>
        </li>
        <li onClick={hideNav}>
          <Link className='links' to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar