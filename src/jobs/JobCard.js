import { Card } from "reactstrap";
import "./JobCard.css";

function JobCard({ title, salary, equity, companyName }) {
  return (
    <div className="JobCard">
      <Card>
        <h5>{title}</h5>
        <p>{companyName}</p>
        {salary && (
          <div>
            <p>Salary: ${salary}</p>
          </div>
        )}
        {equity !== undefined && (
          <div>
            <p>Equity: {equity}</p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default JobCard;
