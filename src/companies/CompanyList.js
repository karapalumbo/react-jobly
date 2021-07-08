import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../SearchForm";
import { useState, useEffect } from "react";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  const companyInfo = async () => {
    const resp = await JoblyApi.getCompanies();
    setCompanies(resp);
  };

  useEffect(() => {
    companyInfo();
  }, []);

  return (
    <div>
      <SearchForm searchCompanyAndJob={companyInfo} />
      <div>
        {companies.map((c) => {
          return (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CompanyList;
