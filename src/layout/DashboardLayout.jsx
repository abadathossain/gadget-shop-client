import { Outlet } from "react-router-dom"
import Sidebar from "../components/dashboard/Sidebar"

const DashboardLayout = () => {
    return (
        <div className="grid lg:grid-cols-12">
            <div className="col-span-2">
                <Sidebar />
            </div>
            <div className='min-h-screen p-12'>
                <Outlet />
            </div>

        </div>
    )
}

export default DashboardLayout