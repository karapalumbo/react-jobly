import JoblyApi from "../api/api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../forms/SearchForm";
import { useState, useEffect } from "react";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  const companyInfo = async (name) => {
    const resp = await JoblyApi.getCompanies(name);
    setCompanies(resp);
  };

  useEffect(() => {
    companyInfo();
  }, []);

  if (!companies) return <div>Loading...</div>;

  return (
    <div>
      <SearchForm search={companyInfo} />

      {companies.length ? (
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
      ) : (
        <p>Sorry, no results found.</p>
      )}
    </div>
  );
}

export default CompanyList;
