import { BiDollarCircle } from "react-icons/bi";
import { IoCalendarOutline, IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";

import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === +id)
    console.log(job)
    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, salary, job_title } = job;
    const { address, email, phone } = contact_information;

    const hadelApplyJob = () => {
        toast("Job Apply Done");
    }

    return (
        <div>
            <h1 className="text-center font-extrabold text-3xl mt-12 mb-36">Job Details</h1>
            <div className="grid gap-6 md:grid-cols-12 mb-32">

                <div className="p-5 rounded-lg border md:col-span-8 space-y-3 text-[#757575]">
                    <p><span className="font-bold text-xl text-[#1A1919]">Job Description: </span> {job_description}</p>
                    <p><span className="font-bold text-xl text-[#1A1919]">Job Responsibility: </span>{job_responsibility}</p>
                    <h3 className="font-bold text-xl text-[#1A1919]">Educational Requirements:</h3>
                    <p>{educational_requirements}</p>
                    <h3 className="font-bold text-xl text-[#1A1919]">Experiences:</h3>
                    <p>{experiences}</p>
                </div>

                <div className="border p-7 rounded-lg md:col-span-4 space-y-3">
                    <h2 className="font-extrabold text-xl ">Job Details</h2>
                    <hr />
                    <p className="flex items-center space-x-1">
                        <BiDollarCircle className="text-xl"></BiDollarCircle>
                        <span className="font-bold text-xl pr-3">Salary: </span>
                        {salary}
                    </p>
                    <p className="flex items-center space-x-1">
                        <IoCalendarOutline className="text-xl"></IoCalendarOutline>
                        <span className="font-bold text-xl pr-3">Job Title: </span>
                        {job_title}
                    </p>
                    <h2 className="font-extrabold text-xl ">Contact Information</h2>
                    <hr className="my-5" />
                    <p className="flex items-center space-x-1">
                        <IoCallOutline className="text-xl"></IoCallOutline>
                        <span className="font-bold text-xl pr-3">Phone: </span>
                        {phone}
                    </p>
                    <p className="flex items-center space-x-1">
                        <IoMailOutline className="text-xl"></IoMailOutline>
                        <span className="font-bold text-xl pr-3">Email: </span>
                        {email}
                    </p>
                    <p className="flex items-center space-x-1">
                        <IoLocationOutline className="text-3xl"></IoLocationOutline>
                        <span className="font-bold text-xl pr-2">Address: </span>
                        <span className="text-[#757575]">{address}</span>
                    </p>
                    <div className="pt-5">
                        <button onClick={hadelApplyJob} className="btn btn-primary w-full">Apply Now</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;