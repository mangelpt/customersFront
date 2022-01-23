import styled from "styled-components";
import {Device} from "../Layout/responsive/Devices";

export const HeaderContainer = styled.header`
  background-color: #f2f2f2;
  height: 70px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  display: grid;
  grid-auto-rows: 70px;
  @media only screen and ${Device.mobileS} {
    margin-bottom: 90px;
  }
  @media only screen and ${Device.tablet} {
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled.span`
  width: 100%;
  display: flex;
  @media only screen and ${Device.mobileS} {
    justify-content: center;
  }
  @media only screen and ${Device.tablet} {
    justify-content: start;
  }
  svg {
    fill:  #C18C02;
    width: 200px;
    height: 70px;
  }
`;
