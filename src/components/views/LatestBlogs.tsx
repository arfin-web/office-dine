const title = "Latest"
const colorTitle = "Blogs"
import blogs from '@/data/blogs'

const LatestBlogs = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 my-10">
                <h1 className="text-2xl lg:text-4xl text-center font-bold mb-10">{title}<span className="text-primary"> {colorTitle}</span></h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                    {
                        blogs.map(blog => (
                            <div className="card lg:card-side bg-base-100 lg:py-5 lg:pl-5 shadow-md animate__animated animate__slideInLeft" key={blog.id}>
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