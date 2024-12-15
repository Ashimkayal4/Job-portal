import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../MainLayOut/Main";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../ERROR/Error";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";



const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<Error></Error>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/jobs/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/details/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element:<JobApply></JobApply>
            }
        ]
    },
]);

export default router;