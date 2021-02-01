import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Emitter from '../../helper/event';
import GlobalData from '../../helper/GlobalData';

import { EVENT, TEXT } from '../../constants';

import { MainTitle, TabTitle, TodoListTask, CompletedListTask } from '../../components';

const NoTaskStyle = styled.p`
  color: #fff;
`;

const TodoContainerStyle = styled.div`
  display: block;
  height: 40%;
  height: calc((100% - 80px - 180px) / 2);
  margin: 25px 0;
  margin: 0 0 25px 0;
  overflow: auto;
`;

const DoneContainerStyle = styled.div`
  display: block;
  height: 40%;
  height: calc((100% - 80px - 180px) / 2);
  margin: 25px 0;
  margin: 0 0 25px 0;
  overflow: auto;
`;

export default function ListTaskContainer({ editTask, deleteTask, redoTask, ...props }) {
  const [taskData, setTask] = useState({
    TodoTask: GlobalData.TodoTask,
    DoneTask: GlobalData.DoneTask
  });

  function updateTask() {
    const TodoTask = [...GlobalData.TodoTask];
    const DoneTask = [...GlobalData.DoneTask];
    const task = { TodoTask, DoneTask };
    // setTask(() => { return { TodoTask, DoneTask } });
    setTask({ ...task });
  }

  useEffect(() => {
    Emitter.addListener(EVENT.UPDATE_TASK, updateTask);

    return () => {
      Emitter.removeListener(EVENT.UPDATE_TASK, updateTask);
    };

  }, []);

  // const [taskName, setTaskName] = useState('');
  const { TodoTask, DoneTask } = taskData;

  if (!TodoTask || !DoneTask) {
    return
  }

  return (
    <>
      <MainTitle text='TASK LISTS' />
      <TabTitle text='TO DO' />
      <TodoContainerStyle>
        {!TodoTask.length && <NoTaskStyle>{TEXT.NO_TODO_TASK}</NoTaskStyle>}
        {TodoTask.map((task, index) => {
          return <TodoListTask key={index} index={index} data={task} editTask={editTask} deleteTask={deleteTask} />
        })}
      </TodoContainerStyle>
      <TabTitle text='DONE' />
      <DoneContainerStyle>
        {!DoneTask.length && <NoTaskStyle>{TEXT.NO_DONE_TASK}</NoTaskStyle>}
        {DoneTask.map((task, index) => {
          return <CompletedListTask key={index} index={index} data={task} editTask={editTask} deleteTask={deleteTask} redoTask={redoTask} />
        })}
      </DoneContainerStyle>
    </>
  )
}