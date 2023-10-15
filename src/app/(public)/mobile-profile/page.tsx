import { UserButton, currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import Link from "next/link"
import { MdDashboardCustomize, MdOutlineDashboardCustomize } from "react-icons/md";

const MobileProfile = async () => {
    const user: User | null = await currentUser();
    return (
        <>
            <ul className="menu bg-base-100">
                <li>
                    <div className="flex justify-start items-center mb-2">
                        <div className="avatar mr-2">
                            <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </div>
                        <h1 className="text-xl font-bold">{user?.firstName}<span className="text-primary"> {user?.lastName}</span></h1>
                    </div>
                    <hr />
                </li>
                <li>
                    <Link href='/dashboard' className="text-lg font-semibold hover:text-primary hover:font-bold">
                        <span><MdOutlineDashboardCustomize /></span>
                        User DashBboard
                    </Link>
                </li>
                <li>
                    <Link href='/admin-dashboard' className="text-lg font-semibold hover:text-primary hover:font-bold">
                        <span><MdDashboardCustomize /></span>
                        Admin DashBoard
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default MobileProfile