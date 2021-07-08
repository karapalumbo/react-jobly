function JobCard({ title, salary, equity, companyName }) {
  return (
    <div>
      <h5>{title}</h5>
      <p>{companyName}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;
