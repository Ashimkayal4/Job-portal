import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from '../assets/job.png'
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext)

    const logOut = () => {
        logOutUser()
            .then(res => {
                console.log(res)
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "LogOut successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .then(err => {
                console.log(err)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/job'>Job</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className="w-12 mr-2" src={logo} alt="" />
                <a className="text-2xl">JOB House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                {
                    !user && <>
                        <Link className="border-b-2" to='/register'>Register</Link>
                        <Link to="/login" className="btn">SignIn</Link>
                    </>
                }

                {
                    user && <>
                        <button onClick={logOut} className="btn">LogOut</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;