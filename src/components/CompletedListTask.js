import React, { useState } from 'react';
import styled from 'styled-components';

import EditTaskContainer from '../containers/EditTaskContainer';
import { TaskInfo } from './';

const TaskContainerStyle = styled.div`
  display: block;
  width: 100%;
  margin: 1px 0;
  box-sizing: border-box;
  background-color: #414141;
`;

export default function CompletedListTask({ index, editTask, deleteTask, redoTask, data, ...props }) {

  const isDone = true;
  const [isExpandSetting, setExpandSetting] = useState(false);

  function handleExpandSetting() {
    setExpandSetting(!isExpandSetting);
  }

  return (
    <>
      <TaskContainerStyle>
        <TaskInfo data={data} isExpandSetting={isExpandSetting} handleExpandSetting={handleExpandSetting} isDone={isDone} />
        {isExpandSetting && (
          <EditTaskContainer index={index} isDone={isDone} redoTask={redoTask} />
        )}
      </TaskContainerStyle>
    </>
  )
}