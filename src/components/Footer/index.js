import React from 'react';
import styled from 'styled-components/macro';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items; center;
  position: absolute;
  bottom: 0;
  left 0;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 1rem;
`;

const CopyRight = styled.span`
  color: white;
  padding: 0 0.5rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <CopyRight>&copy; 2019</CopyRight>
    </FooterWrapper>
  );
}
