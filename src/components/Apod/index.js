import React, { Fragment, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { ChevronDown, ChevronUp } from 'react-feather';
import axios from 'axios';
import DateSelector from '../Date';

const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
  padding: 20px;
`;

const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100vh;
  animation: 1s ${fadeIn} ease-in-out;
`;

const Info = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  max-width: 800px;
  ${props => (props.open === false ? `padding: 0 1rem;` : `padding: 1rem;`)}
  margin-top: 1rem;
  border-radius: 10px;
  overflow: hidden;
  z-index: 5;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
`;

const Panel = styled.div`
  ${props => (props.open === false ? `height: 0;` : `height: 250px;`)}
  overflow-y: scroll;
  transition: height 0.5s;
`;

const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5;
`;

export default function Apod() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [image, setImage] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=N4MpQjQ0tUkib6KcvHGIMTd2736496guxIZuV994`,
      )
      .then(response => setImage(response.data));
  }, [date]);

  console.log(open);
  return (
    <Wrapper>
      <BgImg src={image.hdurl} />
      <DateSelector date={date} setDate={setDate} />
      <Info onClick={() => setOpen(!open)} open={open}>
        <TitleWrapper>
          <Title>{image.title}</Title>
          {open ? <ChevronUp /> : <ChevronDown />}
        </TitleWrapper>
        <Panel open={open}>
          <Text>{image.explanation}</Text>
        </Panel>
      </Info>
    </Wrapper>
  );
}
