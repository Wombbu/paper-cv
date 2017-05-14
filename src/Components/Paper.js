import React from 'react';
import styled from 'styled-components';

const getTranslateString = ({scatterX, scatterY, isReaded}) => {
  return isReaded ? 'translate(0, 0)' : `translate(${scatterX}px, ${scatterY}px)`
}

const getRotateString = ({scatterRotation, isReaded}) => {
  return isReaded ? 'rotate(2deg)' : `rotate(${scatterRotation}deg)`
}

export const PaperTitle = styled.h1`
  font-family: '${props => props.fontFamily}', cursive;
  margin: 0px 0px 10px 0px;
  padding: 0px;
`
export const PaperParagraph = styled.p`
  font-family: '${props => props.fontFamily}', cursive;
  margin: 0px;
  padding: 0px;
`

const PaperWrapper = styled.div`
  min-width: ${props => props.height * (210 / 297)}px;
  min-height: ${props => props.height}px;
  max-width: ${props => props.height * (210 / 297)}px;
  max-height: ${props => props.height}px;

  transform:
    ${props => getTranslateString(props)}
    ${props => getRotateString(props)}
    translateZ(0);
    ;
  background-color: #fff;
  {/*box-shadow: 0px 0px 1px #555;*/}
  padding: 20px;

  transition: transform 1s ease-out;
  position: absolute;
`;

export default PaperWrapper;
