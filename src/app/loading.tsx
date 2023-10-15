export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="container min-h-screen mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4">
                <span className="loading loading-ring w-10 lg:w-28"></span>
                <span className="loading loading-ring text-primary w-10 lg:w-28"></span>
                <span className="loading loading-ring text-secondary w-10 lg:w-28"></span>
            </div>
        </div>
    )
}