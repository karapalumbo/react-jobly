import React from "react";

function CompanyCard({ name, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CompanyCard;
