import React from "react";
import { Link } from "react-router-dom";

const ErrorComponent = ({ error }) => {
  return (
    <div className="App">
      <div className="error404">
        <h2>Error: {error}</h2>
        <Link className="link" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorComponent;
