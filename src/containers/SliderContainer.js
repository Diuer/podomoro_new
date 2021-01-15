import React from "react";
import styled from 'styled-components';

import { MENU } from '../constants';

import { AddTaskContainer, ListTaskContainer, ReportContainer } from './slider_content';

const ContentStyle = styled.div`
  display: inline-block;
  width: calc(100% - 80px);
  height: 100%;
  border-left: 2px solid #414141;
  padding: 0 35px;
  overflow: hidden;
  box-sizing: border-box;
`;

export default function SliderContainer({ nowMenu, handleTask, ...props }) {

  const { createTask, editTask, deleteTask, redoTask } = handleTask;

  return (
    <ContentStyle>
      { nowMenu === MENU.FIRST &&
        <AddTaskContainer createTask={createTask} />
      }
      {
        nowMenu === MENU.SECOND &&
        <ListTaskContainer editTask={editTask} deleteTask={deleteTask} redoTask={redoTask} />
      }
      {
        nowMenu === MENU.THIRD &&
        <ReportContainer />
      }
      {
        // nowMenu === MENU.FOURTH &&
        // <ListTaskContainer editTask={editTask} deleteTask={deleteTask} redoTask={redoTask} />
      }
    </ContentStyle>
  )
}