import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobDetail from "../jobs/JobDetail";
import Loading from "../Loading";
import "./CompanyDetail.css";

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

  if (!company) return <Loading />;

  return (
    <div>
      <div className="company-info">
        <h3>{company.name}</h3>
        <p>{company.description}</p>
      </div>
      <JobDetail jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
