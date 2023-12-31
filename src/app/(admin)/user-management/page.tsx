const users = [
    {
        id: 1,
        name: "John Doe",
        image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1697192467~exp=1697193067~hmac=a919f78d91bbf83fc207005d92c9ecc8e848e7c7bae964afdb36b665de9859f3",
        date: "20-08-2023"
    },
    {
        id: 2,
        name: "Abraham",
        image: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697379321~exp=1697379921~hmac=e5bedd497bf5a214efe31475299ed33f2a04329791bdf8c632addae4d1f874f2",
        date: "24-08-2023"
    },
    {
        id: 3,
        name: "Linoln",
        image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1697379366~exp=1697379966~hmac=cda744fde9369eef942c23f0fb7eb31204c363d39b275837fc20d011b1c69a87",
        date: "27-08-2023"
    },
]

const UserManagement = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-10 mt-5 mb-20 lg:mb-5">
                <h1 className="text-2xl font-bold mb-5">Manage Your<span className="text-primary"> Users</span></h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-primary text-base">User</th>
                                <th className="text-primary text-base">Date</th>
                                <th className="text-primary text-base">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => (
                                    <tr key={user.id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-8 h-8 lg:w-12 lg:h-12">
                                                        <img src={user.image} alt={user.name} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.date}
                                        </td>
                                        <td>
                                            <button className="btn btn-circle btn-sm lg:btn-md btn-error">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 lg:w-7 lg:h-7" fill="hsl(var(--b1))" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserManagement