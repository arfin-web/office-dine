import Link from "next/link"
import { GoShieldLock, GoUnlock } from 'react-icons/go'
import NavMenus from "./NavMenus"

const logo = "Office"
const logo2 = "Dine"

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 lg:px-10">
                <div className="navbar-start">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        <NavMenus />
                    </ul>
                </div>
                <div className="navbar-center">
                    <Link href='/' className="text-xl lg:text-2xl text-primary font-bold">{logo}<span className="text-secondary">{logo2}</span></Link>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <button className="btn btn-primary rounded-full normal-case text-lg font-bold mr-2">
                            <span><GoShieldLock /></span>
                            Sign Up
                        </button>
                        <button className="btn btn-outline btn-primary rounded-full normal-case text-lg font-bold">
                            <span><GoUnlock /></span>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar