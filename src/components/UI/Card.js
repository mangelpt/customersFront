import styled from "styled-components";
export const Card = styled.div`
  cursor: pointer;
  background-color: #ffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 10px 10px 43px 20px rgba(0,0,0,0.1);
  align-items: center;
  width: ${props => props.width || 100}%;
  height: ${props => props.height || 240}px;
`;