import {NavLink ,Link } from "react-router-dom";
import userCircle from '../assets/user-circle.svg'
import {AiOutlineLogout} from 'react-icons/ai'

export default function Header () {

  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }

  function fakeLogout () {
    localStorage.removeItem('loggedin')
  }

  return (
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        
        <NavLink 
        to="/host"
        style={({isActive})=>isActive ? activeStyles : null}
        >Host</NavLink>
        
        <NavLink 
        to="/about"
        style={({isActive})=>isActive ? activeStyles : null}
        >About</NavLink>
        
        <NavLink 
        to="/vans"
        style={({isActive})=>isActive ? activeStyles : null}
        >Vans</NavLink>

        <Link
        to='login'
        className="login-link"
        >
          <img
          src={userCircle}
          className="login-icon"
          />
        </Link>
        <button onClick={fakeLogout} style={{background: 'none', border: 'none'}}>
          <AiOutlineLogout size={17} />
        </button>
      </nav>
    </header>
  )
}