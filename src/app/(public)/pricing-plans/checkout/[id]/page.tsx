"use client"
import { useAppSelector } from "@/redux/hooks"
import plans from "@/data/plans"
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

const CheckOut = ({ params }: { params: { id: number } }) => {
    const cart = useAppSelector((state) => state.cart.items)
    const planPrice = plans[0].price * params.id

    const totalAmount = cart.reduce((total, item: any) => {
        return total + item.price;
    }, 0);
    const totalPayment = totalAmount.toFixed(2)

    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 mt-5 mb-20 lg:mb-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center lg:place-items-stretch">
                    <div className="overflow-x-auto lg:mt-8">
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
                                    </tr>
                                ))
                            }
                        </table>
                        <h1 className="text-2xl font-semibold mt-5">Total Amount:<span className="text-primary font-bold"> $ {totalAmount ? totalPayment : planPrice}</span></h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <form className="card-body">
                            <h1 className="text-2xl font-bold mb-3">Shipping<span className="text-primary"> Information</span></h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="Full Address" className="input input-bordered w-full" required />
                            </div>
                            <h1 className="text-2xl font-bold my-5">Payment<span className="text-primary"> Information</span></h1>
                            <div className="join">
                                <input type="text" className="input input-bordered join-item" placeholder="Card Number" />
                                <button className="btn btn-ghost border-2 border-base-200 join-item">
                                    <img
                                        src="https://cdn.shoplightspeed.com/shops/610354/files/47598952/credit-cards-accepted-logo.jpg"
                                        alt="payment-options"
                                        className="h-10"
                                    />
                                </button>
                            </div>
                            <div className="join">
                                <div>
                                    <div>
                                        <input className="input input-bordered join-item" placeholder="MM / YY" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <input className="input input-bordered join-item" placeholder="cvc" />
                                    </div>
                                </div>
                                <div className="indicator">
                                    <button className="btn btn-ghost border-2 border-base-200 join-item">
                                        <img
                                            src="https://navi.com/blog/wp-content/uploads/2022/07/Credit-Card-CVV-Number.jpg"
                                            alt="cvc"
                                            className="h-10"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <label htmlFor="my_modal_7" className="btn btn-primary">Confirm</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="grid grid-cols-1 place-items-center">
                        <h1 className='text-center text-8xl text-primary'><IoCheckmarkDoneCircleOutline /></h1>
                        <h3 className="text-center text-lg font-semibold my-4">Successfully Paid</h3>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    )
}

export default CheckOut