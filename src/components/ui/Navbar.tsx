import Link from "next/link"
import { GoShieldLock, GoUnlock } from 'react-icons/go'
import NavMenus from "./NavMenus"

const logo = "Office"
const logo2 = "Dine"

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        <NavMenus />
                    </ul>
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavMenus />
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link href='/' className="text-xl lg:text-2xl text-primary font-bold">{logo}<span className="text-secondary">{logo2}</span></Link>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-primary normal-case font-bold mr-1.5">
                        <span><GoShieldLock /></span>
                        Sign Up
                    </button>
                    <button className="btn btn-outline btn-primary normal-case font-bold">
                        <span><GoUnlock /></span>
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar