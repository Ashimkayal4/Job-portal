import { Outlet } from "react-router-dom";
import Navbar from "../Common-file/Navbar";
import Footer from "../Common-file/Footer";

const Main = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;