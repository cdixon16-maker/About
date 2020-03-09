import React from 'react';

function Job({job, index, toggleJob}) {
    return (
        <div 
            className={"job " + (job.open ? 'open' : '')}
            key={index}
            onClick={() => toggleJob(index)}
        >
            <div className="job-title">
               {job.title} 
            </div>
            <div className="job-detail">
               {job.detail} 
            </div>
        </div>
    )
}

export default Job;