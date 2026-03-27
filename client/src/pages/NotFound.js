import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <span className="notfound-code">404</span>
        <h1>Page Not Found</h1>
        <p>
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <button className="notfound-btn" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
