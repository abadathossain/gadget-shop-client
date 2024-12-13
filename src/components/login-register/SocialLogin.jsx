import useAuth from "../../hooks/useAuth"


const SocialLogin = () => {
    const { googleLogin } = useAuth()
    return (
        <div>SocialLogin</div>
    )
}

export default SocialLogin