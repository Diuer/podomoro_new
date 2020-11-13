import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

import WorkSpaceContainer from './WorkSpaceContainer';
import SliderMenu from './SliderMenu';
import SliderContent from './SliderContent';
import SliderButton from './SliderButton';

const WorkSpaceStyle = styled.div`
  display: block;
  width: 50vw;
  height: 100vh;
  background-color: #eaeaea;
`;

const SubSpaceStyle = styled.div`
  position: relative;
  display: flex;
  background-color: #333333;
  width: 50vw;
  height: 100vh;
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <WorkSpaceStyle>
          <WorkSpaceContainer />
        </WorkSpaceStyle>
        <SubSpaceStyle>
          <SliderButton />
          <SliderMenu />
          <SliderContent />
        </SubSpaceStyle>
      </ThemeProvider>
    </>)
}