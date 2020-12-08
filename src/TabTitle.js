import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import GlobalData from './globalData';

const TextStyle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ea5548;
  color: #fcfcfc;
  width: 80px;
  height: 25px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
  border-radius: 8px 8px 0 0;
  margin: 0;
`;

export default function TabTitle({ text, ...props }) {

  return (
    <TextStyle>{text}</TextStyle>
  )
}