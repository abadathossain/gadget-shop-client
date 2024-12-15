import { useLocation } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Loading from "../../pages/Loading"

const PrivateROute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace />
}

export default PrivateROute