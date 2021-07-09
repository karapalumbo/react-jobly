import React from "react";
import { Card } from "reactstrap";

function CompanyCard({ name, description, logoUrl, handle }) {
  return (
    <Card>
      <a href={`/companies/${handle}`}>
        <div>
          <h5>
            {name}
            <img src={logoUrl} alt={name} />
          </h5>
          <p>{description}</p>
        </div>
      </a>
    </Card>
  );
}

export default CompanyCard;
