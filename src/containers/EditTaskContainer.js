import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const EditTodoTaskStyle = styled.div`
  display: block;
  width: calc(100% - 30px);
  height: ${(props) => props.isDone ? '60px' : '140px'};
  margin: 10px 15px 0 10px;
  border-top: 1px solid #333;
`;

const SmallTitleStyle = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: #acacac;
  padding: 10px 0 5px;
  margin: 0;
`;

const InputTitleStyle = styled.input`
  border-radius: 5px;
  background-color: #fcfcfc;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 19px;
  color: #000;
`;

const ButtonStyle = styled.button`
  width: calc(50% - 20px);
  height: 40px;
  margin: 10px;
  border-radius: 30px;
  border: 0;
  color: #fcfcfc;
  background-color: ${(props) => props.isFocusColor ? '#ea5548' : '#acacac'};
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`;

export default function EditTaskContainer({ index, isDone = false, handleExpandSetting, redoTask, editTask, deleteTask, ...props }) {

  if (isDone) {
    function handleRedoTask() {
      redoTask(index)
    }

    return (
      <>
        <EditTodoTaskStyle isDone={isDone}>
          <ButtonStyle isFocusColor={true} onClick={handleRedoTask}>Redo</ButtonStyle>
        </EditTodoTaskStyle>
      </>
    )
  }

  const [taskName, setTaskName] = useState('');

  function handleTaskName(e) {
    if (taskName === (e.currentTarget.value).trim()) return
    setTaskName(e.currentTarget.value);
  }
  function handleEditTask() {
    editTask(index, { taskName });
    setTaskName('');
    handleExpandSetting();
  }

  function handleDeleteTask() {
    deleteTask(index);
  }

  return (
    <>
      <EditTodoTaskStyle>
        <SmallTitleStyle>TASK TITLE</SmallTitleStyle>
        <InputTitleStyle value={taskName} onChange={handleTaskName}></InputTitleStyle>
        <ButtonStyle isFocusColor={true} onClick={handleEditTask}>Save</ButtonStyle>
        <ButtonStyle isFocusColor={false} onClick={handleDeleteTask}>Delete</ButtonStyle>
      </EditTodoTaskStyle>
    </>
  )
}