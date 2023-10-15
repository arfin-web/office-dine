import Image from 'next/image'

const title = "Frequently Asked"
const colorTitle = "Questions"
import faqs from '@/data/faqs'

const FaqSection = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 py-5 mt-5 mb-20 lg:mb-5">
                <h1 className="text-2xl lg:text-4xl text-center font-bold mb-16">{title}<span className="text-primary"> {colorTitle}</span></h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                    <Image
                        src="/faqs.png"
                        width={500}
                        height={500}
                        alt="faqs"
                        className="animate__animated animate__slideInLeft"
                    />
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