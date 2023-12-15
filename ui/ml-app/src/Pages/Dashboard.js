import React, { useState, useEffect } from 'react';
import axios from "axios";

// Component imports
import Box from '../Components/Box';

// Style imports
import './pages.css';


function Dashboard() {
  const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   // const response = await axios.post("http://127.0.0.1:5000/register", {
  //   //     registerProfileFormData,
  //   //   });
  // }, []);

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Make the API call in the useEffect hook
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint-url');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once after the first render


  async function submitClick() {
    const response = await axios.get("http://127.0.0.1:5000/time");

    if (response.status === 200) {
      // setCurrentTime(response.currentTime);
      console.log("Hey response: ", response)
    } else {
      console.error("Error:", response);
      // Handle error cases
    }
  } 

  return (
    <div>
      Dashboard here
      <p>The current time is {currentTime}.</p>
      <Box />
      <button onClick={submitClick}> Button here </button>
    </div>
  )
}

export default Dashboard;