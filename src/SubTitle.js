import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import GlobalData from './globalData';

const TextStyle = styled.p`
  color: #acacac;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  margin: 10px 0;
`;

export default function SubTitle({ text, ...props }) {

  return (
    <TextStyle>{text}</TextStyle>
  )
}