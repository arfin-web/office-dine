import foodItems from "@/data/foodItems"

const title = "Best"
const colorTitle = "Items"
const subTitle = "Pick The Best Option For You"

const BestItems = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 my-10">
                <h3 className="text-3xl text-center font-bold mb-4">{title}<span className="text-primary"> {colorTitle}</span></h3>
                <p className="text-center mb-10">{subTitle}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 place-items-center">
                    {
                        foodItems.slice(0, 3).map(item => (
                            <div className="card bg-base-100 hover:shadow-lg animate__animated animate__backInRight" key={item.id}>
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

export default BestItems