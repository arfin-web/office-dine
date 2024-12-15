import Link from "next/link"

const menus = [
    {
        id: 1,
        name: "All Deals",
        link: "/all-deals"
    },
    {
        id: 2,
        name: "All Items",
        link: "/select-menus"
    },
]

const NavMenus = () => {
    return (
        <>
            {
                menus.map(item => (
                    <li key={item.id}><Link className="text-base lg:text-lg font-bold hover:text-primary" href={item.link}>{item.name}</Link></li>
                ))
            }
        </>
    )
}

export default NavMenus