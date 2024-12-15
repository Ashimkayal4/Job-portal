import Lottie from "lottie-react";
import lottie from '../../assets/animation/Animation - 1733853146710 (1).json'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { signInUser, setUser ,setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state || '/'

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(res => {
                setUser(res.user)
                form.reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from) 
                setLoading(true)
            })
            .then(err => {
                console.log(err)
            })
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <p className="py-6">
                        <Lottie animationData={lottie}></Lottie>
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold flex justify-center items-center mt-2">Login now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;