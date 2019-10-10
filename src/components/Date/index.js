import React, { Fragment } from 'react';

export default function DateSelector({ days, date, setDate }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setDate(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleChange}>
        {days.map((day, i) => (
          <Fragment key={`${i}-${day}`}>
            <option defaultValue={day}>{day}</option>
          </Fragment>
        ))}
      </select>
    </form>
  );
}
