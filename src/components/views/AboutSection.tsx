const title = "About"
const colorTitle = "Us"
const description = "Lorem Ipsum is simply dummy text of the printing healthy typesetting industry."

const AboutSection = () => {
    return (
        <div className="hero min-h-screen my-10" style={{ backgroundImage: "url(/about.png)" }}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold animate__animated animate__bounceInDown">{title}<span className="text-primary"> {colorTitle}</span></h1>
                    <p className="mb-5 lg:ml-7">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection