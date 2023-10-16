"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from "next/link"
import PackageReviews from "@/components/views/PackageReviews"

const title = "Custom Menu Planning"
const description = `A custom menu planning service for your business.
We can help you plan a meal, dinner or lunch that suits all of the guests.
We can help you plan a meal, dinner or lunch that suits all of the guests in your restaurant.
We can help you plan a meal, dinner or lunch that suits all of the guests in your restaurant.
We can help you plan a meal, dinner or lunch that suits all of the guests in your restaurant.
`
const subTitle = "Whats"
const colorSubTitle = "Includes"


const includings = [
    {
        id: 1,
        title: "Morning Breakfast",
        icon: "M186.66,59.56C168.47,32.29,146.54,16,128,16S87.53,32.29,69.34,59.56C50.7,87.54,40,121.23,40,152a88,88,0,0,0,176,0C216,121.23,205.3,87.54,186.66,59.56ZM128,224a72.08,72.08,0,0,1-72-72c0-27.69,9.72-58.15,26.66-83.56C97.19,46.64,115.41,32,128,32c9.5,0,22.2,8.33,34.1,21.78L122,98.67a8,8,0,0,0,4,13.09l24.6,6.15-6.5,32.52a8,8,0,0,0,6.27,9.41A7.77,7.77,0,0,0,152,160a8,8,0,0,0,7.83-6.43l8-40a8,8,0,0,0-5.9-9.33l-19.16-4.79L172.1,66.6c.42.61.83,1.22,1.24,1.84C190.28,93.85,200,124.31,200,152A72.08,72.08,0,0,1,128,224Z",
    },
    {
        id: 2,
        title: "Luscious Lunch",
        icon: "M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z",
    },
    {
        id: 3,
        title: "Delicious Snacks",
        icon: "M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z",
    },
    {
        id: 4,
        title: "Healthy Dinner",
        icon: "M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z",
    },
]

function ThumbnailPlugin(mainRef: any) {
    return (slider: any) => {
        function removeActive() {
            slider.slides.forEach((slide: any) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx: any) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide: any, idx: any) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main: any) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

const DealDetailsOne = () => {

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    const foodImages = [
        {
            key: 1,
            imageSrc: "https://img.freepik.com/free-photo/plate-with-keto-diet-food-cherry-tomatoes-chicken-breast-eggs-carrot-salad-with-arugula-spinach-keto-lunch-top-view_2829-16941.jpg?w=996&t=st=1697203581~exp=1697204181~hmac=c2963519318d4058cd72791d33aee369915f6da2d1264c472f84238b7edd848e",
        },
        {
            key: 2,
            imageSrc: "https://img.freepik.com/free-photo/fried-fish-carp-fresh-vegetable-salad-wooden-table_2829-19923.jpg?w=900&t=st=1697203599~exp=1697204199~hmac=6228425ac275803621fa5d8cf531c8a13d7f5d82ec74ad06993ff8dcb02084df",
        },
        {
            key: 3,
            imageSrc: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=900&t=st=1697203627~exp=1697204227~hmac=d3bba058dd68de05905ff6bddc2e058e2cb945ad3b4d359f0eb93049cc93ca84",
        },
        {
            key: 4,
            imageSrc: "https://img.freepik.com/free-photo/side-view-doner-plate-with-french-fries-tomato-fresh-cucumber-yogurt-bread-table_141793-4969.jpg?w=996&t=st=1697203648~exp=1697204248~hmac=d7ae2e63f11a20712b9bdbb5c842e04f51b08ee40c4b3f5a7e6e79cebbf0f870",
        },
        {
            key: 5,
            imageSrc: "https://img.freepik.com/free-photo/chicken-steak-with-lemon-tomato-chili-carrot-white-plate_1150-25887.jpg?w=996&t=st=1697203670~exp=1697204270~hmac=76098df35ff9957ad878a5a0a99a9ecb6e696f0fdfad26ee0fb0ff794c0edca1",
        },
    ];

    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    <div className="grid grid-cols-1 gap-y-2 place-items-center">
                        <div ref={sliderRef} className="keen-slider">
                            {
                                foodImages.map((image) => (
                                    <div key={image.key} className="carousel-item overflow-hidden keen-slider__slide">
                                        <img src={image.imageSrc} className=" rounded-2xl" alt="gallary" />
                                    </div>
                                ))
                            }
                        </div>
                        <div ref={thumbnailRef} className="keen-slider thumbnail">
                            {
                                foodImages.map((image) => (
                                    <div key={image.key} className="carousel-item overflow-hidden keen-slider__slide">
                                        <img src={image.imageSrc} className=" rounded-2xl" alt="gallary" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className="text-primary text-2xl lg:text-4xl font-bold mb-5">{title}</h1>
                        <p>{description}</p>
                        <h2 className="text-2xl font-bold my-5">{subTitle}<span className="text-primary"> {colorSubTitle}</span></h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-start mt-5">
                            {
                                includings.map(include => (
                                    <div className="flex justify-center items-center space-x-3 hover:text-primary" key={include.id}>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d={include.icon}></path></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">{include.title}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <Link href="/select-menus" className="btn btn-outline btn-primary normal-case rounded-full mt-8">Select Your Favourite Menus</Link>
                    </div>
                </div>
            </div>
            <PackageReviews />
        </>
    )
}

export default DealDetailsOne