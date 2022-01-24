import styled from "styled-components";
import {Device} from "../Layout/responsive/Devices";

export const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 10px 10px 43px 20px rgba(0,0,0,0.1);
  align-items: center;
  background-color: #ffff;
  height: 300px;
  width: 86%;
  padding: 20px;
  padding-bottom: 5px;
  @media only screen and ${Device.tablet} {
    width: 300px;
  }
`;