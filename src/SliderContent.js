import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import AddTask from './AddTask';
import ListTask from './ListTask';
import GlobalData from './globalData';

const ContentStyle = styled.div`
  display: inline-block;
  width: calc(100% - 80px);
  height: 100%;
  border-left: 2px solid #414141;
  padding: 0 35px;
  box-sizing: border-box;
`;

export default function SliderContent({ isOpenedSlider, nowMenu, createTask, taskData, ...props }) {
  console.log(isOpenedSlider);
  useEffect(() => {
    console.log('TESTING')
  }, [])

  return (
    <ContentStyle isOpenedSlider={isOpenedSlider}>
      { nowMenu === 'addTask' &&
        <AddTask createTask={createTask} />
      }
      {
        nowMenu === 'showList' &&
        <ListTask taskData={taskData} />
      }

    </ContentStyle>
  )
}