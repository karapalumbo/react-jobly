import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Card } from "reactstrap";

function CompanyCard({ name, description, logoUrl, handle }) {
  return (
    <Router>
      <Card>
        <Link to={`/companies/${handle}`}>
          <div>
            <h6>
              {name}
              {<img src={logoUrl} alt={name} />}
            </h6>
            <p>
              <small>{description}</small>
            </p>
          </div>
        </Link>
      </Card>
    </Router>
  );
}

export default CompanyCard;
