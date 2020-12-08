import React from "react";
import styled from 'styled-components';
import GlobalData from './globalData';

const TextStyle = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #fcfcfc;
  height: 80px;
  border-bottom: 1px solid #414141;
  box-sizing: border-box;
`;

export default function MainTitle({ text, ...props }) {

  return (
    <TextStyle>{text}</TextStyle>
  )
}