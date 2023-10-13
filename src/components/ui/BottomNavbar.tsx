import Link from 'next/link'
import { PiBowlFoodThin, PiHouseLineThin, PiUserCircleGearThin } from 'react-icons/pi'

const BottomNavbar = () => {
    return (
        <>
            <div className="btm-nav lg:hidden">
                <button className="text-primary">
                    <Link href='/'>
                        <span className='text-2xl'><PiBowlFoodThin /></span>
                    </Link>
                </button>
                <button className="text-primary active">
                    <Link href='/'>
                        <span className='text-2xl'><PiHouseLineThin /></span>
                    </Link>
                </button>
                <button className="text-primary">
                    <Link href='/'>
                        <span className='text-2xl'><PiUserCircleGearThin /></span>
                    </Link>
                </button>
            </div>
        </>
    )
}

export default BottomNavbar