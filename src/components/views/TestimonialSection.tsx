import { FaQuoteLeft } from 'react-icons/fa6'

const title = "Happy"
const colorTitle = "Customer"

const reviews = [
    {
        id: 1,
        name: "John Doe",
        image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1696863225~exp=1696863825~hmac=729810fa4b679339cf3a7420bc21426c661647db2812c211f8684f8575113cf6",
        feedback: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        `
    }
]

const TestimonialSection = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 py-5 mb-16 lg:mb-0">
                <h1 className="text-2xl lg:text-4xl text-center font-bold mb-10">{title}<span className='text-primary'> {colorTitle}</span></h1>
                <div className="grid grid-cols-1">
                    {
                        reviews.map((review) => (
                            <div className="card lg:card-side bg-base-100 p-2 shadow-xl" key={review.id}>
                                <div className="avatar w-80 h-80">
                                    <div className="rounded-full">
                                        <img src={review.image} />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title text-primary">{review.name}</h2>
                                    <span className='text-4xl text-base-300'><FaQuoteLeft /></span>
                                    <p>{review.feedback}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default TestimonialSection