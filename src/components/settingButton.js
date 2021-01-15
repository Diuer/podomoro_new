import React from "react";
import styled from 'styled-components';

import FontAwesomeIcon, { zipSettingIcon, unZipSettingIcon } from '../helper/FontawesomeIconHelper';

const ContainerStyle = styled.div`
  display: block;
  width: 40px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  
  svg[data-icon=ellipsis-h], svg[data-icon=ellipsis-v]{
    color: #acacac;
  }
`;

export default function SettingButton({ isExpandSetting, handleExpandSetting, ...props }) {

  return (
    <>
      <ContainerStyle onClick={handleExpandSetting}>
      {isExpandSetting ?
        <FontAwesomeIcon icon={zipSettingIcon} size={'xs'} />
        :
          <FontAwesomeIcon icon={unZipSettingIcon} size={'xs'} />}
      </ContainerStyle>
    </>
  )
}