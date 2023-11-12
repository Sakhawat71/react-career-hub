import PropTypes from 'prop-types';

const Job = ({job}) => {
    return (
        <div>
            <h3>{job.id}</h3>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
};

export default Job;