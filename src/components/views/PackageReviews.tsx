import reviews from "@/data/reviews"

const PackageReviews = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                <h3 className="text-2xl text-primary font-semibold mb-5">Reviews:</h3><hr />
                <div className="mt-5">
                    {
                        reviews.map((review) => (
                            <div className="chat chat-start mb-4" key={review.id}>
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={review.image} alt={review.name} />
                                    </div>
                                </div>
                                <div className="chat-bubble chat-bubble-info">{review.feedback}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PackageReviews