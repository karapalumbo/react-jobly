import React from "react";
import { render } from "@testing-library/react";
import Jobs from "./JobList";

it("renders without crashing", function () {
  render(<Jobs />);
});
