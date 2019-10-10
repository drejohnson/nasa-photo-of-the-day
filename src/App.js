import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Card from './components/Card';
import Apod from './components/Apod';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/EPIC/api/natural/images?api_key=N4MpQjQ0tUkib6KcvHGIMTd2736496guxIZuV994',
      )
      .then(response => setData(response.data));
  }, []);

  return (
    <div className='App'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Apod />
      {/* <Card data={data} /> */}
    </div>
  );
}

export default App;
