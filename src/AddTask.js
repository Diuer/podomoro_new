import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import GlobalData from './globalData';
import MainTitle from './MainTitle';
import SubTitle from './SubTitle';
import Tomato from './tomato';

const TomatoStyle = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`;

const InputStyle = styled.input`
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
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 30px;
  color: #fcfcfc;
  background-color: #ea5548;
  cursor: pointer;
`;

export default function AddTask({ createTask, ...props }) {
  useEffect(() => {
    console.log('TESTING')
  }, [])

  const [score, setScore] = useState(0);
  const [taskName, setTaskName] = useState('');

  function handleTomato(e) {
    e.persist();

    const newScore = ~~(e.target.id);

    // if (score === newScore) return;
    setScore(newScore);
  }

  function handleTask() {
    createTask({ score, taskName })
  }

  function handleTaskName(e) {
    if (taskName === (e.currentTarget.value).trim()) return
    setTaskName(e.currentTarget.value);
  }

  return (
    <>
      <MainTitle text='ADD NEW TASK' />
      <SubTitle text='TASK TITLE' />
      <InputStyle value={taskName} onChange={handleTaskName}></InputStyle>
      <SubTitle text='ESTIMATED TOMOTO' />
      <TomatoStyle>
        {
          Array(10).fill('').map((v, i) => {
            return <Tomato id={i} key={i} isDisabled={score < i} cursorKind='pointer' callback={handleTomato} />
          })
        }
      </TomatoStyle>
      <ButtonStyle onClick={handleTask}>ADD TASK</ButtonStyle>
    </>
  )
}