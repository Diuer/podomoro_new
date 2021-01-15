import React from "react";
import styled from 'styled-components';

const TextStyle = styled.p`
  margin: 10px 0;
  color: #acacac;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
`;

export default function SubTitle({ text, ...props }) {

  return (
    <TextStyle>{text}</TextStyle>
  )
}