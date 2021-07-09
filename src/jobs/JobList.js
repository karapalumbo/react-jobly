import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JobCard from "./JobCard";
// import JobDetail from "./JobDetail";

function JobList({ jobs }) {
  //   const [jobs, setJobs] = useState(null);

  //   const jobInfo = async () => {
  //     const resp = await JoblyApi.getJobs();
  //     setJobs(resp);
  //   };

  //   useEffect(() => {
  //     jobInfo();
  //   }, []);

  return (
    <div>
      {/* <JobDetail jobs={jobs} /> */}

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyName={job.companyName}
        />
      ))}
    </div>
  );

  //   return <JobDetail jobs={jobs} />;
}

export default JobList;
