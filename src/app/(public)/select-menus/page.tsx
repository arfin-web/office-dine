"use client"
import foodItems from '@/data/foodItems'
import { useAppDispatch } from '@/redux/hooks'
import { addItem } from '@/redux/features/cartSlice'

const title = "All"
const colorTitle = "Items"
const subTitle = "Pick The Best Option For You"

const SelectMenus = () => {
    const dispatch = useAppDispatch()
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                <h3 className="text-3xl text-center font-bold mb-4">{title}<span className="text-primary"> {colorTitle}</span></h3>
                <p className="text-center mb-10">{subTitle}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
                    {
                        foodItems.map(item => (
                            <div className="card w-80 bg-base-100 hover:shadow-lg" key={item.id}>
                                <figure className='px-3'>
                                    <img src={item.image} alt={item.name} className="rounded-xl" />
                                </figure>
                                <h2 className="text-center text-lg lg:text-xl font-bold my-3">{item.name}</h2>
                                <h2 className="my-2 text-sm font-bold tracking-wide uppercase">{item.category}</h2>
                                <h3 className='text-lg lg:text-xl'>Price:<span className='text-primary font-bold'> $ {item.price}</span></h3>
                                <div className='flex justify-center items-center my-4'>
                                    <button onClick={() => dispatch(addItem(item))} className="btn btn-outline btn-primary btn-sm normal-case rounded-full">Add To Plate</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SelectMenus