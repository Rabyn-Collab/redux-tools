import { NavLink } from "react-router-dom"

const Header = () => {

  return (
    <header className="bg-black text-white flex justify-between px-5 py-2 items-end">
      <h1>Sample Logo</h1>
      <nav className="space-x-5">
        <NavLink to='/about-us'>About</NavLink>
        <NavLink to='/contact-us'>Contact</NavLink>

      </nav>
    </header>
  )
}
export default Header