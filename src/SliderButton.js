import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import GlobalData from './globalData';

import Tomato from './tomato';

const ButtonStyle = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;  width: 90px;
  height: 50px;
  bottom: 35px;
  left: -25px;
  background-color: #fcfcfc;
  border-radius: 25px 5px 5px 25px;
  cursor: pointer;
`;

export default function SliderButton({ onClickSlider, isOpenedSlider, ...props }) {

  return (
    < ButtonStyle onClick={onClickSlider}>
      <Tomato isDisabled={false} cursorKind={'pointer'} />
      {
        (isOpenedSlider ?
          <FontAwesomeIcon icon={faAngleDoubleRight} size='lg' /> : <FontAwesomeIcon icon={faAngleDoubleLeft} size='lg' />)
      }

    </ButtonStyle >
  )
}