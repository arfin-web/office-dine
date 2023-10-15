import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

const image = "https://img.freepik.com/free-photo/feedback-comment-survey-support-response-bar-word_53876-133786.jpg?w=360&t=st=1697285026~exp=1697285626~hmac=16694f3792ad62aff7232e8cd8a4be0b86faf682cafe0fe0a38497e2fabf0082"

const GiveFeedback = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 mt-5 mb-20 lg:mb-5">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={image} alt="image" /></figure>
                    <div className="card-body">
                        <h3 className="text-2xl font-bold text-center">Give Your<span className="text-primary"> Feedback</span></h3>
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
                                    <span className="label-text">Your Feedback</span>
                                </label>
                                <textarea className="textarea textarea-bordered rounded-full" placeholder="G9ive us your valuable Feedback"></textarea>
                            </div>
                            <div className="form-control mt-2">
                                <label htmlFor="my_modal_7" className="btn btn-outline btn-primary rounded-full btn-wide mt-4">
                                    Send
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d="M223.87,114l-168-95.89A16,16,0,0,0,32.93,37.32l31,90.47a.42.42,0,0,0,0,.1.3.3,0,0,0,0,.1l-31,90.67A16,16,0,0,0,48,240a16.14,16.14,0,0,0,7.92-2.1l167.91-96.05a16,16,0,0,0,.05-27.89ZM48,224l0-.09L78.14,136H136a8,8,0,0,0,0-16H78.22L48.06,32.12,48,32l168,95.83Z"></path></svg>
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
                        <h3 className="text-center text-lg font-semibold my-4">Successfully Send</h3>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    )
}

export default GiveFeedback