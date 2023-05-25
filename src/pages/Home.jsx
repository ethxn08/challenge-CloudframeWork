import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <div className="home">
        <div>
          <h1>
            <Link to="/loan-request/1" className="link">
              User 1
            </Link>
          </h1>
        </div>
        <div>
          <h1>
            <Link to="/loan-request/2" className="link">
              User 2
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
