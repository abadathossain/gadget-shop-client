import { FiLogOut } from "react-icons/fi";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import useUserData from "../../hooks/useUserData";
const Sidebar = () => {
    const data = useUserData()
    console.log(data)
    return (
        <div className="bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16">
            <h1 className="text-3xl font-bold mb-8">Gadget Shop</h1>
            <ul className='flex flex-col gap-2'>
                <li className='p-2 border border-black rounded-md'>
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                        <GrOverview />
                        <p>Overview</p>
                    </NavLink>
                </li>
                <li className='p-2 border border-black rounded-md'>
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                        <IoHomeOutline />
                        <p>Home</p>
                    </NavLink>
                </li>
                <li className='p-2 border border-black rounded-md'>
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                        <FiLogOut />
                        <p>Logout</p>
                    </NavLink>
                </li>
            </ul>


        </div>

    )
}

export default Sidebar