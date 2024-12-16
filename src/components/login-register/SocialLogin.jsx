import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    const { googleLogin } = useAuth()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin().then(() => {
            navigate('/');
        });
    };

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-primary w-full">   <FcGoogle />Google</button>
        </div>
    )
}

export default SocialLogin