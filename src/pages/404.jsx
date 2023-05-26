import React from "react";
import { Link } from "react-router-dom";

const Func404 = () => {
  return (
    <div className="App">
      <div className="error404">
        <h2>Error 404: The resource you are trying to access does not exist</h2>
        <Link className="link" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Func404;
