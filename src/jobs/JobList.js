import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JobCard from "./JobCard";
import { Card } from "reactstrap";

function JobList() {
  const [jobs, setJobs] = useState([]);

  const jobInfo = async () => {
    const resp = await JoblyApi.getJobs();
    setJobs(resp);
  };

  useEffect(() => {
    jobInfo();
  }, []);

  return (
    <div>
      <div>
        {jobs.map((job) => {
          return (
            <Card>
              <JobCard
                key={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
                companyName={job.companyName}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default JobList;
