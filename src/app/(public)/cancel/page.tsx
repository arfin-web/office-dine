export default function Cancel() {
    return (
        <div className="container mx-auto text-center h-screen">
            <div className="flex flex-col justify-center items-center h-4/5">
                <h1 className="text-4xl font-bold text-error">Payment Canceled</h1>
                <p className="mt-5">You can try again anytime.</p>
            </div>
        </div>
    );
}