import styled from 'styled-components';
import { colorPalette, breakpoints } from '../../styles/theme';

export const Container = styled.div`
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoints.sm} {
    min-width: 266px;
  }

  ${breakpoints.md} {
    min-width: 400px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  background-color: ${colorPalette.white};
  border-radius: 5px;
  border: 1px solid ${colorPalette.lightBlueWhite};

  ${(props) => props.featured};

  ${breakpoints.sm} {
    min-width: 266px;
  }

  ${breakpoints.md} {
    min-width: 331px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  margin-bottom: 12px;
`;

export const PlanNameText = styled.p`
  text-align: center;
  font: normal normal bold 26px/26px Montserrat;
  color: ${colorPalette.productBlue};
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${colorPalette.lightBlueWhite};
  margin: 24px 0;
`;

export const CardContent = styled.div`
  padding: 4px 26px;
  text-align: center;
`;

export const OriginalPrice = styled.span`
  color: ${colorPalette.lightBlack};
  text-decoration: line-through;
  font: normal normal normal 13px/19px Montserrat;
`;

export const DiscountPrice = styled.span`
  color: ${colorPalette.lightBlack};
  font: normal normal bold 13px/19px Montserrat;
`;

export const EqualyAsText = styled.p`
  color: ${colorPalette.darkGray};
  text-align: center;
  font: normal normal normal 13px/19px Montserrat;
  margin: 4px 0px 8px;
`;

export const MainPrice = styled.div`
  color: ${colorPalette.productBlue};
  text-align: center;
  padding-bottom: 22px;
`;

export const MainPriceValue = styled.span`
  color: ${colorPalette.productBlue};
  font: normal normal bold 35px/24px Montserrat;
  margin-left: -4px;
`;

export const OneYearDomainFree = styled.div`
  display: flex;
  align-items: center;
  color: ${colorPalette.darkGray};
  font: normal normal bold 15px/20px Montserrat;
  justify-content: center;
  margin: 27px 0px 12px 0px;
`;

export const InfoIcon = styled.img`
  margin-left: 6px;
`;

export const DiscountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span + span {
    align-items: center;
    background-color: ${colorPalette.softGreen};
    border-radius: 224px;
    color: ${colorPalette.white};
    display: flex;
    font: normal normal bold 14px/18px Montserrat;
    height: 23px;
    justify-content: center;
    line-height: 14px;
    margin-left: 8px;
  }
`;

export const DiscountText = styled.span`
  color: ${colorPalette.softBlue};
  font: normal normal normal 14px/18px Montserrat;
`;

export const DiscountChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 23px;
  font: normal normal bold 14px/18px Montserrat;
  text-transform: uppercase;
  background-color: ${colorPalette.softGreen};
  color: ${colorPalette.white};
  margin-left: 6px;
  border-radius: 224px;
`;

export const CardFooter = styled.div`
  padding: 0px 28px;
  & p:nth-child(1),
  & p:nth-child(3) {
    & span {
      border-bottom: 1px dashed ${colorPalette.babyBlue};
    }
  }
`;

export const FeatureText = styled.p`
  color: ${colorPalette.darkGray};
  font: normal normal normal 16px/32px Montserrat;
  text-align: left;
`;

export const FreeFeatureText = styled.span`
  color: ${colorPalette.darkGray};
  text-decoration: underline;
  font-weight: bold;
`;
