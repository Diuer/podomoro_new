import React, { useMemo } from "react";
import styled from 'styled-components';

import FontAwesomeIcon, { filledCircleIcon, hollowCircleIcon } from '../helper/FontawesomeIconHelper';

const CircleStyle = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 3px;
  color: #ea5548;
`;

export default function Circle({ isCompleted = false, callback = () => { }, ...props }) {
  return useMemo(() => {
    return (
      <CircleStyle>
        {
          isCompleted ?
            <FontAwesomeIcon icon={filledCircleIcon} size={'xs'} />
            :
            <FontAwesomeIcon icon={hollowCircleIcon} size={'xs'} />
        }
      </CircleStyle>
    )
  }, [isCompleted])
}