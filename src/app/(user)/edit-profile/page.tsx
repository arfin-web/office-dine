import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

const avatarImg = "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1697192467~exp=1697193067~hmac=a919f78d91bbf83fc207005d92c9ecc8e848e7c7bae964afdb36b665de9859f3"
const nameTitle = "Name"
const namePlaceHolder = "Edit Your Name"
const usernameTitle = "User Name"
const userNamePlaceHolder = "Edit Your User Name"

const profileDetails = [
    {
        id: 1,
        text: "john@mail.com",
        Icon: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z",
    },
    {
        id: 2,
        text: "+8801739673620",
        Icon: "M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z",
    },
    {
        id: 3,
        text: "Dhaka, Bangladesh",
        Icon: "M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"
    }
]

const EditProfile = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 mt-5 mb-20 lg:mb-5">
                <div className="grid grid-cols-1 gap-2 place-items-center lg:place-items-start">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={avatarImg} alt="avatar" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold my-4">Choose Your<span className="text-primary"> Profile Picture</span></h3>
                    <input type="file" className="file-input file-input-bordered file-input-primary rounded-full w-full lg:w-96 mb-5" />
                    <div className="join rounded-full w-80">
                        <button className="btn join-item rounded-r-full text-primary font-semibold">{nameTitle}</button>
                        <input className="input input-bordered join-item" placeholder={namePlaceHolder} />
                    </div>
                    <div className="join rounded-full w-80">
                        <button className="btn join-item rounded-r-full text-primary font-semibold">{usernameTitle}</button>
                        <input className="input input-bordered join-item" placeholder={userNamePlaceHolder} />
                    </div>
                </div>
                <div className="card bg-base-100 mt-8">
                    <h1 className="text-xl lg:text-2xl text-center lg:text-start font-bold mb-4">Edit<span className="text-primary"> Details</span></h1>
                    <div className="card-body">
                        {
                            profileDetails.map((detail) => (
                                <div className="join rounded-full" key={detail.id}>
                                    <button className="btn join-item rounded-r-full text-primary font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d={detail.Icon}></path></svg>
                                    </button>
                                    <input className="input input-bordered join-item" placeholder={detail.text} />
                                </div>
                            ))
                        }
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

export default EditProfile