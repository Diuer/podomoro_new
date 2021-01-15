import React from 'react';
import styled from 'styled-components';

import { SettingButton, Circle } from '../components';

const CircleStyle = styled.div`
  display: inline-block;
  width: 100%;
`;

const TaskStyle = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin: auto 0;

`;

const LeftBlockStyle = styled.div`
  display: block;
  width: calc(100% - 40px);
  margin: auto 0;
  padding-left: 15px;
`;

const TaskNameStyle = styled.span`
  color: ${(props) => props.isDone ? '#acacac' : '#fcfcfc'};
  font-size: 16px;
`;

export default function TaskInfo({ data, isExpandSetting, handleExpandSetting, isDone = false, ...props }) {

  const { taskName, score, progress } = data;

  return (
    <>
      <TaskStyle>
        <LeftBlockStyle>
          <TaskNameStyle isDone={isDone}>{taskName}</TaskNameStyle>
          <CircleStyle>
            {
              Array(score).fill('').map((v, i) => {
                return <Circle key={i} isCompleted={i < progress} />
              })
            }
          </CircleStyle>
        </LeftBlockStyle>
        <SettingButton isExpandSetting={isExpandSetting} handleExpandSetting={handleExpandSetting} />
      </TaskStyle>
    </>
  )
}