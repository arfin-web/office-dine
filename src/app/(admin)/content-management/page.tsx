import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

const TitleText = "Title"
const titlePlaceHolder = "Edit Your Title"
const colorText = "Color Text"
const colorTextPlaceHolder = "Edit Color Text"

const aboutTitle = "About Us"
const aboutUsDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const ContentManagement = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 mt-5 mb-20 lg:mb-5">
                <div className="grid grid-cols-1 gap-2 place-items-center lg:place-items-start">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="/logo.png" alt="logo" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold my-4">Change Your<span className="text-primary"> Logo</span></h3>
                    <input type="file" className="file-input file-input-bordered file-input-primary rounded-full w-full lg:w-96 mb-5" />
                    <div className="join rounded-full w-80">
                        <button className="btn join-item rounded-r-full text-primary font-semibold">{TitleText}</button>
                        <input className="input input-bordered join-item" placeholder={titlePlaceHolder} />
                    </div>
                    <div className="join rounded-full w-80">
                        <button className="btn join-item rounded-r-full text-primary font-semibold">{colorText}</button>
                        <input className="input input-bordered join-item" placeholder={colorTextPlaceHolder} />
                    </div>
                </div>
                <div className="card bg-base-100 mt-8">
                    <h1 className="text-xl lg:text-2xl text-center lg:text-start font-bold mb-4">Edit<span className="text-primary"> About Info</span></h1>
                    <div className="card-body">
                        <input type="text" placeholder={aboutTitle} className="input input-bordered input-primary w-full" />
                        <textarea className="textarea textarea-primary w-full" placeholder={aboutUsDescription}></textarea>
                        <label htmlFor="my_modal_7" className="btn btn-outline btn-primary rounded-full btn-wide mt-4">
                            Confirm
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path></svg>
                        </label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="grid grid-cols-1 place-items-center">
                        <h1 className='text-center text-8xl text-primary'><IoCheckmarkDoneCircleOutline /></h1>
                        <h3 className="text-center text-lg font-semibold my-4">Successfully Updated</h3>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    )
}

export default ContentManagement