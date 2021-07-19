import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobDetail from "../jobs/JobDetail";

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

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <h5>{company.name}</h5>
      <p>{company.description}</p>
      <JobDetail jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
