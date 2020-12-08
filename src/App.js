import React, { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

import WorkSpaceContainer from './WorkSpaceContainer';
import SliderMenu from './SliderMenu';
import SliderContent from './SliderContent';
import SliderButton from './SliderButton';

const WorkSpaceStyle = styled.div`
  display: block;
  width: ${(props) => props.isOpenedSlider ? '60vw' : 'calc(100vw - 80px)'};
  height: 100vh;
  background-color: #eaeaea;
`;

const SubSpaceStyle = styled.div`
  position: relative;
  display: flex;
  background-color: #333333;
  width: ${(props) => props.isOpenedSlider ? '40vw' : '80px'};
  height: 100vh;
`;

export default function App() {

  const [isOpenedSlider, setSlider] = useState(true);
  const [taskData, setTaskData] = useState([]);
  const [nowMenu, setNowMenu] = useState('showList');

  function onClickSlider() {
    setSlider(!isOpenedSlider);
  };

  function createTask(data) {
    console.log(data);
    setTaskData(taskData.concat(data));
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <WorkSpaceStyle isOpenedSlider={isOpenedSlider}>
          <WorkSpaceContainer />
        </WorkSpaceStyle>
        <SubSpaceStyle isOpenedSlider={isOpenedSlider}>
          <SliderButton onClickSlider={onClickSlider} isOpenedSlider={isOpenedSlider} />
          <SliderMenu nowMenu={nowMenu} setNowMenu={setNowMenu} />
          {isOpenedSlider && <SliderContent isOpenedSlider={isOpenedSlider} nowMenu={nowMenu} createTask={createTask} taskData={taskData} />}
        </SubSpaceStyle>
      </ThemeProvider>
    </>)
}