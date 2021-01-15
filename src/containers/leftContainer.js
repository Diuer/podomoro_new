import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import Emitter from '../helper/event';

import { EVENT } from '../constants';

import WorkSpaceContainer from './WorkSpaceContainer';

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.isVisible ? 'calc(100% - 600px)' : 'calc(100% - 80px)'};
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #eaeaea;
`;

export default function LeftContainer({ doneTask, drawOneMoreCircle, ...props }) {

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
    <>
      <ContainerStyle isVisible={isVisible}>
        <WorkSpaceContainer remainTime={10} doneTask={doneTask} drawOneMoreCircle={drawOneMoreCircle} />
      </ContainerStyle>
    </>
  )
}