"use client"
import Navbar from "@/components/ui/Navbar"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { deleteItem } from "@/redux/features/cartSlice"

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cart = useAppSelector((state) => state.cart.items)
    const dispatch = useAppDispatch()
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
                                <label htmlFor="my_modal_6" className="btn btn-ghost btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-8 lg:h-8" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path></svg>
                                    <div className="badge badge-secondary badge-sm lg:badge-md">{cart.length}</div>
                                </label>
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

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-auto">
                        <h1 className="text-2xl font-bold my-5">My<span className="text-primary"> Cart</span></h1>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {
                                    cart.map((item: any) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item.image} alt={item.name} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{item.name}</div>
                                                        <div className="text-sm opacity-50">{item.category}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="font-bold text-primary">$ {item.price}</div>
                                            </td>
                                            <th>
                                                <button onClick={() => dispatch(deleteItem(item))} className="btn btn-circle btn-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="hsl(var(--b1))" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                                                </button>
                                            </th>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                    </div>
                </div>

            </body>
        </html>
    )
}