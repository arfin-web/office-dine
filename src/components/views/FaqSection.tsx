const title = "Frequently Asked"
const colorTitle = "Questions"
const picture = "https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?w=360&t=st=1697180562~exp=1697181162~hmac=ea6c1be3b885982baa452cee2a833226367a111096c99403a86bf67494e2bf8f"

const faqs = [
    {
        id: 1,
        question: "How To Book My Favourite Deals Plan?",
        answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
    {
        id: 2,
        question: "How To Book My Favourite Deals Plan?",
        answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
    {
        id: 3,
        question: "How To Book My Favourite Deals Plan?",
        answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
    {
        id: 4,
        question: "How To Book My Favourite Deals Plan?",
        answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
    {
        id: 5,
        question: "How To Book My Favourite Deals Plan?",
        answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
]

const FaqSection = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 py-5 mt-5 mb-20 lg:mb-5">
                <h1 className="text-2xl lg:text-4xl text-center font-bold mb-16">{title}<span className="text-primary"> {colorTitle}</span></h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                    <div className="rounded-2xl border-2 border-primary p-2 overflow-hidden lg:place-self-start">
                        <div className="rounded-2xl border-dotted border-2 border-primary overflow-hidden">
                            <img className="h-80 lg:h-96 animate__animated animate__slideInLeft" src={picture} alt="hero-image" />
                        </div>
                    </div>
                    <div>
                        {
                            faqs.map((faq) => (
                                <div className="collapse collapse-plus bg-base-100 border-2 border-base-200 mb-1" key={faq.id}>
                                    <input type="radio" name="my-accordion-3" />
                                    <div className="collapse-title text-base font-medium">
                                        {faq.question}
                                    </div>
                                    <div className="collapse-content">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqSection