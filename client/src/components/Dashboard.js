import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className="fab-container">
        <Link to="/surveys/new" className="fab">
          <span>+</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
