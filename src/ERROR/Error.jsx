import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-10 gap-6">
            <h1 className="text-4xl">OOPS!</h1>
            <Link to="/"><button className="btn btn-outline">Go to Home</button></Link>
            
        </div>
    );
};

export default Error;