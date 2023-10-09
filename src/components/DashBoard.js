import React, { useState, useEffect } from "react";
import  './DashBoard.css';
import axios from 'axios';

const DashBoard = () => {
  const [jobs, setJobs] = useState([]);


useEffect(() => {
    axios.get(`https://www.arbeitnow.com/api/job-board-api`)
        .then(res => {
            console.log("all data",res.data.data);
            setJobs(res.data.data)
        }).catch(err => console.log("error", err));
}, [])

  return (
    <div className="dash-content">
      <h1>Job List</h1>
      <ul>
      {jobs.map((job, index) => {
      return (
          <li key={index}>
            <div className="main-d">
            <h2>Title : {job?.title}</h2>
            <div className="content-d">
            <p>Company : {job?.company_name}</p>
            <p>Location : {job?.location}</p>
            <p>URL : <a href={job?.url}>{job?.url}</a></p>

            </div>

            </div>
          </li>
        )})}
      </ul>
    </div>
  );
};

export default DashBoard;
