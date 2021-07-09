import { Card } from "reactstrap";

function JobCard({ title, salary, equity, companyName }) {
  return (
    <div>
      <Card>
        <h5>{title}</h5>
        <p>{companyName}</p>
        <p>Salary: ${salary}</p>
        <p>Equity: {equity}</p>
      </Card>
    </div>
  );
}

export default JobCard;
