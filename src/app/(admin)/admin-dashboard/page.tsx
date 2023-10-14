const stats = [
    {
        id: 1,
        title: "Total Deals",
        value: "200+",
        timeRange: "Jan 1st - Feb 1st"
    },
    {
        id: 2,
        title: "Total Items",
        value: "300+",
        timeRange: "Jan 1st - Feb 1st"
    },
    {
        id: 3,
        title: "Total Profit",
        value: "$ 10000+",
        timeRange: "Jan 1st - Feb 1st"
    },
]

const AdminDashboard = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 mt-5 mb-20 lg:mb-5">
                <div className="w-full stats stats-vertical lg:stats-horizontal shadow">
                    {
                        stats.map((stat) => (
                            <div className="stat" key={stat.id}>
                                <div className="stat-title">{stat.title}</div>
                                <div className="stat-value text-primary">{stat.value}</div>
                                <div className="stat-desc">{stat.timeRange}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AdminDashboard