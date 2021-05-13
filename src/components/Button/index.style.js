import styled from 'styled-components';
import { colorPalette } from '../../styles/theme';

export const HostGatorButton = styled.button`
  width: 100%;
  max-height: 52px;
  padding: 12px;
  font: normal normal bold 22px/27px Montserrat;
  outline: none;
  border: 0;
  border-radius: 26px;
  color: ${colorPalette.white};
  background-color: ${(props) => props.color};
  transition: 0.2s ease;
  &:hover {
    box-shadow: 0 1px 18px 1px ${(props) => props.color};
  }
`;
