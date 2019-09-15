import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [activities, setActivities] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    setHasError(false);
    setIsLoading(true);

    const url = `https://www.boredapi.com/api/activity`;

    try {
      const { data } = await axios.get(url);

      setActivities(data);
    } catch(error) {
      setHasError(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Find a random activity to do</h1>
        <button onClick={() => fetchData()}>Submit</button>

        <div className="result">
          {isLoading ? (
            <div className="loader">Loading ...</div>
          ) : (
            <p>{activities.activity}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;