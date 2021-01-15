import React from "react";
import styled from 'styled-components';

const ContainerStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 50px auto;

  &::before{
    content: "";
    position: absolute;
    display: block;
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 50%;
    background-color: #fff;
    z-index: 4;
  }

  svg{
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    /* background: #9acd32; 
    border-radius: 50%;*/
    z-index: 3;
  };


  @media screen and (max-width: 480px) {
    width: 80%;
    /* height: 80%; */
    margin: 0 auto;
    
  &::before{
    width: 170px;
    height: 170px;
  }
  }
`;

const CircleStyle = styled.circle`
  fill: #acacac;
  stroke-width: 100px;
  stroke-dasharray: ${(props) => props.circleValue + ' 942'};
  stroke: ${(props) => props.isTaskWork ? '#ea5548' : '#b5e254'};
`;

const CountdownTextStyle = styled.p`
  font-size: 40px;
  line-height: 48px;
  color: #333;
  font-weight: 700;
  z-index: 5;
`;

const getTimeText = (seconds) => {
  let tempText = ~~(seconds / 60);
  const minute = tempText < 10 ? `0${tempText}` : tempText;
  tempText = ~~(seconds % 60);
  const second = tempText < 10 ? `0${tempText}` : tempText;
  return {
    text: `${minute}:${second}`,
    minute,
    second,
    seconds
  };
};

const getTimeNumber = (timeText) => {
  const [minute, second] = timeText.split('');
  return minute * 60 + second;
};

export default function CircleCountdown({ countdown, isTaskWork, ...props }) {

  const circleLength = isTaskWork ? 10 : 5;
  const { minute, second, text } = getTimeText(countdown);
  const circleValue = (1 - (~~(minute) * 60 + ~~(second)) / (circleLength)) * 942;

  return (
    <>
      <ContainerStyle>
        <svg viewBox="0 0 300 300">
          {/* <circle className="circle1" r="150" cx="150" cy="150" data-stroke-break={isTaskWork} style={{ 'strokeDasharray': (circleValue + ' 942') }} /> */}
          <CircleStyle circleValue={circleValue} isTaskWork={isTaskWork} r="150" cx="150" cy="150" data-stroke-break={isTaskWork} ></CircleStyle>
        </svg>
        <CountdownTextStyle>{text}</CountdownTextStyle>
      </ContainerStyle>
    </>
  )
}