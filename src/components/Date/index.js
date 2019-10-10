import React, { Fragment } from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 800px;
  z-index: 5;
`;

const Input = styled.input.attrs(props => ({
  type: 'date',
  size: props.small ? 5 : undefined,
}))`
  appearance: none;
  -webkit-appearance: none;
  color: #2c3e50;
  font-family: 'Helvetica', arial, sans-serif;
  font-size: 18px;
  border: 1px solid #ecf0f1;
  background: #ecf0f1;
  padding: 5px;
  display: inline-block !important;
  visibility: visible !important;
  border-radius: 30px;

  ::-webkit-clear-button,
  ::-webkit-inner-spin-button {
    display: none;
  }

  ::-webkit-calendar-picker-indicator {
    color: #2c3e50;
  }
`;

export default function DateSelector({ date, setDate }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setDate(e.target.value);
  }

  return (
    <Wrapper>
      <h4>Select a date to see previous Picture of the Day</h4>
      <form onSubmit={handleSubmit}>
        <Input
          id='date'
          label='Picture of the Day'
          type='date'
          defaultValue={date}
          onChange={handleChange}
        />
      </form>
    </Wrapper>
  );
}
