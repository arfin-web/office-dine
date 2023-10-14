const items = [
    {
        id: 1,
        title: "Biriyani",
        image: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1697116986~exp=1697120586~hmac=cf9c5220c38bc0ba8cb6bb02e69d4daf510f7f7dd29334c14657313bc50f3b44&w=1060",
        date: "20-08-2023"
    },
    {
        id: 2,
        title: "Biriyani",
        image: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1697116986~exp=1697120586~hmac=cf9c5220c38bc0ba8cb6bb02e69d4daf510f7f7dd29334c14657313bc50f3b44&w=1060",
        date: "20-08-2023"
    },
    {
        id: 3,
        title: "Biriyani",
        image: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1697116986~exp=1697120586~hmac=cf9c5220c38bc0ba8cb6bb02e69d4daf510f7f7dd29334c14657313bc50f3b44&w=1060",
        date: "20-08-2023"
    },
]

const itemsManagement = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                <h1 className="text-2xl font-bold mb-5">Manage Your<span className="text-primary"> Items</span></h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-primary text-base">Item</th>
                                <th className="text-primary text-base">Date</th>
                                <th className="text-primary text-base">Actions</th>
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
                                        <td>
                                            <div className="flex justify-start items-center">
                                                <button className="btn btn-circle btn-warning mr-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="hsl(var(--bc))" viewBox="0 0 256 256"><path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path></svg>
                                                </button>
                                                <button className="btn btn-circle btn-error">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="hsl(var(--b1))" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                                                </button>
                                            </div>
                                        </td>
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

export default itemsManagement