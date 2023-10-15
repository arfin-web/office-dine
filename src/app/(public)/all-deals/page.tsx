import Link from "next/link"
import deals from "@/data/deals"

const title = "All"
const colorTitle = "Deals"
const subTitle = "Pick The Best Option For You"

const AllDeals = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                <h3 className="text-3xl text-center font-bold mb-4">{title}<span className="text-primary"> {colorTitle}</span></h3>
                <p className="text-center mb-10">{subTitle}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 place-items-center">
                    {
                        deals.map(deal => (
                            <Link href={deal.linkTo}>
                                <div className="card bg-base-100 hover:shadow-lg" key={deal.id}>
                                    <figure><img src={deal.image} className="lg:h-60 lg:w-full" alt={deal.title} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {deal.title}
                                        </h2>
                                        <p>{deal.description}</p>
                                        <div className="card-actions justify-end">
                                            {
                                                deal.tags.map((tag) => (
                                                    <div className="badge badge-outline">{tag}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllDeals