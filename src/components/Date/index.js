import React, { Fragment } from 'react';

export default function DateSelector({ date, setDate }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setDate(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id='date'
        label='Picture of the Day'
        type='date'
        defaultValue={date}
        onChange={handleChange}
      />
    </form>
  );
}
