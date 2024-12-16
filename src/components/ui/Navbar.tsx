import { UserButton, currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import Link from "next/link"
import { MdDashboardCustomize, MdOutlineDashboardCustomize } from 'react-icons/md'
import NavMenus from "./NavMenus"
import { checkRole } from '@/utils/roles'
import { PiLock, PiLockFill } from "react-icons/pi";
import Logo from "./Logo";

const Navbar = async () => {
    const user: User | null = await currentUser();
    const isAdmin = await checkRole('admin')
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
                        <Logo />
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        {
                            isAdmin ? <Link href='/admin-dashboard' className="btn btn-primary btn-sm rounded-full normal-case text-lg font-bold mr-2">
                                <span><MdDashboardCustomize /></span>
                                Admin DashBoard
                            </Link> : <>
                                {
                                    user && !isAdmin && <Link href='/dashboard' className="btn btn-outline btn-primary btn-sm rounded-full normal-case text-lg font-bold mr-4">
                                        <span><MdOutlineDashboardCustomize /></span>
                                        User DashBboard
                                    </Link>
                                }
                            </>
                        }
                        {
                            user ? <div className="avatar ml-2">
                                <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <UserButton afterSignOutUrl="/" />
                                </div>
                            </div> : <div className="flex gap-2">
                                <Link href='/sign-in' className="btn btn-outline btn-primary btn-sm rounded-full normal-case text-lg font-bold mr-2">
                                    <span><PiLock /></span>
                                    Login
                                </Link>
                                <Link href='/sign-up' className="btn btn-primary btn-sm rounded-full normal-case text-lg font-bold mr-4">
                                    <span><PiLockFill /></span>
                                    Register
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar