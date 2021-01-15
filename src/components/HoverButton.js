import React from "react";
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 100px;
  height: 40px;
  margin: 20px 0;
  border: 2px solid #ea5548;
  border-radius: 30px;
  background-color: transparent;
  
  ${(props) => props.isDisabled ? `
    color: #606060;
    border-color: #606060;
    cursor: not-allowed;
  `: `
    color: #ea5548;
    cursor: pointer;

    &:hover{
      color: #fff;
      border-color: #fff;
      background-color: #ea5548;
      transition: all .5s;
    }
  `}
`;

export default function HoverButton({ text, isDisabled = false, handleClick, ...props }) {

  return (
    <ButtonStyle onClick={handleClick} isDisabled={isDisabled}>{text}</ButtonStyle>
  )
}