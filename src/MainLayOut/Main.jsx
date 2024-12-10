import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";

const Main = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;