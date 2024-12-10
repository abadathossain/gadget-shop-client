
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Main = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Main