import React from "react";
import styled from 'styled-components';

const TextStyle = styled.p`
  display: flex;
  align-items: center;
  height: 80px;
  box-sizing: border-box;
  border-bottom: 1px solid #414141;
  color: #fcfcfc;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

export default function MainTitle({ text, ...props }) {

  return (
    <TextStyle>{text}</TextStyle>
  )
}