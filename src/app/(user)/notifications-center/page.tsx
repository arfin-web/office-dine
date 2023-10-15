const notifications = [
    {
        id: 1,
        message: 'OfficeDine Mobile App is Coming Soon!',
        type: 'chat-bubble-info',
    },
    {
        id: 2,
        message: "Use Authourized Payment Methods",
        type: 'chat-bubble-warning',
    },
    {
        id: 3,
        message: "Authenticatiobn Failed!",
        type: 'chat-bubble-error'
    }
]

const NotificationCenter = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5">
                <h1 className="text-2xl font-bold text-center lg:text-start my-5">All<span className="text-primary"> Notifications</span></h1>
                {
                    notifications.map((notification) => (
                        <div className="chat chat-start mb-4" key={notification.id}>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/logo.png" alt="logo" />
                                </div>
                            </div>
                            <div className={`chat-bubble ${notification.type}`}>{notification.message}</div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default NotificationCenter