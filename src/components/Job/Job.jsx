import PropTypes from 'prop-types';

const Job = ({job}) => {
    return (
        <div className='border'>
            <h3>{job.job_title}</h3>
            <p>{job.company_name}</p>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
};

export default Job;