import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStordJobApplication } from "../../utitlity/localStorage";
import JobApplied from "../JobApplied/JobApplied";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJob, setAppliedJob] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);

    const handelShowFilter = filter => {
        if(filter === 'All'){
            setDisplayJob(appliedJob)
        }
        else if(filter === 'Remote'){
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJob(remoteJobs)
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === "Onsite")
            setDisplayJob(onsiteJobs)
        }
    }

    useEffect(() => {
        const stordJobIds = getStordJobApplication()

        if (stordJobIds.length > 0) {
            const jobsApplied = jobs.filter(job => stordJobIds.includes(job.id));
            // console.log(jobs, stordJobIds, jobsApplied)
            setAppliedJob(jobsApplied);
            setDisplayJob(jobsApplied);
        }
    }, [jobs])

    return (
        <div className=" space-y-3 my-20">
            <details className="dropdown">
                <summary className="m-1 btn normal-case">Filter By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handelShowFilter('All')}><a>All</a></li>
                    <li onClick={()=> handelShowFilter('Remote')}><a>Remote</a></li>
                    <li onClick={()=> handelShowFilter('Onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            {
                displayJob.map(job => <JobApplied key={job.id} job={job}></JobApplied>)
            }
        </div>
    );
};

export default AppliedJobs;