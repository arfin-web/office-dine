const title = "Welcome"
const colorTitle = "Food Lover"
const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
const buttonText = "Start Grabing"

const HeroSection = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 place-items-center">
                    <div>
                        <img className="lg:hidden" src="/mobileHeroImg.png" alt="mobileHeroImg" />
                        <img className="hidden lg:block" src="/heroImgOne.png" alt="heroImgOne" />
                    </div>
                    <div>
                        <h1 className="text-3xl text-center font-bold mb-4">{title}<span className="text-primary"> {colorTitle}</span></h1>
                        <p className="text-center mb-4">{description}</p>
                        <div className="flex justify-center items-center">
                            <button className="btn btn-wide btn-primary rounded-full normal-case text-xl">{buttonText}</button>
                        </div>
                    </div>
                    <div>
                        <img className="hidden lg:block" src="/heroImgTwo.png" alt="heroImgTwo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection