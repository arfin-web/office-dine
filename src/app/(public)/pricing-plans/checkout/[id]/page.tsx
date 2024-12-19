"use client";

import { useAppSelector } from "@/redux/hooks";
import { loadStripe } from "@stripe/stripe-js";
import plans from "@/data/plans";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckOut = ({ params }: { params: { id: number } }) => {
    const cart = useAppSelector((state) => state.cart.items);
    const planPrice = plans[0].price * params.id;

    const totalAmount = cart.reduce((total, item: any) => {
        return total + item.price;
    }, 0);
    const initialPayment = totalAmount * params.id;
    const totalPayment = initialPayment.toFixed(2);

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            const response = await fetch("/api/checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items: cart.map((item: any) => ({
                        name: item.name,
                        image: item.image,
                        price: item.price,
                        quantity: 1, // Adjust quantity if needed
                    })),
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const session = await response.json();

            if (stripe) {
                await stripe.redirectToCheckout({ sessionId: session.id });
            }
        } catch (error) {
            console.error("Error creating checkout session:", error);
        }
    };

    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 mt-5 mb-20 lg:mb-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center lg:place-items-stretch">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="overflow-x-auto lg:mt-8">
                            <table className="table">
                                {cart.map((item: any) => (
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
                                ))}
                            </table>
                            <h1 className="text-2xl font-semibold mt-5">
                                Total Amount:
                                <span className="text-primary font-bold"> $ {totalAmount ? totalPayment : planPrice}</span>
                            </h1>
                        </div>
                        <div className="container mx-auto flex justify-start items-center">
                            <div className="w-full max-w-sm shadow-md rounded-lg p-6 border border-primary">
                                <h2 className="text-xl font-bold mb-4">Test Card Details</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span>Card Number:</span>
                                        <span className="font-medium">4242 4242 4242 4242</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Expiry Date:</span>
                                        <span className="font-medium">Any valid future date (e.g., 12/34)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>CVC:</span>
                                        <span className="font-medium">Any 3 digits (e.g., 123)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>ZIP Code:</span>
                                        <span className="font-medium">Any valid ZIP (e.g., 12345)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold mb-3">Complete Your <span className="text-primary">Payment</span></h1>
                            <button onClick={handlePayment} className="btn btn-primary mt-6">
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOut;