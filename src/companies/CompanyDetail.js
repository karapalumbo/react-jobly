import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobList from "../jobs/JobList";

function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState(null);

  const companyInfo = async () => {
    const resp = await JoblyApi.getCompany(handle);
    setCompany(resp);
  };

  useEffect(() => {
    companyInfo();
  }, [handle]);

  if (!company) return <div>Still loading</div>;

  return (
    <div>
      <h5>{company.name}</h5>
      <p>{company.description}</p>
      <JobList job={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
