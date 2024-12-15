import { Outlet } from "react-router-dom"
import Sidebar from "../components/dashboard/Sidebar"

const DashboardLayout = () => {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className='min-h-screen'>
                <Outlet />
            </div>

        </div>
    )
}

export default DashboardLayout