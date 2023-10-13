const title = "Latest"
const colorTitle = "Blogs"

const blogs = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/well-done-steak-homemade-potatoes_140725-3989.jpg?w=360&t=st=1697179841~exp=1697180441~hmac=33ba07e12510a287841764b5a5ff6ce2a3bdf3c423a2f6ce141f24cde2cac1c8",
        title: "Food Hygiene at Office",
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/well-done-steak-homemade-potatoes_140725-3989.jpg?w=360&t=st=1697179841~exp=1697180441~hmac=33ba07e12510a287841764b5a5ff6ce2a3bdf3c423a2f6ce141f24cde2cac1c8",
        title: "Food Hygiene at Office",
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
    {
        id: 3,
        image: "https://img.freepik.com/free-photo/well-done-steak-homemade-potatoes_140725-3989.jpg?w=360&t=st=1697179841~exp=1697180441~hmac=33ba07e12510a287841764b5a5ff6ce2a3bdf3c423a2f6ce141f24cde2cac1c8",
        title: "Food Hygiene at Office",
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    },
    {
        id: 4,
        image: "https://img.freepik.com/free-photo/well-done-steak-homemade-potatoes_140725-3989.jpg?w=360&t=st=1697179841~exp=1697180441~hmac=33ba07e12510a287841764b5a5ff6ce2a3bdf3c423a2f6ce141f24cde2cac1c8",
        title: "Food Hygiene at Office",
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`
    }
]

const LatestBlogs = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 my-10">
                <h1 className="text-2xl lg:text-4xl text-center font-bold mb-10">{title}<span className="text-primary"> {colorTitle}</span></h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                    {
                        blogs.map(blog => (
                            <div className="card lg:card-side bg-base-100 lg:py-5 lg:pl-5 shadow-md" key={blog.id}>
                                <figure><img className="h-full" src={blog.image} alt={blog.title} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{blog.title}</h2>
                                    <p>{blog.description}</p>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-outline btn-primary rounded-full hover:btn-outline">Read More</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default LatestBlogs