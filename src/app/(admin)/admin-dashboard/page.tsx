import AdminStatsChart from '@/components/dashboard/AdminStatsChart'
import FoodItemsChart from '@/components/dashboard/FoodItemsChart'
import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

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

const AdminDashboard = async () => {
    // Protect the page from users who are not admins
    const isAdmin = await checkRole('admin')
    if (!isAdmin) {
        redirect('/')
    }
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
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                    <div className='lg:col-span-2'>
                        <AdminStatsChart />
                    </div>
                    <div>
                        <FoodItemsChart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard