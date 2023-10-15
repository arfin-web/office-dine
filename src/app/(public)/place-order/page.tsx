import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

const image = "https://img.freepik.com/free-photo/high-angle-woman-scanning-qr-code-restaurant_23-2149357858.jpg?w=360&t=st=1697385779~exp=1697386379~hmac=e1feae425b9e3c8683e34125f504361b5c62d86f2934f33528b32a5e4a662b40"

const PlaceOrder = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 mt-5 mb-20 lg:mb-5">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={image} alt="image" /></figure>
                    <div className="card-body">
                        <h3 className="text-2xl font-bold text-center">Place Your<span className="text-primary"> Order</span></h3>
                        <h3 className="text-2xl font-bold mt-3">Total:<span className="text-primary"> $ 100</span></h3>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Name" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Email" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Payment Option</span>
                                </label>
                                <select className="select select-primary rounded-full" required>
                                    <option selected>Bkash</option>
                                    <option>Cellfin</option>
                                    <option>Nagad</option>
                                    <option>DBBL</option>
                                </select>
                            </div>
                            <div className="form-control mt-2">
                                <label htmlFor="my_modal_7" className="btn btn-outline btn-primary rounded-full btn-wide mt-4">
                                    Confirm
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path></svg>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="grid grid-cols-1 place-items-center">
                        <h1 className='text-center text-8xl text-primary'><IoCheckmarkDoneCircleOutline /></h1>
                        <h3 className="text-center text-lg font-semibold my-4">Successfully Paid</h3>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    )
}

export default PlaceOrder