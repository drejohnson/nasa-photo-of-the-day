import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Card from './components/Card';
import Apod from './components/Apod';

function App() {
  const [apod, setApod] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?hd=true&api_key=N4MpQjQ0tUkib6KcvHGIMTd2736496guxIZuV994',
      )
      .then(response => setApod(response.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=N4MpQjQ0tUkib6KcvHGIMTd2736496guxIZuV994',
      )
      .then(response => setData(response.data.photos.slice(830, 855)));
  }, []);

  return (
    <div className='App'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {/* <Card data={data} /> */}
      <Apod data={apod} />
    </div>
  );
}

export default App;
