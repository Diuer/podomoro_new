import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import FontAwesomeIcon, { leftIcon, rightIcon } from '../helper/FontawesomeIconHelper';
import Emitter from '../helper/event';

import { EVENT } from '../constants';

import { Tomato } from './';

const ButtonStyle = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90px;
  height: 50px;
  bottom: 35px;
  left: -25px;
  border-radius: 25px 5px 5px 25px;
  background-color: #fcfcfc;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    left: ${(props) => props.isVisible ? 'calc(-25px + 45px)' : '-25px'};
  }
`;

export default function SliderButton({ handleSliderVisible, ...props }) {

  const [isVisible, setVisible] = useState(false);

  function updateSliderVisible() {
    setVisible((isVisible) => !isVisible);
  }

  useEffect(() => {
    Emitter.addListener(EVENT.UPDATE_SLIDER_VISIBLE, updateSliderVisible);

    return () => {
      Emitter.removeListener(EVENT.UPDATE_SLIDER_VISIBLE, updateSliderVisible);
    };
  }, []);

  return (
    <ButtonStyle onClick={handleSliderVisible} isVisible={isVisible}>
      <Tomato isDisabled={false} cursorKind={'pointer'} />
      {
        (isVisible ?
          <FontAwesomeIcon icon={rightIcon} size='lg' /> : <FontAwesomeIcon icon={leftIcon} size='lg' />)
      }

    </ButtonStyle >
  )
}