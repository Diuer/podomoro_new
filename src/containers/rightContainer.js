import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import Emitter from '../helper/event';

import { EVENT } from '../constants';

import SliderContainer from './SliderContainer';
import { SliderMenu, SliderButton } from '../components';

const ContainerStyle = styled.div`
  position: relative;
  display: flex;
  width: ${(props) => props.isVisible ? '600px' : '80px'};
  height: 100vh;
  background-color: #333333;
  z-index: 99;

  @media screen and (max-width: 1200px) {
    position: ${(props) => props.isVisible ? 'absolute' : 'relative'};;
    width: ${(props) => props.isVisible ? '100%' : '80px'};
  }
`;

export default function RightContainer({ handleSliderVisible, handleTask, handleNowMenu, ...props }) {

  const [isVisible, setVisible] = useState(false);
  const [nowMenu, setNowMenu] = useState(null);

  function updateNowMenu([name]) {
    setNowMenu(name);
  }

  function updateSliderVisible() {
    setVisible((isVisible) => !isVisible);
  }

  useEffect(() => {
    Emitter.addListener(EVENT.UPDATE_SLIDER_VISIBLE, updateSliderVisible);
    Emitter.addListener(EVENT.UPDATE_NOW_MENU, updateNowMenu);

    return () => {
      Emitter.removeListener(EVENT.UPDATE_SLIDER_VISIBLE, updateSliderVisible);
      Emitter.removeListener(EVENT.UPDATE_NOW_MENU, updateNowMenu);
    };
  }, []);

  return (
    <>
      <ContainerStyle isVisible={isVisible}>
        <SliderButton handleSliderVisible={handleSliderVisible} isVisible={isVisible} />
        <SliderMenu handleSliderVisible={handleSliderVisible} isVisible={isVisible} handleNowMenu={handleNowMenu} />
        {isVisible &&
          <SliderContainer nowMenu={nowMenu} handleTask={handleTask} />
        }
      </ContainerStyle>
    </>
  )
}