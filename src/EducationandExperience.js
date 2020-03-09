import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EducationandExperience.css";
import Job from './Job';


function EducationandExperience(props)
{
    const [job, setJobs] = useState([
        
        {
            title: <h4>Experience</h4>,
            detail: 
            <div>
            <h4>Alarm Monitoring Operator</h4>
            <p>Vivint Smart Home</p> 
            <p>January 2015 - April 2015</p>
            <p>Provided front-line alarm monitoring and customer interaction for burglary, medical, fire and other emergency services.  Role included customer interaction and coordination with emergency responders to care for customers experiencing emergencies.</p>
            <h4>Alarm Monitoring Operator</h4>
            <p>Avantguard</p>
            <p>May 2015 to July 2017</p>
            <p>Provided front-line customer alarm response and interaction, especially focused on medical alarms, often involving elderly customers and those needing medical attention. Responsibilities included speaking with customers, assessing their need for medical attention, communicating with emergency responders to send assistance, when required.</p>
            <h4>Financial Planning and Analysis Intern</h4>
            <p>Vivint Smart Home</p>
            <p>August 2017 to November 2017</p>
            <p>Performed various Financial Planning and Analysis projects, including labor optimization analysis for Supply Chain, comparing use of internal resources to resources provided through temp services; provided support for Marketing Department’s month-end budget review; updated and edited 2018 budget modeling template and customer attrition template.</p>
            <h4>Accounting Clerk</h4>  
            <p>Jordan Credit Union</p>  
            <p>February 2018 to August 2019</p> 
            <p>Responsibilities include managing payments for 25 suppliers, tracking Small Business Administration (SBA) payments, remitting escrow payments on behalf of mortgage customers, reviewing general ledgers and ensuring they are balanced and transactions are correctly posted. </p>
            </div>,
            open: false
        },
        {
            title: <h4>Education</h4>,
            detail: 
            <div>
                    <h4>Brigham Young University-Idaho</h4>
                        <p>Business Management Emphasis in Finance</p>
                        <p>Graduated in  December 2017</p>
                     <h4>Helio Training</h4>
                         <p>Full Stack Web Development Certification of Course Completion</p>
                        <p>Graduated in March 2020</p></div>,
            open: false,
        },
    ]);
    

    const toggleJob = index => {
        setJobs(job.map((job, i) =>{
            if(i === index) {
                job.open = !job.open
            }

            return job;
        }))
    }
    return (
        

        <div className="job">
            {job.map((job, i) => (
                <Job job={job} index={i} toggleJob={toggleJob} />
            ))}
        </div>
    );
            }
    /*<div className="eduandexp">
        <div className="experience">
            <h3>Experiences</h3>
            <h4>Alarm Monitoring Operator</h4>
            <p>Vivint Smart Home</p> 
            <p>January 2015 - April 2015</p>
            <p>Provided front-line alarm monitoring and customer interaction for burglary, medical, fire and other emergency services.  Role included customer interaction and coordination with emergency responders to care for customers experiencing emergencies.</p>
            <h4>Alarm Monitoring Operator</h4>
            <p>Avantguard</p>
            <p>May 2015 to July 2017</p>
            <p>Provided front-line customer alarm response and interaction, especially focused on medical alarms, often involving elderly customers and those needing medical attention. Responsibilities included speaking with customers, assessing their need for medical attention, communicating with emergency responders to send assistance, when required.</p>
            <h4>Financial Planning and Analysis Intern</h4>
            <p>Vivint Smart Home</p>
            <p>August 2017 to November 2017</p>
            <p>Performed various Financial Planning and Analysis projects, including labor optimization analysis for Supply Chain, comparing use of internal resources to resources provided through temp services; provided support for Marketing Department’s month-end budget review; updated and edited 2018 budget modeling template and customer attrition template.</p>
            <h4>Accounting Clerk</h4>  
            <p>Jordan Credit Union</p>  
            <p>February 2018 to August 2019</p> 
            <p>Responsibilities include managing payments for 25 suppliers, tracking Small Business Administration (SBA) payments, remitting escrow payments on behalf of mortgage customers, reviewing general ledgers and ensuring they are balanced and transactions are correctly posted. </p>
        </div>
        <div className="education">
            <h3>Education</h3>
            <h4>Brigham Young University-Idaho</h4>
            <p>Business Management Emphasis in Finance</p>
            <p>Graduated in  December 2017</p>
            <h4>Helio Training</h4>
            <p>Full Stack Web Development Certification of Course Completion</p>
            <p>Graduated in March 2020</p>
        </div>
        </div>
    
    )
}
*/
export default EducationandExperience;