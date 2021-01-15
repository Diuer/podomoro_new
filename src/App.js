import React, { useEffect } from "react";
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

import LeftContainer from "./containers/leftContainer";
import RightContainer from './containers/rightContainer';
import FakeData from '../FakeData';
import GlobalData from "./helper/GlobalData";
import Emitter from './helper/event';
import { EVENT, MENU } from './constants';

export default function App() {

  useEffect(() => {
    GlobalData.TodoTask = FakeData.TodoTask;
    GlobalData.DoneTask = FakeData.CompletedTask;
    Emitter.sendListener(EVENT.UPDATE_TASK);
    Emitter.sendListener(EVENT.UPDATE_NOW_MENU, MENU.FIRST);
    // setTaskData(GlobalData.TodoTask);
  }, []);

  function handleSliderVisible() {
    // setSliderVisible(!isShowSlider);
    const isVisible = !GlobalData.IsSliderVisible;
    GlobalData.IsSliderVisible = isVisible;
    Emitter.sendListener(EVENT.UPDATE_SLIDER_VISIBLE);
  };

  function createTask(data) {
    // setTaskData(taskData.concat({
    //   ...data,
    //   isCompleted: false
    // }));
    GlobalData.TodoTask = GlobalData.TodoTask.concat({
      ...data,
      progress: 0,
      isCompleted: false
    });
    Emitter.sendListener(EVENT.UPDATE_TASK);
  }

  function editTask(index, data) {
    let newData = [...GlobalData.TodoTask];
    newData[index].taskName = data.taskName;
    // setTaskData(newData);

    GlobalData.TodoTask = newData;
    Emitter.sendListener(EVENT.UPDATE_TASK);
  }

  function deleteTask(index) {
    let newData = GlobalData.TodoTask.filter((item, idx) => idx !== index);
    // setTaskData(newData);

    GlobalData.TodoTask = newData;

    Emitter.sendListener(EVENT.UPDATE_TASK);
  }

  function redoTask(index) {
    let tempTask = GlobalData.DoneTask.splice(index, 1)[0];
    tempTask.isCompleted = false;
    tempTask.progress = 0;
    // setTaskData(taskData.concat(tempTask));
    // setCompletedTask(completedTask);

    GlobalData.TodoTask = GlobalData.TodoTask.concat(tempTask);
    GlobalData.DoneTask = GlobalData.DoneTask;
    Emitter.sendListener(EVENT.UPDATE_TASK);
  }

  function doneTask() {
    let newTodoTask = [...GlobalData.TodoTask];
    let done = newTodoTask.shift();
    let newCompletedTask = [...GlobalData.DoneTask];
    let now = new Date();
    let completedDate = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
    let completedTimestamp = new Date(completedDate).getTime();
    done = {
      ...done,
      isCompleted: true,
      progress: done.score,
      completedTimestamp,
      completedDate,
    }
    newCompletedTask.push(done);

    GlobalData.TodoTask = newTodoTask;
    GlobalData.DoneTask = newCompletedTask;
    Emitter.sendListener(EVENT.UPDATE_TASK);
    // setTaskData(newTodoTask);
    // setCompletedTask(newCompletedTask);
  }

  function handleNowMenu(id) {
    Emitter.sendListener(EVENT.UPDATE_NOW_MENU, id);
  }

  function drawOneMoreCircle(isBreak) {
    if (isBreak) {
      return
    }
    let newTodoTask = [...GlobalData.TodoTask];
    newTodoTask[0] = {
      ...newTodoTask[0],
      progress: newTodoTask[0].progress + 1
    };
    // setTaskData(newTodoTask);

    GlobalData.TodoTask = newTodoTask;
    // Emitter.sendListener(EVENT.UPDATE_TASK_SCORE);
    Emitter.sendListener(EVENT.UPDATE_TASK);
  }

  console.log('app');

  const handleTask = {
    createTask,
    editTask,
    deleteTask,
    redoTask,
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LeftContainer doneTask={doneTask} drawOneMoreCircle={drawOneMoreCircle} />
        <RightContainer handleSliderVisible={handleSliderVisible} handleNowMenu={handleNowMenu} handleTask={handleTask} />
      </ThemeProvider>
    </>)
}