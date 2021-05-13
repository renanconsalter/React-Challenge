import React from 'react';
import styled from 'styled-components';

import {
  styled as styledMaterialUI,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

import { colorPalette } from '../../styles/theme';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 45px 0px;
`;

export const Title = styled.div`
  margin-bottom: 8px;
  font: normal normal normal 14px/26px Montserrat;
  color: ${colorPalette.darkBlue};
`;

export const RadioOptions = styledMaterialUI(({ active, ...rest }) => (
  <FormControlLabel {...rest} />
))({
  borderRadius: '21px',
  height: '39px',
  marginLeft: (props) => (props.active ? '-3px' : '1px'),
  marginRight: (props) => (props.active ? '-3px' : '4px'),
  backgroundColor: (props) => (props.active ? `${colorPalette.softBlue}` : `${colorPalette.white}`),
  width: (props) => (props.active ? '109px' : '95px'),
  border: (props) => (props.active ? `1px solid ${colorPalette.softBlue}` : '0px'),
  color: (props) => (props.active ? colorPalette.white : `${colorPalette.darkBlue}`),
  '& .MuiTypography-body1': {
    font: (props) => (props.active ? 'normal normal bold 14px/18px Montserrat' : 'normal normal normal 16px/23px Montserrat'),
  },
  '& .MuiRadio-colorSecondary': {
    color: `${colorPalette.lightBlue}`,
    '&.Mui-checked': {
      color: `${colorPalette.white}`,
    },
  },
});

export const Radio = styledMaterialUI(({ ...rest }) => (
  <RadioGroup {...rest} />
))({
  height: '41px',
  width: '323px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: colorPalette.white,
  borderRadius: '21px',
  border: `1px solid ${colorPalette.lightBlue}`,
});
