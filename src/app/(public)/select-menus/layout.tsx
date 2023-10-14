import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <div className="navbar bg-base-100">
                            <div className="navbar-start">
                                <label htmlFor="my-drawer-2" className="btn btn-outline btn-primary btn-sm font-bold drawer-button lg:hidden">
                                    Filter
                                </label>
                            </div>
                            <div className="navbar-center">
                                <div className="form-control">
                                    <input type="text" placeholder="Search" className="input input-bordered input-sm lg:input-md rounded-full w-auto" />
                                </div>
                            </div>
                            <div className="navbar-end">
                                <button className="btn btn-ghost btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-8 lg:h-8" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path></svg>
                                    <div className="badge badge-secondary badge-sm lg:badge-md">+3</div>
                                </button>
                            </div>
                        </div>
                        <hr />
                        {children}
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}

                        </ul>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    )
}