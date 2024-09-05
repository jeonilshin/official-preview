import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import logout from "../assets/logout.svg"
import user from "../assets/user.svg"
import Navbar from "./Navbar";
import { useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { 
    MdMenu, 
    MdClose
} from "react-icons/md";

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened)
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
        <div className="px-4 flexBetween py-3 max-xs:px-2">
            {/* logo */}
            <div>
                <Link><img src={logo} alt="" height={30} width={28} /></Link>
            </div>
            {/* Navbar */}
            <Navbar containerStyles={"hidden md:flex gap-x-10 xl:gap-x-10 medium-15"}/>
            {/* Navbar Mobile */}
            <Navbar containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300" : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`} />
            {/* buttons */}
            <div className="flexBetween sm:gap-x-2 bold-16">
                {!menuOpened? (
                <MdMenu className="md:hidden cursor-pointer hover:text-red-600 mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}/>
                ) : (
                <MdClose className="md:hidden cursor-pointer hover:text-red-600 mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />)}
                <div className="flexBetween sm:gap-x-6">
                    <NavLink to={"card-page"} className={"flex"}><IoCartSharp className="p-1 h-8 w-8 ring-slate-600/30 ring-1 rounded-full"/><span className="relative flexCenter w-5 h-5 rounded-full bg-red-600 text-white medium-14 -top-2">0</span></NavLink>
                    {/* <NavLink to={'logout'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}><img src={logout} alt="logoutIcon" height={19} width={19}/>Logout</NavLink> */}
                    <NavLink to={'login'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}><img src={user} alt="userIcon" height={19} width={19} />Login</NavLink>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header