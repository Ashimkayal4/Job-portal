import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div className="mt-2">
            <h1>All jobs : { jobs.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
                {
                    jobs.map(job => <JobCard
                        key={job._id}
                        job={job}
                    ></JobCard>)
                }
         </div>
        </div>
    );
};

export default AllJobs;