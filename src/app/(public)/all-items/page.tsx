const title = "All"
const colorTitle = "Items"
const subTitle = "Pick The Best Option For You"

const allItems = [
    {
        id: 1,
        title: "Biriyani",
        image: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1697116986~exp=1697120586~hmac=cf9c5220c38bc0ba8cb6bb02e69d4daf510f7f7dd29334c14657313bc50f3b44&w=1060"
    },
    {
        id: 2,
        title: "Biriyani",
        image: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1697116986~exp=1697120586~hmac=cf9c5220c38bc0ba8cb6bb02e69d4daf510f7f7dd29334c14657313bc50f3b44&w=1060"
    },
    {
        id: 3,
        title: "Biriyani",
        image: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1697116986~exp=1697120586~hmac=cf9c5220c38bc0ba8cb6bb02e69d4daf510f7f7dd29334c14657313bc50f3b44&w=1060"
    },
]

const AllItems = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                <h3 className="text-3xl text-center font-bold mb-4">{title}<span className="text-primary"> {colorTitle}</span></h3>
                <p className="text-center mb-10">{subTitle}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 place-items-center">
                    {
                        allItems.map(item => (
                            <div className="card bg-base-100 hover:shadow-lg" key={item.id}>
                                <figure>
                                    <img src={item.image} alt={item.title} className="rounded-xl" />
                                </figure>
                                <h2 className="text-center text-lg lg:text-xl font-bold mt-3">{item.title}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllItems