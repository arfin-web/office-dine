import Link from 'next/link'

const avatarImg = "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1697192467~exp=1697193067~hmac=a919f78d91bbf83fc207005d92c9ecc8e848e7c7bae964afdb36b665de9859f3"

const userMenus = [
    {
        id: 1,
        text: 'Dashboard',
        icon: "M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z",
        linkTo: "/dashboard"
    },
    {
        id: 2,
        text: 'My Profile',
        icon: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z",
        linkTo: "/my-profile"
    },
    {
        id: 3,
        text: 'Booking History',
        icon: "M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z",
        linkTo: "/booking-history"
    },
    {
        id: 4,
        text: "Notifications Center",
        icon: "M224,71.1a8,8,0,0,1-10.78-3.42,94.13,94.13,0,0,0-33.46-36.91,8,8,0,1,1,8.54-13.54,111.46,111.46,0,0,1,39.12,43.09A8,8,0,0,1,224,71.1ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.54A111.46,111.46,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72Zm186.1,103.94A16,16,0,0,1,208,200H167.2a40,40,0,0,1-78.4,0H48a16,16,0,0,1-13.79-24.06C43.22,160.39,48,138.28,48,112a80,80,0,0,1,160,0C208,138.27,212.78,160.38,221.81,175.94ZM150.62,200H105.38a24,24,0,0,0,45.24,0ZM208,184c-10.64-18.27-16-42.49-16-72a64,64,0,0,0-128,0c0,29.52-5.38,53.74-16,72Z",
        linkTo: '/notifications-center'
    },
    {
        id: 5,
        text: "Give Feedback",
        icon: "M234.5,114.38,229.27,119a8,8,0,1,1-10.52-12l5.23-4.57s0,0,0-.07l-8.67-.75a8,8,0,1,1,1.37-16l8.7.75a16,16,0,0,1,9.11,28.07Zm-60.7,43,2.86,12.41a8,8,0,1,0,15.59-3.6l-2.85-12.47,7.86-6.86a8,8,0,0,0-10.52-12.06l-7.86,6.87A16,16,0,0,0,173.8,157.4ZM136,51.15V184.81l.27.15,11.88,7.22a8,8,0,0,1-8.3,13.68L128,198.64l-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.07l59.46-5.14,23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l10.74.93a8,8,0,0,1-1.38,16l-10.76-.93a16,16,0,0,1-13.35-9.75ZM119.73,185l.27-.15V51.15L104.8,87.37a16,16,0,0,1-13.35,9.75L32,102.25a.58.58,0,0,0,0,.1l45.13,39.34A16,16,0,0,1,82.2,157.4L68.68,215.94v0Zm79.91,13.25a8,8,0,0,0-15.59,3.61l3.3,14.14v0l-11.19-6.8a8,8,0,1,0-8.31,13.68l11.23,6.82a16,16,0,0,0,23.84-17.34Z",
        linkTo: '/give-feedback'
    },
]

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <div className="navbar bg-base-100">
                            <div className="flex-1">
                                <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="hsl(var(--n))" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
                                </label>
                            </div>
                            <div className="flex-none gap-2">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={avatarImg} alt='profile-pic' />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Dashboard
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {children}
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li className='mb-10'>
                                <Link href='/' className='flex justify-center items-center'>
                                    <img className="w-20" src="/logo.png" alt="logo" />
                                </Link>
                            </li>
                            {
                                userMenus.map((menu) => (
                                    <li key={menu.id}>
                                        <Link href={menu.linkTo} className="text-base font-semibold">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d={menu.icon}></path></svg>
                                            {menu.text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </body>
        </html>
    )
}