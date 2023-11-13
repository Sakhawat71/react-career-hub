import PropTypes from 'prop-types';

const JobApplied = ({job}) => {
    console.log(job)
    const {company_name,logo,job_title,salary,remote_or_onsite} = job;
    return (
        <div className='border rounded-lg p-7 flex gap-7'>
            <div>
                <figure>
                    <img src={logo} alt="" />
                </figure>
            </div>
            <div>
                <h2>{job_title}</h2>
                <p>{company_name}</p>
                <h4>{salary}</h4>
                <h3 className='text-blue-600'>{remote_or_onsite}</h3>
            </div>
        </div>
    );
};

JobApplied.propTypes = {
    job: PropTypes.object.isRequired,
};

export default JobApplied;