import Link from "next/link"

const title = "Best"
const colorTitle = "Deals"
const subTitle = "Pick The Best Option For You"

const bestDeals = [
    {
        id: 1,
        title: "Custom Menu Planning",
        description: "Work with each client to create a customized menu tailored to their preferences, dietary requirements, and budget.",
        image: "https://img.freepik.com/free-photo/top-view-arrangement-with-meal-planning-notebook_23-2149099890.jpg?w=996&t=st=1697120170~exp=1697120770~hmac=c991a50462f9adac2c6439b3ac6d13d1d42dc897a89ab3d4eac2bf5e5be45031",
        tags: ["#custom_meal", "#meal_plan"]
    },
    {
        id: 2,
        title: "Custom Menu Planning",
        description: "Work with each client to create a customized menu tailored to their preferences, dietary requirements, and budget.",
        image: "https://img.freepik.com/free-photo/top-view-arrangement-with-meal-planning-notebook_23-2149099890.jpg?w=996&t=st=1697120170~exp=1697120770~hmac=c991a50462f9adac2c6439b3ac6d13d1d42dc897a89ab3d4eac2bf5e5be45031",
        tags: ["#custom_meal", "#meal_plan"]
    },
    {
        id: 3,
        title: "Custom Menu Planning",
        description: "Work with each client to create a customized menu tailored to their preferences, dietary requirements, and budget.",
        image: "https://img.freepik.com/free-photo/top-view-arrangement-with-meal-planning-notebook_23-2149099890.jpg?w=996&t=st=1697120170~exp=1697120770~hmac=c991a50462f9adac2c6439b3ac6d13d1d42dc897a89ab3d4eac2bf5e5be45031",
        tags: ["#custom_meal", "#meal_plan"]
    },
]

const BestDeals = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 my-10">
                <h3 className="text-3xl text-center font-bold mb-4">{title}<span className="text-primary"> {colorTitle}</span></h3>
                <p className="text-center mb-10">{subTitle}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 place-items-center">
                    {
                        bestDeals.map(deal => (
                            <Link href="/deal-details">
                                <div className="card bg-base-100 hover:shadow-lg animate__animated animate__backInLeft" key={deal.id}>
                                    <figure><img src={deal.image} alt={deal.title} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {deal.title}
                                            <div className="badge badge-secondary">Top</div>
                                        </h2>
                                        <p>{deal.description}</p>
                                        <div className="card-actions justify-end">
                                            {
                                                deal.tags.map((tag, index) => (
                                                    <div key={index} className="badge badge-outline">{tag}</div>
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

export default BestDeals