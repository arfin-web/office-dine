export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="container min-h-screen mx-auto">
            <div className="w-full flex justify-center items-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        </div>
    )
}