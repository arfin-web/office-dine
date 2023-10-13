const title = "How it Works"
const subTitle = "4 easy steps to Grab"
const description = "Lorem ipsum dolor consectetur adipiscing elit,sed do eiusmod tempor"
const picture = "https://img.freepik.com/free-vector/aerial-view-food-plate_1308-47998.jpg?w=740&t=st=1697178422~exp=1697179022~hmac=43ecc5ee0bf726701015c80568ad506525b709953b259f4b375ebcbbc061f036"

const steps = [
    {
        id: 1,
        title: "Choose A Deals Plan",
        icon: "M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z",
    },
    {
        id: 2,
        title: "Select Your Items",
        icon: "M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z",
    },
    {
        id: 3,
        title: "Clear Your Payment",
        icon: "M220.12,93.54a55.8,55.8,0,0,0-20.19-16.18A56,56,0,0,0,144,24H84A16,16,0,0,0,68.48,36.12l-36,144A16,16,0,0,0,48,200h27.5l-3,12.12A16,16,0,0,0,88,232h31.5A16,16,0,0,0,135,219.88L144,184h32a56,56,0,0,0,44.14-90.46ZM48,184,84,40h60a40,40,0,0,1,39.3,32.49A57,57,0,0,0,176,72H120a16,16,0,0,0-15.53,12.12L79.52,184H48ZM183,88.62c-.08.36-.15.72-.24,1.08A39.94,39.94,0,0,1,144,120H112l8-32h56A40.07,40.07,0,0,1,183,88.62Zm31.76,49.08A39.94,39.94,0,0,1,176,168H144a16,16,0,0,0-15.52,12.12l-9,35.88H88l20-80h36a55.9,55.9,0,0,0,54-41.39,40.2,40.2,0,0,1,9.48,8.77A39.73,39.73,0,0,1,214.78,137.7Z",
    },
    {
        id: 4,
        title: "Enjoy the Deal",
        icon: "M174.92,156c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.93-28a8,8,0,1,1,13.86-8c7.46,12.91,19.2,20,33.07,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM232,128a104.35,104.35,0,0,1-4.56,30.56,8,8,0,0,1-2,3.31l-63.57,63.57a7.9,7.9,0,0,1-3.3,2A104,104,0,1,1,232,128Zm-16,0a87.89,87.89,0,1,0-64,84.69L212.69,152A88.05,88.05,0,0,0,216,128ZM92,120a12,12,0,1,0-12-12A12,12,0,0,0,92,120Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,96Z",
    },
]

const HowItWorksSection = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 py-5 my-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                    <div className="rounded-full border-2 border-secondary p-2 overflow-hidden lg:place-self-start">
                        <div className="rounded-full border-dotted border-2 border-primary overflow-hidden">
                            <img className="w-80 lg:w-96" src={picture} alt="hero-image" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl text-primary text-center lg:text-start font-bold mb-5">{title} </h3>
                        <h3 className="text-2xl lg:text-4xl text-center lg:text-start font-bold mb-5">{subTitle} </h3>
                        <p className="text-base lg:text-lg">{description}</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-start mt-5">
                            {
                                steps.map(step => (
                                    <div className="flex justify-center items-center space-x-3 hover:text-primary" key={step.id}>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d={step.icon}></path></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">{step.title}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorksSection