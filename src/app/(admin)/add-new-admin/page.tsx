import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

const image = "https://img.freepik.com/free-photo/vertical-shot-pretty-black-businesswoman-examines-charts-papers_273609-18039.jpg?w=360&t=st=1697279651~exp=1697280251~hmac=fac8520309c6f85d58b71c0c80b2af6a5e677fa4a89fdaf42256350372678091"

const AddNewAdmin = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 mt-5 mb-20 lg:mb-5">
                <div className="card w-80 lg:w-auto lg:card-side bg-base-100 shadow-xl ml-3 lg:ml-0">
                    <figure><img src={image} alt="image" /></figure>
                    <div className="card-body">
                        <h3 className="text-2xl font-bold text-center">Add New<span className="text-primary"> Admin</span></h3>
                        <form>
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered rounded-full" required />
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
                        <h3 className="text-center text-lg font-semibold my-4">Successfully Added</h3>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    )
}

export default AddNewAdmin