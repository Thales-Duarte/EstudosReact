import './Navbar.css'
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav>
      <NavLink to="/"><h2>Home</h2></NavLink>
      <NavLink to="/about"><h2>About</h2></NavLink>
      <NavLink to="/info"><h2>Info</h2></NavLink>
    </nav>
  )
}

export default NavBar