import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "reactstrap";
import UserContext from "../UserContext";
import "./JobCard.css";

function JobCard({ id, title, salary, equity, companyName }) {
  const { applyForJob, hasApplied } = useContext(UserContext);
  const [applied, setApplied] = useState();

  //   useEffect(() => {
  //     setApplied(applyForJob(id));
  //   }, [id, applyForJob]);

  const handleApply = async () => {
    if (hasApplied(id)) return;
    applyForJob(id);
    setApplied(true);
  };

  return (
    <div className="JobCard">
      <Card className="job-card">
        {/* {applied} */}
        <div>
          <h5>{title}</h5>
          <p>{companyName}</p>
          {salary && (
            <div>
              <p>Salary: {formatter.format(salary)}</p>
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
            color="primary"
            className="apply-btn"
          >
            {applied ? "Applied" : "Apply"}
          </Button>
        </div>
      </Card>
    </div>
  );
}

let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default JobCard;
