import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import { useState, useEffect } from "react";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  const companyInfo = async () => {
    const resp = await JoblyApi.getCompanies();
    setCompanies(resp);
  };

  useEffect(() => {
    companyInfo();
  });

  return (
    <div>
      {companies.map((c) => {
        return <CompanyCard name={c.name} description={c.description} />;
      })}
    </div>
  );
}

export default CompanyList;
