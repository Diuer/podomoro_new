import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import GlobalData from './globalData';
import MainTitle from './MainTitle';
import Circle from './circle';
import TabTitle from './TabTitle';

const CircleStyle = styled.div`
  display: inline-block;
  width: 100%;
`;

const NoTaskStyle = styled.p`
  color: #fff;
`;

export default function ListTask({ createTask, taskData, ...props }) {
  useEffect(() => {
    console.log('TESTING')
  }, [])

  const [taskName, setTaskName] = useState('');

  function handleTask() {
    createTask({ score, taskName })
  }
  
  return (
    <>
      <MainTitle text='TASK LISTS' />
      <TabTitle text='TO DO' />
      {!taskData.length && <NoTaskStyle>Great! The tasks have been completed!</NoTaskStyle>}
      <CircleStyle>
        {
          Array(10).fill('').map((v, i) => {
            return <Circle key={i} isCompleted={true} />
          })
        }
      </CircleStyle>
      <TabTitle text='DONE' />
    </>
  )
}