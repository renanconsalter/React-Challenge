import styled from 'styled-components';
import { colorPalette, breakpoints } from '../../styles/theme';

export const Header = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  background-color: ${colorPalette.white};
  padding: 8px 0px 8px 15px;

  ${breakpoints.xl} {
    padding-left: 390px;
  }
`;
