import React, { memo, useMemo } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle as filledCircle } from '@fortawesome/free-solid-svg-icons'
import { faCircle as hollowCircle } from '@fortawesome/free-regular-svg-icons'

const CircleStyle = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 3px;
  color: #ea5548;
`;

export default function Circle({ isCompleted = false, callback = () => { }, ...props }) {
  console.log(isCompleted)
  return useMemo(() => {
    return (
      <CircleStyle>
        {
          isCompleted ?
            <FontAwesomeIcon icon={filledCircle} size={'xs'} />
            :
            <FontAwesomeIcon icon={hollowCircle} size={'xs'} />
        }
      </CircleStyle>
    )
  }, [isCompleted])
}