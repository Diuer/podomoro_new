import React, { useRef, useEffect, useState } from "react";
import styled from 'styled-components';

import Emitter from '../helper/event';
import GlobalData from '../helper/GlobalData';

import { EVENT, TEXT } from '../constants';

import TimerSettingContainer from "./TimerSettingContainer";
import { Circle, CircleCountdown } from '../components';

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const NoDataStyle = styled.p`
  margin: auto;
`;

const TaskNameStyle = styled.p`
  font-size: 24px;
  line-height: 29px;
  color: #333;
  margin: 10px 0;
`;

const TaskProgressStyle = styled.div`
  display: block;
`;

const CopyrightStyle = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: #333;
  font-weight: 300;
  margin: 30px 0;

  @media screen and (max-width: 480px) {
    margin: 10px 0;
  }
`;

const BreakTextStyle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 15px;
  font-size: 10px;
  line-height: 12px;
  background-color: #b5e254;
  color: #fcfcfc;
  border-radius: 8px;
  margin: auto;
`;

let timer = null;
export default function WorkSpaceContainer({ remainTime, drawOneMoreCircle, doneTask, ...props }) {
  const [firstTask, setFirstTask] = useState({});

  function updateTask() {
    const first = { ...GlobalData.TodoTask[0] };
    setFirstTask(first);
  }

  useEffect(() => {
    Emitter.addListener(EVENT.UPDATE_TASK, updateTask);
    Emitter.addListener(EVENT.UPDATE_TASK_SCORE, updateTask);

    return () => {
      Emitter.removeListener(EVENT.UPDATE_TASK, updateTask);
      Emitter.removeListener(EVENT.UPDATE_TASK_SCORE, updateTask);
    };

  }, []);

  const [taskStatus, setTaskStatus] = useState('idle');
  const [countdown, setCountdown] = useState(remainTime);

  const [isStart, setStart] = useState(false);

  useEffect(() => {
    console.log('countdown', countdown);
    if (countdown === 0) {
      clearInterval(timer);
      setStart(false);

      if (taskStatus === 'work') {
        drawOneMoreCircle(false);
        setTaskStatus('finishWork');

      } else if (taskStatus === 'break') {
        setTaskStatus('finishBreak');

        if (firstTask.progress === firstTask.score) {
          doneTask();
        }
      }
    }
  }, [countdown]);

  useEffect(() => {
    if (taskStatus === 'work' || taskStatus === 'finishBreak') {
      setCountdown(10);
    } else if (taskStatus === 'break' || taskStatus === 'finishWork') {
      setCountdown(5);
    }
  }, [taskStatus]);

  function handleStartTimer() {
    if (isStart) {
      return
    }
    if (taskStatus === 'finishWork') {
      setTaskStatus('break')
    } else if (taskStatus === 'finishBreak' || taskStatus === 'idle') {
      setTaskStatus('work')
    }

    setStart(true);
  }

  function handlePauseTimer() {
    if (!isStart) {
      return
    }
    setStart(false);
  }

  useSetInterval(() => {
    setCountdown(countdown - 1);
  });

  function useSetInterval(callback) {
    const ref = useRef();

    useEffect(() => {
      ref.current = callback;
    });

    useEffect(() => {
      if (!isStart)
        return
      const cb = () => {
        ref.current();
      };
      timer = setInterval(cb, 1000);
      return () => clearInterval(timer);
    }, [isStart]);
  }

  const handleDoneTask = () => {
    clearInterval(timer);
    setStart(false);
    setCountdown(remainTime);
    doneTask();
  }

  if (!('taskName' in firstTask)) {
    return (
      <NoDataStyle>{TEXT.NO_DOING_TASK}</NoDataStyle>
    )
  }

  const { taskName, score, progress } = firstTask;
  const isTaskWorking = (taskStatus === 'idle' || taskStatus === 'work' || taskStatus === 'finishBreak');
  const isPaused = (countdown === 10 && !isStart) || (countdown < 10 && !isStart);

  const handleSetting = {
    handleStartTimer,
    handlePauseTimer,
    handleDoneTask,
  }

  return (
    <>
      <ContainerStyle>
        <TaskNameStyle>{taskName}</TaskNameStyle>
        {(taskStatus === 'finishWork' || taskStatus === 'break') ?
          <BreakTextStyle>BREAK</BreakTextStyle> :
          <TaskProgressStyle>
            {Array(score).fill('').map((item, index) => {
              return <Circle key={index} isCompleted={(index < progress)} />
            })}
          </TaskProgressStyle>}
        <CircleCountdown countdown={countdown} isTaskWork={isTaskWorking || taskStatus === 'finishBreak'} />
        <TimerSettingContainer handleSetting={handleSetting} isPaused={isPaused} isTaskWorking={isTaskWorking} />
        <CopyrightStyle>PODOMORO by DIUER</CopyrightStyle>
      </ContainerStyle>
    </>
  )
}