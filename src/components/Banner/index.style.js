import styled from 'styled-components';
import { colorPalette, breakpoints } from '../../styles/theme';

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${colorPalette.productBlue};
  min-height: 349px;

  ${breakpoints.xs} {
    border-radius: 0 0 0 90% / 2%;
  }

  ${breakpoints.md} {
    border-radius: 0 0 90% / 10%;
  }

  ${breakpoints.lg} {
    border-radius: 0 0 90% / 10% 70%;
  }

  ${breakpoints.xl} {
    border-radius: 0 0 90% 90% / 25%;
  }
`;

export const LeftImage = styled.img`
  left: 0;
  bottom: 0;
  margin-left: 45px;
  position: absolute;
  display: none;

  ${breakpoints.lg} {
    display: inline-block;
    width: 328px;
    height: 246px;
  }

  ${breakpoints.xl} {
    display: inline-block;
    width: 398px;
    height: 296px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.div`
  text-align: center;
  font: normal normal bold 24px/32px Montserrat;
  color: ${colorPalette.white};

  ${breakpoints.xs} {
    max-width: 500px;
  }

  ${breakpoints.sm} {
    max-width: 600px;
  }
`;

export const HostingText = styled.div`
  text-align: center;
  font: normal normal 600 16px/27px Montserrat;
  letter-spacing: 1.6px;
  color: ${colorPalette.lightBlue};
  padding-bottom: 12px;
`;

export const BenefitsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font: normal normal normal 16px/22px Montserrat;
  color: ${colorPalette.lightBlue};

  ${breakpoints.xs} {
    max-width: 300px;
  }

  ${breakpoints.md} {
    max-width: 500px;
  }
`;

export const Description = styled.div`
  padding-bottom: 15px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 5px 0px 10px;
`;

export const RightImage = styled.img`
  right: 0;
  bottom: 0;
  margin-right: 45px;
  position: absolute;
  display: none;

  ${breakpoints.lg} {
    display: inline-block;
    width: 328px;
    height: 246px;
  }

  ${breakpoints.xl} {
    display: inline-block;
    width: 388px;
    height: 296px;
  }
`;

export const ArrowButton = styled.img`
  position: absolute;
  top: 94%;
  z-index: 1;
  cursor: pointer;
`;
