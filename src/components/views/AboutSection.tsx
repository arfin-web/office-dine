import Image from "next/image"

const AboutSection = () => {
    return (
        <div className="hero min-h-screen my-10" style={{ backgroundImage: "url(https://ik.imagekit.io/b1ty4nofq/office-dine/aboutbg.png?updatedAt=1734339580372)" }}>
            <div className="hero-content text-center">
                <div className="max-w-md mb-14">
                    <Image
                        src='https://ik.imagekit.io/b1ty4nofq/office-dine/aboutImg.png?updatedAt=1734339636312'
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