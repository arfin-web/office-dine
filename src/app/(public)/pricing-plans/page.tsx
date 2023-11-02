import Link from "next/link"

const plans = [
    {
        id: 1,
        name: 'Basic',
        for: '1 Month',
        price: '$30.95',
        coreStyles: 'bg-neutral text-base-100',
        buttonStyle: 'btn bg0 btn-primary btn-sm rounded-full mt-4'
    },
    {
        id: 2,
        name: 'Standard',
        for: '2 Month',
        price: '$55.95',
        coreStyles: 'bg-primary text-base-100',
        buttonStyle: 'btn bg-base-100 btn-sm rounded-full mt-4'
    },
    {
        id: 3,
        name: 'Premium',
        for: '3 Month',
        price: '$85.95',
        coreStyles: 'bg-secondary text-base-100',
        buttonStyle: 'btn btn-bg-base-100 btn-sm rounded-full mt-4'
    },
]

const PricingPlans = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 my-10">
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
                                        {plan.price}
                                    </p>
                                    <p className="box-border m-0 border-solid" style={{ borderImage: 'initial' }}>
                                        / Person
                                    </p>
                                </div>
                                <h3
                                    className="m-0 text-2xl font-semibold leading-tight tracking-tight border-0 border-base-100 mt-4">
                                    For {plan.for}
                                </h3>
                                <Link href='/place-order' className={plan.buttonStyle}>
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