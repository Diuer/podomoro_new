import React from "react";
import styled from 'styled-components';

const DayContainerStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30px;
`;

const ColumnContainerStyle = styled.div`
  flex-direction: column;
  align-items: center;
`;

const DayCountStyle = styled.p`
  margin: auto;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  color: #ea5548;
`;

const FakeTomatoStyle = styled.div`
  width: 25px;
  height: 10px;
  border: 2px solid #ea5548;
  margin: 1px 0;
  border-radius: 5px;
  background-color: #ea5548;
  box-sizing: border-box;
`;

const DayTextStyle = styled.p`
  position: absolute;
  bottom: -30px;
  color: #eaeaea;
  font-size: 10px;
  line-height: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;

export default function ChartContainer({ count, date, timestamp, ...props }) {

  return (
    <>
      <DayContainerStyle>
        {count !== 0 && (
          <ColumnContainerStyle>
            <DayCountStyle>{count}</DayCountStyle>
            {Array(count).fill().map((tomato, index) => (<FakeTomatoStyle key={index}></FakeTomatoStyle>)
            )}
          </ColumnContainerStyle>
        )}
        <DayTextStyle>{date}</DayTextStyle>
      </DayContainerStyle>
    </>
  )
}