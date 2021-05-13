import styled from 'styled-components';
import { breakpoints, colorPalette } from '../../styles/theme';

export const FooterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 42px 0px 27px 0px;
  cursor: pointer;

  ${breakpoints.xl} {
    justify-content: flex-end;
    margin: 18px 0px 27px 0px;
  }
`;

export const FooterText = styled.div`
  color: ${colorPalette.softBlue};
  text-decoration: underline;
  opacity: 0.7;
  font: normal normal normal 12px/12px Montserrat;

  ${breakpoints.xl} {
    position: absolute;
    right: 23%;
  }
`;
