import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import { colorPalette } from '../../styles/theme';

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: ${colorPalette.softWhite};
  animation: 1s ${keyframes`${zoomIn}`};
`;
