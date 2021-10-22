import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import SearchForm from "../forms/SearchForm";
import JobDetail from "./JobDetail";
import Loading from "../Loading";

function JobList() {
  const [jobs, setJobs] = useState(null);

  const jobInfo = async (title) => {
    const j = await JoblyApi.getJobs(title);
    setJobs(j);
  };

  useEffect(() => {
    jobInfo();
  }, []);

  if (!jobs) return <Loading />;

  return (
    <div>
      <SearchForm search={jobInfo} />
      {jobs.length ? (
        <JobDetail jobs={jobs} />
      ) : (
        <p>Sorry, no results found.</p>
      )}
    </div>
  );
}

export default JobList;
