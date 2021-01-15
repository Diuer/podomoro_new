import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import FontAwesomeIcon, { addIcon, listIcon, reportIcon, musicIcon } from '../helper/FontawesomeIconHelper';
import Emitter from '../helper/event';
import GlobalData from "../helper/GlobalData";

import { EVENT, MENU } from '../constants';

const menuIcon = {
  [MENU.FIRST]: addIcon,
  [MENU.SECOND]: listIcon,
  [MENU.THIRD]: reportIcon,
  // [MENU.FOURTH]: musicIcon,
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
    transition: all .5s;
    cursor: pointer;
  }
`;

export default function SliderMenu({ handleSliderVisible, isShowSlider, handleNowMenu, ...props }) {

  const [nowMenu, setNowMenu] = useState(null);

  function updateNowMenu([name]) {
    setNowMenu(name);
  }

  useEffect(() => {
    Emitter.addListener(EVENT.UPDATE_NOW_MENU, updateNowMenu);

    return () => {
      Emitter.removeListener(EVENT.UPDATE_NOW_MENU, updateNowMenu);
    };

  }, []);

  const handleShowSliderContent = (e) => {
    if (!e.target.id) return;

    if (!GlobalData.IsSliderVisible) {
      handleSliderVisible();
    }
    handleNowMenu(e.target.id);
  }

  return (
    <MenuContainerStyle>
      {
        Object.keys(menuIcon).map((menuName, index) => {
          return (
            <MenuIconStyle onClick={handleShowSliderContent} nowColor={(nowMenu === menuName)} key={index}>
              <FontAwesomeIcon id={menuName} icon={menuIcon[menuName]} size='lg' />
            </MenuIconStyle>
          )
        })
      }
    </MenuContainerStyle>
  )
}