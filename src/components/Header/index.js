import React from 'react';
import Logo from '../Logo';

import styled from 'styled-components/macro';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items; center;
  position: absolute;
  top: 0;
  left 0;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 0 1rem;
  z-index: 5;
`;

const H1 = styled.h1`
  display: flex;
  align-items: center;

  span {
    color: white;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <H1>
        <Logo />
        <span>APOD</span>
      </H1>
    </HeaderWrapper>
  );
}
