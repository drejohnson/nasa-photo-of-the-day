import React, { useState } from 'react';

export default function Date({ data }) {
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setDate(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleChange}>
        <option value='2019-10-09'>2019-10-09</option>
        <option value='2019-10-08'>2019-10-08</option>
        <option value='2019-10-07'>2019-10-07</option>
        <option value='2019-10-06'>2019-10-06</option>
        <option value='2019-10-05'>2019-10-05</option>
      </select>
    </form>
  );
}
