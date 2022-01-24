import styled from "styled-components";
import {Device} from "../Layout/responsive/Devices";

export const Grid = styled.section`
  background-color: orangered;
  display: grid;
  padding: 5px 30px;
  margin: 0 auto;
  width: 60%;
  height: fit-content;
  grid-auto-flow: dense;
  gap: ${props => props.gap}px;
  grid-template-rows: repeat(${props => props.rows}, 350px);
  @media only screen and ${Device.mobileS} {
    grid-template-columns: repeat(auto-fit, minmax(90%, 1fr))
  }
  @media only screen and ${Device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(${props => props.size}px, 1fr));
    width: 90%;
  }
  a {
    text-decoration: none;
  }
`;