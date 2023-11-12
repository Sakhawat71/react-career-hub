import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="my-10">
            <div className="text-center space-y-3 my-10">
                <h1 className="text-4xl font-extrabold text-[#1A1919]">Featured Jobs</h1>
                <p className="text-xl font-normal text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center my-3">
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary normal-case bg-gradient-to-r from-sky-500 to-indigo-500 border-none text-white font-extrabold text-base">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;