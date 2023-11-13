import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStordJobApplication } from "../../utitlity/localStorage";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    useEffect(()=>{
        const stordJobIds = getStordJobApplication()

        if(stordJobIds.length > 0){
            const appliedJobs = jobs.filter(job => stordJobIds.includes(job.id));
            console.log(jobs,stordJobIds,appliedJobs)
        }
    },[jobs])

    return (
        <div>
            
        </div>
    );
};

export default AppliedJobs;