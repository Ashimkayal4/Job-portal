/* eslint-disable react/prop-types */

import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const {_id, title, company_logo, salaryRange, requirements ,location,
        company ,description }=job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="flex gap-2 m-2 items-center">
                <figure>
                    <img
                        src={company_logo}
                        className="w-12"
                        alt="Shoes" />
                </figure>
                <div>
                    <h1 className="text-2xl">{company}</h1>
                    <p className="flex items-center gap-1"> <FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                </div>
         </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <p className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
                    {
                        requirements.map((skill ,index) => <p
                            key={index} className="btn">{skill}
                        </p>)
                    }
                </p>
                <div className="card-actions items-center mt-2 justify-end">
                    <p>salary : {salaryRange.min}-{salaryRange.max} {salaryRange.currency }</p>
                    <Link to={`/jobs/details/${_id}`}>
                        <button className="btn btn-primary">Job Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;