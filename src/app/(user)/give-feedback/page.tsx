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
                                <button className="btn btn-outline btn-primary rounded-full btn-wide mt-4">
                                    Confirm
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GiveFeedback