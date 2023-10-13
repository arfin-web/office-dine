const bgImage = 'url(https://img.freepik.com/free-photo/empty-plate-surrounded-by-pinto-bean-vegetables-orange-slices-arranged-white-background_23-2148026849.jpg?w=996&t=st=1697186121~exp=1697186721~hmac=9a9a81b968341aaf6dac09a38db03fe23d2caaba223729bdd53103ff59073a1f)'
const title = "About"
const colorTitle = "Us"
const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const AboutSection = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `${bgImage}` }}>
            <div className="bg-opacity-20"></div>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold">{title}<span className="text-primary"> {colorTitle}</span></h1>
                    <p className="mb-5">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection