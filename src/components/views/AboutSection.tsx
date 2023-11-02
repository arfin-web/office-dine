import Image from "next/image"

const AboutSection = () => {
    return (
        <div className="hero min-h-screen my-10" style={{ backgroundImage: "url(/aboutbg.png)" }}>
            <div className="hero-content text-center">
                <div className="max-w-md mb-14">
                    <Image
                        src='/aboutImg.png'
                        alt="About Us"
                        width={500}
                        height={500}
                        className="animate-pulse"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutSection