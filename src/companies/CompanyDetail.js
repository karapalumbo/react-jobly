import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";

function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState("");

  const companyInfo = async () => {
    const resp = await JoblyApi.getCompany(handle);
    setCompany(resp);
  };

  useEffect(() => {
    companyInfo();
  }, [handle]);

  return (
    <div>
      <h5>{company.name}</h5>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyDetail;
