import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
   const job=useLoaderData()
    return (
        <div className="m-10">
            <h1 className="text-2xl">{job.title}</h1>
            <Link to={`/jobApply/${job._id}`}>
                <button className="btn btn-primary mt-3">Apply now</button>
            </Link>
        </div>
    );
};

export default Details;