import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import Emitter from '../../helper/event';
import GlobalData from '../../helper/GlobalData';

import { EVENT } from '../../constants';
import FAKE_DATA from "../../../FakeData";

import ChartContainer from "../ChartContainer";
import { MainTitle, SubTitle, HoverButton } from '../../components';

const ContainerStyle = styled.div`
  display: block;
  width: 100%;
  height: ${(props) => props.height};
  background-color: #404040;
`;

const WeekContainerStyle = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  &:first-child{
    border-right: 1px solid #606060;
  }
`;

const CountStyle = styled.p`
  color: #ea5548;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
  margin: 0;
`;

const PeriodStyle = styled.p`
  color: #eaeaea;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  margin: 0;
`;

const WeekReportContainerStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 345px;
  background-color: #404040;
  margin-bottom: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


const getFormattedDate = (timestamp) => {
  let date = timestamp === undefined ? new Date() : new Date(timestamp);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

const TodayDate = getFormattedDate();
const TodayTimestamp = new Date(TodayDate).getTime();
const DAY_TIMESTAMP = (24 * 3600 * 1000);
let ColdDate, HotDate;

const calculateInitWeek = (startTimestamp) => {
  let WeekDateTimestamp = [startTimestamp];
  let WeekDate = [getFormattedDate(startTimestamp)];

  for (let index = 1; index < 7; index++) {
    WeekDateTimestamp[index] = startTimestamp + index * DAY_TIMESTAMP;
    WeekDate[index] = getFormattedDate(WeekDateTimestamp[index])
  }

  return {
    WeekDate,
    WeekDateTimestamp,
  }

};

export default function ReportContainer({ ...props }) {

  const [showDate, setShowDate] = useState(FAKE_DATA.DefaultWeek);
  const [doneTask, setDoneTask] = useState(GlobalData.DoneTask);

  function updateTask() {
    setDoneTask(GlobalData.DoneTask);
  }

  useEffect(() => {
    Emitter.addListener(EVENT.UPDATE_TASK, updateTask);

    return () => {
      Emitter.removeListener(EVENT.UPDATE_TASK, updateTask);
    };

  }, []);

  useEffect(() => {
    let { WeekDate, WeekDateTimestamp } = calculateInitWeek(TodayTimestamp - (6 * DAY_TIMESTAMP));
    ColdDate = [];
    HotDate = WeekDate.map((date, index) => {
      return {
        timestamp: WeekDateTimestamp[index],
        date,
        count: 0
      };
    });

    doneTask.forEach((task) => {
      const timestamp = task.completedTimestamp;
      let key;

      if (timestamp >= WeekDateTimestamp[0] && timestamp <= WeekDateTimestamp[6]) {
        key = (timestamp - WeekDateTimestamp[0]) / DAY_TIMESTAMP;
        HotDate[key].count++;

      } else {
        key = (timestamp - doneTask[0].completedTimestamp) / DAY_TIMESTAMP;

        if (ColdDate[key] === undefined) {
          ColdDate[key] = {
            timestamp,
            date: task.completedDate,
            count: 0
          };
        };
        ColdDate[key].count++;
      };
    });

    ColdDate = ColdDate.filter((item) => item);
    setShowDate(HotDate);

  }, [doneTask]);

  const handlePrevPeriod = () => {
    let newHotDate = [...showDate];
    let last = newHotDate.pop();
    const NewTimestamp = last.timestamp - 7 * DAY_TIMESTAMP;
    const NewDate = getFormattedDate(NewTimestamp);
    const { count, removeIndex } = getMatchColdDate(NewTimestamp);

    newHotDate.unshift({
      timestamp: NewTimestamp,
      date: NewDate,
      count
    });

    updateMatchColdDate(removeIndex, last);
    setShowDate(newHotDate);
  }

  const handleNextPeriod = () => {
    if (showDate[6].timestamp === TodayTimestamp) {
      return
    }

    let newHotDate = [...showDate];
    let first = newHotDate.shift();
    const NewTimestamp = first.timestamp + 7 * DAY_TIMESTAMP;
    const NewDate = getFormattedDate(NewTimestamp);
    const { count, removeIndex } = getMatchColdDate(NewTimestamp);

    newHotDate.push({
      timestamp: NewTimestamp,
      date: NewDate,
      count
    });

    updateMatchColdDate(removeIndex, first);
    setShowDate(newHotDate);
  }

  const getMatchColdDate = (NewTimestamp) => {
    let count = 0, removeIndex = null;
    ColdDate.forEach((data, index) => {
      if (data.timestamp === NewTimestamp && count === 0) {
        removeIndex = index;
        count = data.count;
      };
    });

    return { count, removeIndex };
  };

  const updateMatchColdDate = (removeIndex, newData) => {
    if (removeIndex !== null) {
      ColdDate.splice(removeIndex, 1);
    }

    ColdDate.push(newData);
  }

  return (
    <>
      <MainTitle text='ANALYTICS REPORT' />
      <SubTitle text='TOMATO OF THIS WEEKE' />
      <ContainerStyle height='100px'>
        <WeekContainerStyle>
          <CountStyle>{doneTask.filter((task, index) => task.completedTimestamp === TodayTimestamp).length}</CountStyle>
          <PeriodStyle>TODAY</PeriodStyle>
        </WeekContainerStyle>
        <WeekContainerStyle>
          <CountStyle>{doneTask.filter((task) => {
            return task.completedTimestamp >= showDate[0].timestamp && task.completedTimestamp <= showDate[6].timestamp
          }).length}</CountStyle>
          <PeriodStyle>{`${showDate[0].date}-${showDate[6].date}`}</PeriodStyle>
        </WeekContainerStyle>
      </ContainerStyle>
      <SubTitle text='CHART' />
      <WeekReportContainerStyle height='500px'>
        {showDate.map((data, index) => {
          return <ChartContainer key={index} {...data} />
        })}
      </WeekReportContainerStyle>
      <ButtonContainer>
        <HoverButton text='PREV' handleClick={handlePrevPeriod} />
        <HoverButton text='NEXT' handleClick={handleNextPeriod} isDisabled={showDate[6].timestamp === TodayTimestamp} />
      </ButtonContainer>
    </>
  )
}