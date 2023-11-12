import PropTypes from 'prop-types';
import { IoLocationOutline } from 'react-icons/io5';
import { BiDollarCircle } from 'react-icons/bi';

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow border my-2">

            <figure className='mt-3 pt-5'>
                <img className="" src={logo} alt="icon" />
            </figure>

            <div className="card-body">
                <h2 className="font-extrabold text-2xl my-0 text-[#474747]">{job_title}</h2>
                <p className='font-semibold text-xl my-1 text-[#757575]'>{company_name}</p>
                <div className='space-x-3'>
                    <button className='btn bg-white hover:bg-white normal-case font-extrabold text-base rounded-lg border-2 py-2 px-4 text-[#7E90FE] border-[#7E90FE]'>{remote_or_onsite}</button>
                    <button className='btn bg-white hover:bg-white normal-case font-extrabold text-base rounded-lg border-2 py-2 px-4 text-[#7E90FE] border-[#7E90FE]'>{job_type}</button>
                </div>

                <div className='flex gap-4 my-2 font-semibold text-xl text-[#757575]'>
                    <h2 className='flex gap-1 '><IoLocationOutline className='text-2xl text-[#757575]'></IoLocationOutline> {location}</h2>
                    <h2 className='flex gap-1'><BiDollarCircle className='text-2xl'></BiDollarCircle> {salary}</h2>
                </div>

                <div className="card-actions">
                    <button className="btn btn-primary normal-case bg-[#7E90FE] text-white hover:bg-[#9873FF] border-none font-extrabold  text-base">View Details</button>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
};

export default Job;