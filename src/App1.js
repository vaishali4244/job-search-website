import React,{useState,useEffect} from 'react';
import Register from './components/Register';
import Signin from './components/Signin';
import SearchBar from './components/SearchBar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import DashBoard from './components/DashBoard';
import axios from 'axios';


const App = () => {
  const [search, setSearch] = useState('')
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios.get(`https://www.arbeitnow.com/api/job-board-api`)
      .then(res => {
        console.log("all data", res.data.data);
        setJobs(res.data.data)
      }).catch(err => console.log("error", err));
  }, [])

  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredJob = jobs.filter(jobs => {
    return jobs.title.toLowerCase().includes(search.toLowerCase());
  });
  return !jobs.length ?
    <h1>Loading</h1>:
    (
      <div className="main-container">
        <NavBar /> 
          <h1 className='main-heading'>JOB SEARCH PORTAL</h1>
          
          {/* <SearchBar searchChange={onSearchChange} /> */}
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/dashboard" jobs={filteredJob} element={<DashBoard />} />
        </Routes>
      </div>
    )
    }

export default App;

