import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useForm } from "react-hook-form";

const Register = () => {
    const { createUser } = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // console.log(createUser)
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        navigate('/')
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })}

                            />
                            {errors.email && <span>This field is required..........</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                {...register("password", { required: true, minLength: 6 }

                                )}
                            />
                            {errors.password?.type === "password" && <span>This field is required pass..........</span>}
                            {errors.password?.type === "minLength" && <span>This field is not 6 chars..........</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => {
                                        if (watch('password') != value) {
                                            return "your password did not match"
                                        }
                                    }
                                }

                                )}
                            />
                            {errors.confirmPassword && <span>This field is not match..........</span>}


                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p>If any account then <span className="text-cyan-500"><Link to='/login'>Login</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register