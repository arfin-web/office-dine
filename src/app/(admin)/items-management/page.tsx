import foodItems from "@/data/foodItems"
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

const itemsManagement = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <h1 className="text-lg lg:text-2xl font-bold mb-5">Manage Your<span className="text-primary"> Items</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                </div>
                <div className="navbar-end">
                    <label htmlFor="my_modal_6" className="btn btn-outline btn-primary btn-sm lg:btn-md rounded-full font-semibold">Add New</label>
                </div>
            </div>
            <div className="overflow-x-scroll mx-auto lg:px-10 mt-5 mb-20 lg:mb-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-primary text-base">Item</th>
                            <th className="text-primary text-base">Date</th>
                            <th className="text-primary text-base">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foodItems.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-8 h-8 lg:w-12 lg:h-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $ {item.price}
                                    </td>
                                    <td>
                                        <div className="flex justify-start items-center">
                                            <button className="btn btn-circle btn-sm lg:btn-md btn-warning mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 lg:w-7 lg:h-7" fill="hsl(var(--bc))" viewBox="0 0 256 256"><path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path></svg>
                                            </button>
                                            <button className="btn btn-circle btn-sm lg:btn-md btn-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 lg:w-7 lg:h-7" fill="hsl(var(--b1))" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-2xl font-bold text-center">Add New<span className="text-primary"> Item</span></h3>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-primary rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Write Service Title" className="input input-bordered input-primary rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Set Price" className="input input-bordered input-primary rounded-full" required />
                        </div>
                        <div className="form-control mt-2">
                            <label htmlFor="my_modal_7" className="btn btn-outline btn-primary rounded-full btn-wide mt-4">
                                Confirm
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path></svg>
                            </label>
                        </div>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn btn-sm lg:btn-md">Close!</label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="grid grid-cols-1 place-items-center">
                        <h1 className='text-center text-8xl text-primary'><IoCheckmarkDoneCircleOutline /></h1>
                        <h3 className="text-center text-lg font-semibold my-4">Successfully Added</h3>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    )
}

export default itemsManagement