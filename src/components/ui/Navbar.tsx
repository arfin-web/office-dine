import Link from "next/link"
import { GoShieldLock, GoUnlock } from 'react-icons/go'
import NavMenus from "./NavMenus"

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
                    <Link href='/'>
                        <img className="w-20" src="/logo.png" alt="logo" />
                    </Link>
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