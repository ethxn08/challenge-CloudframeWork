import React from "react";
import { Link } from "react-router-dom";

const Func404 = () => {
  return (
    <div className="App">
      <div className="error404">
        <h1>404</h1>
        <Link className="link" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Func404;
