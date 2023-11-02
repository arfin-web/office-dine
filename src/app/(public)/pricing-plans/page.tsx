"use client"
import { useAppSelector } from "@/redux/hooks"
import Link from "next/link"
import plans from '@/data/plans'

const PricingPlans = () => {
    const cart = useAppSelector((state) => state.cart.items)
    const totalAmount = cart.reduce((total, item: any) => {
        return total + item.price;
    }, 0);
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                <h1 className="text-2xl lg:text-4xl text-center font-bold mb-10">Select A <span className="text-primary">Plan</span></h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 place-items-stretch">
                    {
                        plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative flex flex-col items-center p-3 rounded-xl ${plan.coreStyles}`}>
                                <h3
                                    className="m-0 text-2xl font-semibold leading-tight tracking-tight border-0 border-base-100 sm:text-3xl md:text-4xl">
                                    {plan.name}
                                </h3>
                                <div className="flex items-end mt-6 leading-7 border-0 border-base-100">
                                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                                        {
                                            totalAmount ? totalAmount * plan.id : plan.price
                                        }
                                    </p>
                                    <p className="box-border m-0 border-solid" style={{ borderImage: 'initial' }}>
                                        / Person
                                    </p>
                                </div>
                                <h3
                                    className="m-0 text-2xl font-semibold leading-tight tracking-tight border-0 border-base-100 mt-4">
                                    For {plan.for}
                                </h3>
                                <Link href={`/pricing-plans/checkout/${plan.id}`} className={plan.buttonStyle}>
                                    Start Now
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PricingPlans