import React from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import "./CompanyCard.css";

function CompanyCard({ name, description, logoUrl, handle }) {
  return (
    <div className="CompanyCard">
      <Card className="company-card">
        <a href={`/companies/${handle}`}>
          {logoUrl && <CardImg top width="100%" src={logoUrl} alt={name} />}
          <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </a>
      </Card>
    </div>
  );
}

export default CompanyCard;
