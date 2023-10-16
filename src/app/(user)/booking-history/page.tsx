const items = [
    {
        id: 1,
        title: "Biriyani",
        price: "$20",
        image: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1697259104~exp=1697262704~hmac=64febc8045fae8736354b32e402e862b5b9e5d3bd51c17e1b4dfb675ef574016&w=1060",
        date: "20-04-2023"
    },
    {
        id: 2,
        title: "Pizza",
        price: "$10",
        image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=996&t=st=1697263174~exp=1697263774~hmac=9376530df3a6c552316af56f2bc757aebca31fd2551261e3964275b27d1a1df8",
        date: "28-05-2023"
    }
]

const BookingHistory = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                <h1 className="text-2xl font-bold mb-5">Booking<span className="text-primary"> History</span></h1>
                <div className="overflow-x-scroll">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-primary text-base">Item</th>
                                <th className="text-primary text-base">Date</th>
                                <th className="text-primary text-base">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-8 h-8 lg:w-12 lg:h-12">
                                                        <img src={item.image} alt={item.title} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.date}
                                        </td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BookingHistory