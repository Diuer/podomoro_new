import React from "react";
import styled from 'styled-components';

const TextStyle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 25px;
  margin: 0;
  border-radius: 8px 8px 0 0;
  color: #fcfcfc;
  background-color: #ea5548;
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
`;

export default function TabTitle({ text, ...props }) {

  return (
    <TextStyle>{text}</TextStyle>
  )
}