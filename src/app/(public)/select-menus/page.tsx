"use client"
import { useState } from "react";
import foodItems from '@/data/foodItems'
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { addItem } from '@/redux/features/cartSlice'
import Link from "next/link";

const title = "All"
const colorTitle = "Items"
const subTitle = "Pick The Best Option For You"

const days = [
    {
        id: 1,
        name: 'Saturday'
    },
    {
        id: 2,
        name: 'Sunday'
    },
    {
        id: 3,
        name: 'Monday'
    },
    {
        id: 4,
        name: 'Tuesday'
    },
    {
        id: 5,
        name: 'Wednesday'
    },
    {
        id: 6,
        name: 'Thursday'
    }
]

const SelectMenus = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState(20);
    const [selectedCategory, setSelectedCategory] = useState('');
    const cart = useAppSelector((state) => state.cart.items)
    const dispatch = useAppDispatch()

    const searchedItems = searchQuery
        ? foodItems?.filter(
            (food) =>
                food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                food.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : foodItems;


    const filteredfoods =
        selectedCategory
            ? searchedItems?.filter((item) => {
                const isCategoryMatch = selectedCategory
                    ? item.category.toLowerCase() === selectedCategory.toLowerCase()
                    : true;
                return isCategoryMatch
            })
            : searchedItems;
    const categories = Array.from(new Set(foodItems?.map((food) => food.category)));

    const filteredItems = filteredfoods.filter((item) => item.price <= priceRange);

    // Function to update the price range
    const handlePriceChange = (e: any) => {
        setPriceRange(parseFloat(e.target.value));
    };

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <label htmlFor="my-drawer-2" className="btn btn-outline btn-primary btn-sm font-bold drawer-button lg:hidden">
                                Filter
                            </label>
                        </div>
                        <div className="navbar-center">
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="input input-bordered input-sm lg:input-md rounded-full w-40 lg:w-96" />
                            </div>
                        </div>
                        <div className="navbar-end">
                            <label htmlFor="my_modal_6" className="btn btn-ghost btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-8 lg:h-8" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path></svg>
                                <div className="badge badge-secondary badge-sm lg:badge-md">{cart.length}</div>
                            </label>
                        </div>
                    </div>
                    <hr />
                    <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                        <h3 className="text-3xl text-center font-bold mb-4">{title}<span className="text-primary"> {colorTitle}</span></h3>
                        <p className="text-center mb-10">{subTitle}</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
                            {
                                filteredItems.map(item => (
                                    <div className="card w-80 bg-base-100 hover:shadow-lg" key={item.id}>
                                        <figure className='px-3'>
                                            <img src={item.image} alt={item.name} className="rounded-xl" />
                                        </figure>
                                        <div className="px-3">
                                            <h2 className="text-center text-lg lg:text-xl font-bold my-3">{item.name}</h2>
                                            <h2 className="my-2 text-sm font-bold tracking-wide uppercase">{item.category}</h2>
                                            <h3 className='text-lg lg:text-xl'>Price:<span className='text-primary font-bold'> $ {item.price.toFixed(2)}</span></h3>
                                            <select className="select select-primary select-sm w-40 mt-3">
                                                <option disabled selected>Select Day</option>
                                                {
                                                    days.map((day) => (
                                                        <option key={day.id}>{day.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className='flex justify-center items-center my-4'>
                                            <button onClick={() => dispatch(addItem(item))} className="btn btn-outline btn-primary btn-sm normal-case rounded-full">Add To Plate</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="p-4 w-60 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <h1 className="text-2xl font-bold text-center my-5">Set<span className="text-primary"> Filter</span></h1>
                        <input
                            type="range"
                            min="0"
                            max="20" // Set the maximum price range value
                            step="0.01" // Set the step (increments) for the range
                            value={priceRange}
                            onChange={handlePriceChange}
                            className="range range-primary"
                        />
                        <span className="ml-2 font-semibold text-primary text-base">${priceRange.toFixed(2)}</span>
                        <h1 className="text-xl text-primary font-bold mt-5 mb-3">Categories</h1>
                        <div className="grid grid-cols-1">
                            <label className="mb-2">
                                <input
                                    type="radio"
                                    name="categories"
                                    className="radio radio-primary radio-xs"
                                    value=""
                                    checked={selectedCategory === ''}
                                    onChange={(e) => setSelectedCategory('')}
                                />
                                <span className="text-xl font-semibold ml-2">All</span>
                            </label>
                            {categories.map((category) => (
                                <label key={category} className="mb-2">
                                    <input
                                        type="radio"
                                        name="category"
                                        className="radio radio-primary radio-xs"
                                        value={category}
                                        checked={selectedCategory === category}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    />
                                    <span className="text-xl font-semibold ml-2">{category}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-auto">
                    <h1 className="text-2xl font-bold my-5">My<span className="text-primary"> Cart</span></h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {
                                cart.map((item: any) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-6 h-6 lg:w-10 lg:h-10">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item.name}</div>
                                                    <div className="text-sm opacity-50">{item.category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold text-primary">$ {item.price}</div>
                                        </td>
                                        <th>
                                            <button className="btn btn-circle btn-error btn-sm lg:btn-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-8 lg:h-8" fill="hsl(var(--b1))" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                                            </button>
                                        </th>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href='/pricing-plans' className="btn btn-outline btn-primary rounded-full btn-wide mt-4">
                            Confirm
                        </Link>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn btn-sm">Close!</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectMenus