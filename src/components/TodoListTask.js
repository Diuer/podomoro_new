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

export default function TodoListTask({ index, editTask, deleteTask, data, ...props }) {

  const [isExpandSetting, setExpandSetting] = useState(false);

  function handleExpandSetting() {
    setExpandSetting(!isExpandSetting);
  }

  return (
    <>
      <TaskContainerStyle>
        <TaskInfo data={data} isExpandSetting={isExpandSetting} handleExpandSetting={handleExpandSetting} />
        {isExpandSetting && (
          <EditTaskContainer index={index} handleExpandSetting={handleExpandSetting} editTask={editTask} deleteTask={deleteTask} />
        )}
      </TaskContainerStyle>
    </>
  )
}