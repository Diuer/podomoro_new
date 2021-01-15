import React, { useState } from "react";
import styled from 'styled-components';

import { MainTitle, SubTitle, Tomato } from '../../components';

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
  display: block;
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 30px;
  color: #fcfcfc;
  background-color: #ea5548;
  margin: 10px 0;
  cursor: pointer;
`;

const InvalidNameStyle = styled.p`

`;

export default function AddTaskContainer({ createTask, ...props }) {
  const [score, setScore] = useState(0);
  const [taskName, setTaskName] = useState('');
  const [invalidMsg, setInvalidMsg] = useState('');

  function handleTomato(e) {
    e.persist();

    const newScore = ~~(e.target.id);

    // if (score === newScore) return;
    setScore(newScore);
  }

  function handleTask() {
    if (!taskName) {
      setInvalidMsg('名字不能為空');
      return
    }

    createTask({ score: score + 1, taskName });
    setScore(0);
    setTaskName('');
    setInvalidMsg('');
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
      {
        (invalidMsg !== '') && <InvalidNameStyle>{invalidMsg}</InvalidNameStyle>
      }

    </>
  )
}