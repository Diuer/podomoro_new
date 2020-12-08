import React, { memo, useMemo } from "react";
import styled from 'styled-components';

const TomatoStyle = styled.div`
  position: relative;
  display: inline-block;
  // top: 12px;
  // left: 12px;
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: ${(props) => props.cursorKind ? props.cursorKind : 'default'};

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${(props) => props.isDisabled ? '#acacac' : '#ea5548'};
    z-index: 2;
  }

  &::after {
    position: absolute;
    display: block;
    content: "";
    right: 0;
    width: 4px;
    height: 6px;
    border-radius: 10px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: ${(props) => props.isDisabled ? '#6e6e6e' : '#316901'};
    z-index: 2;
  }
`;

export default function Tomato({ id, isDisabled, cursorKind, callback = () => { }, ...props }) {
  return useMemo(() => {
    return (
      <TomatoStyle id={id} isDisabled={isDisabled} cursorKind={cursorKind} onClick={callback}>

      </TomatoStyle>
    )
  }, [isDisabled])
}