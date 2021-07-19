import React from "react";
import { Card } from "reactstrap";
import "./CompanyCard.css";

function CompanyCard({ name, description, logoUrl, handle }) {
  return (
    <div className="CompanyCard">
      <Card>
        <a href={`/companies/${handle}`}>
          <div>
            <h5>
              {name}
              {logoUrl && <img src={logoUrl} alt={name} />}
            </h5>
            <p>{description}</p>
          </div>
        </a>
      </Card>
    </div>
  );
}

export default CompanyCard;
