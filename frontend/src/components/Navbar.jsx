import { NavLink } from "react-router-dom"

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={'/'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1">Home</div></NavLink>
        <NavLink to={'/mens'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1">Men's</div></NavLink>
        <NavLink to={'/womens'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1">Women's</div></NavLink>
        <NavLink to={'/kids'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1">Kid's</div></NavLink>
        <NavLink to={'/flea'} className={({isActive}) => isActive ? "active_link" : ""}><div className="flexCenter gap-x-1">Flea Market</div></NavLink>
    </nav>
  )
}

export default Navbar