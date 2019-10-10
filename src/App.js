import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GlobalStyle from './style/Global';
import Card from './components/Card';
import Apod from './components/Apod';
import Header from './components/Header';
import Footer from './components/Footer';

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
    <>
      <GlobalStyle />
      <div className='App'>
        <Header />
        <Apod />
        {/* <Card data={data} /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
