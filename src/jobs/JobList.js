import JobCard from "./JobCard";
import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";

function JobList() {
  const [jobs, setJobs] = useState(null);

  const jobInfo = async () => {
    const j = await JoblyApi.getJobs();
    setJobs(j);
  };

  useEffect(() => {
    jobInfo();
  }, []);

  if (!jobs) return <div>Loading...</div>;

  return (
    <div>
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
}

export default JobList;
