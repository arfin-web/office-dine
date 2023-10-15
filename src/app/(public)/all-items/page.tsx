const title = "All"
const colorTitle = "Items"
const subTitle = "Pick The Best Option For You"
import foodItems from "@/data/foodItems"

const AllItems = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                <h3 className="text-3xl text-center font-bold mb-4">{title}<span className="text-primary"> {colorTitle}</span></h3>
                <p className="text-center mb-10">{subTitle}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 place-items-center">
                    {
                        foodItems.map(item => (
                            <div className="card bg-base-100 hover:shadow-lg" key={item.id}>
                                <figure>
                                    <img src={item.image} alt={item.name} className="rounded-xl" />
                                </figure>
                                <h2 className="text-center text-lg lg:text-xl font-bold mt-3">{item.name}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllItems