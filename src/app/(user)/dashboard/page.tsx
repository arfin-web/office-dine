import BookingChart from '@/components/dashboard/BookingChart'
import UserStatsChart from '@/components/dashboard/UserStatsChart'
import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

const stats = [
    {
        id: 1,
        title: "Total Items You Bought",
        value: "20+",
        timeRange: "Jan 1st - Feb 1st"
    },
    {
        id: 2,
        title: "Your Total Spend",
        value: "$ 300",
        timeRange: "Jan 1st - Feb 1st"
    },
    {
        id: 3,
        title: "Total Reviews You have Given",
        value: "10+",
        timeRange: "Jan 1st - Feb 1st"
    },
]

const UserDashboard = async () => {
    // Protect the page from users who are admins
    const isAdmin = await checkRole('admin')
    if (isAdmin) {
        redirect('/')
    }
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 my-5">
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
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                    <div className='lg:col-span-2'>
                        <UserStatsChart />
                    </div>
                    <div>
                        <BookingChart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard