import React from "react";
import styled from 'styled-components';

import FontAwesomeIcon, { playIcon, pauseIcon, redoIcon, checkIcon } from '../helper/FontawesomeIconHelper';
import Emitter from '../helper/event';
import GlobalData from '../helper/GlobalData';

const ContainerStyle = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin: 0 auto;

  /* svg{
    color: #ea5548;
    cursor: pointer;
  } */

  /* svg:after{
    position: absolute;
    display: inline-block;
    content: "";
    width: 50px;
    height: 50px;
    top: -50%;
    left: -50%;
    background-color: #fcfcfc;
    border-radius: 50%;
    z-index: -1;
  } */
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

const IconButtonSTyle = styled.div`
  color: ${(props) => props.isDisabled ? '#acacac' : (props.isTaskWorking ? '#ea5548' : '#b5e254')};
  cursor: ${(props) => props.isDisabled ? 'default' : 'pointer'};
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function TimerSettingContainer({ handleSetting, isPaused, isTaskWorking, ...props }) {
  const { handleStartTimer, handlePauseTimer, handleDoneTask } = handleSetting;

  return (
    <>
      <ContainerStyle>
        <IconButtonSTyle onClick={handleStartTimer} isDisabled={!isPaused} isTaskWorking={isTaskWorking}>
          <FontAwesomeIcon icon={playIcon} size={'sm'} />
        </IconButtonSTyle>
        <IconButtonSTyle onClick={handlePauseTimer} isDisabled={isPaused} isTaskWorking={isTaskWorking}>
          <FontAwesomeIcon icon={pauseIcon} size={'sm'} />
        </IconButtonSTyle>
        {/* <IconButtonSTyle isDisabled={false} isTaskWorking={true}>
            <FontAwesomeIcon icon={redoIcon} size={'sm'} />
          </IconButtonSTyle> */}
        <IconButtonSTyle onClick={handleDoneTask} isDisabled={false} isTaskWorking={true}>
          <FontAwesomeIcon icon={checkIcon} size={'sm'} />
        </IconButtonSTyle>
      </ContainerStyle>
    </>
  )
}