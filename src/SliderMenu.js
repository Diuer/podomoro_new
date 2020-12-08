import React, { useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faBars, faChartBar, faMusic } from '@fortawesome/free-solid-svg-icons'

const menuIcon = {
  addTask: faPlusCircle,
  showList: faBars,
  showChart: faChartBar,
  setMusic: faMusic,
};

const MenuContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80px;
  height: 100%;
`;
const MenuIconStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 80px;
  & svg {
    height: 80px;
    color: ${(props) => props.nowColor ? '#ea5548' : '#ffffff'};
    cursor: pointer;
    transition: all .5s;
  }
`;

export default function SliderMenu({ nowMenu, setNowMenu, ...props }) {

  return (
    <MenuContainerStyle>
      {
        Object.keys(menuIcon).map((menuName, index) => {
          return (
            <MenuIconStyle nowColor={(nowMenu === menuName)} key={index}>
              <FontAwesomeIcon id={menuName} onClick={(e) => { e.target.id && setNowMenu(e.target.id) }} icon={menuIcon[menuName]} size='lg' />
            </MenuIconStyle>
          )
        })
      }
    </MenuContainerStyle>
  )
}