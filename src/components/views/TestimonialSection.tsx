import FastMarquee from 'react-fast-marquee';
import { FaQuoteLeft } from 'react-icons/fa6'

const title = "Happy"
const colorTitle = "Customer"

const reviews = [
    {
        id: 1,
        name: "John Doe",
        image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1696863225~exp=1696863825~hmac=729810fa4b679339cf3a7420bc21426c661647db2812c211f8684f8575113cf6",
        feedback: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
    {
        id: 2,
        name: "John Doe",
        image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1696863225~exp=1696863825~hmac=729810fa4b679339cf3a7420bc21426c661647db2812c211f8684f8575113cf6",
        feedback: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
    {
        id: 3,
        name: "John Doe",
        image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1696863225~exp=1696863825~hmac=729810fa4b679339cf3a7420bc21426c661647db2812c211f8684f8575113cf6",
        feedback: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
]

const TestimonialSection = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 py-5 my-10">
                <h1 className="text-2xl lg:text-4xl text-center font-bold mb-10">{title}<span className='text-primary'> {colorTitle}</span></h1>
                <FastMarquee
                    gradientColor="none"
                    gradientWidth={0}
                    pauseOnHover={true}
                    speed={100}
                    className='py-5'
                >
                    {
                        reviews.map((review) => (
                            <div className="card w-80 lg:w-96 bg-base-100 shadow-sm hover:shadow-lg" key={review.id}>
                                <div className="card-body">
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={review.image} alt={review.name} />
                                        </div>
                                    </div>
                                    <h2 className="card-title">{review.name}</h2>
                                    <span className='text-4xl text-base-300'><FaQuoteLeft /></span>
                                    <p>{review.feedback}</p>
                                    <div className="card-actions justify-between items-center mt-4">
                                        <div className="badge badge-primary badge-lg badge-outline font-semibold">5.0</div>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </FastMarquee>
            </div>
        </>
    )
}

export default TestimonialSection