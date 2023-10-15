import { UserButton, currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import Link from "next/link"
import { MdDashboardCustomize, MdOutlineDashboardCustomize } from 'react-icons/md'
import NavMenus from "./NavMenus"

const Navbar = async () => {
    const user: User | null = await currentUser();
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
                        <img className="w-20 animate__animated animate__heartBeat" src="/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <Link href='/admin-dashboard' className="btn btn-primary btn-sm rounded-full normal-case text-lg font-bold mr-2">
                            <span><MdDashboardCustomize /></span>
                            Admin DashBoard
                        </Link>
                        <Link href='/dashboard' className="btn btn-outline btn-primary btn-sm rounded-full normal-case text-lg font-bold mr-4">
                            <span><MdOutlineDashboardCustomize /></span>
                            User DashBboard
                        </Link>
                        {
                            user && <div className="avatar">
                                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <UserButton afterSignOutUrl="/" />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar