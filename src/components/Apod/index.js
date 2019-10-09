import React, { Fragment } from 'react';
import Date from '../Date';

export default function Apod({ data }) {
  return (
    <div>
      <Date data={data} />
      <h2>{data.title}</h2>
      <img src={data.hdurl} alt={data.title} />
      <h3>{data.explanation}</h3>
    </div>
  );
}
