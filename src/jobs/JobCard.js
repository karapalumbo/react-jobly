import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "reactstrap";
import UserContext from "../UserContext";
import "./JobCard.css";

function JobCard({ id, title, salary, equity, companyName }) {
  const { hasApplied, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  React.useEffect(
    function updateAppliedStatus() {
      setApplied(hasApplied(id));
    },
    [id, hasApplied]
  );

  const handleApply = async () => {
    if (hasApplied(id)) return;
    applyToJob(id);
    setApplied(true);
  };

  return (
    <div className="JobCard">
      <Card className="job-card">
        <div>
          <h5>{title}</h5>
          <p>{companyName}</p>
          {salary && (
            <div>
              <p>Salary: {salaryFormatter.format(salary)}</p>
            </div>
          )}
          {equity !== undefined && (
            <div>
              <p>Equity: {equity}</p>
            </div>
          )}
          <Button
            disabled={applied}
            onClick={handleApply}
            className="apply-btn"
          >
            {applied ? "Applied" : "Apply"}
          </Button>
        </div>
      </Card>
    </div>
  );
}

let salaryFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default JobCard;
