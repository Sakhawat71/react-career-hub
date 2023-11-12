import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div className="text-center space-y-3 my-3">
                <h1 className="text-4xl font-extrabold text-[#1A1919]">Featured Jobs</h1>
                <p className="text-xl font-normal text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                <p>{jobs.length}</p>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;