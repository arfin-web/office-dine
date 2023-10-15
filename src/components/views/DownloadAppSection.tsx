import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from 'react-icons/io5'
import Link from "next/link"

const bgImage = "https://img.freepik.com/free-vector/diwali-modern-web-wide-banner-yellow-background-vector-illustration_1017-39641.jpg?w=1060&t=st=1697290893~exp=1697291493~hmac=4f2ce3eee659de4481b42217d5da4ac30d3e6dbf3b32159a421e55cdda08a3ae"
const title = "Working for Your Better Health"
const subTitle = "Download the OfficeDine App today!"

const DownloadAppSection = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 py-5 my-10">
                <div className="card w-full lg:card-side bg-base-100 shadow-xl image-full">
                    <figure><img src={bgImage} alt="Album" /></figure>
                    <div className="card-body">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center">
                            <div className="flex-col">
                                <h2 className="card-title text-xl lg:text-2xl mb-5">{title}</h2>
                                <p className="text-2xl lg:text-4xl font-bold mb-5">{subTitle}</p>
                                <div className="flex flex-col lg:flex-row justify-start items-center gap-1 lg:gap-2">
                                    <Link href="/comingsoon" className="bg-base-100 w-44 inline-flex py-3 px-5 rounded-lg items-center hover:bg-base-200 focus:outline-none animate__animated animate__flipInX">
                                        <span className='text-2xl text-base-content'><IoLogoGooglePlaystore /></span>
                                        <span className="ml-4 flex items-start flex-col leading-none">
                                            <span className="text-xs text-neutral-focus mb-1">GET IT ON</span>
                                            <span className="title-font font-medium">Google Play</span>
                                        </span>
                                    </Link>
                                    <Link href="/comingsoon" className="bg-base-100 w-44 inline-flex py-3 px-5 rounded-lg items-center hover:bg-base-200 focus:outline-none animate__animated animate__flipInX">
                                        <span className='text-2xl text-base-content'><IoLogoAppleAppstore /></span>
                                        <span className="ml-4 flex items-start flex-col leading-none">
                                            <span className="text-xs text-neutral-focus mb-1">GET IT ON</span>
                                            <span className="title-font font-medium">App Store</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <img src="/app.png" className="w-80 lg:w-96 animate__animated animate__fadeInRightBig" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownloadAppSection