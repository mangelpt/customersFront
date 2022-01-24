import styled from "styled-components";

export const CircleButton = styled.button`
  background-color: transparent;
  padding: 3px;
  width: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #2f80ed;
  color: #2f80ed;
 display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 25px;
  }

  &:hover {
    background-color: rgba(45, 156, 219, 0.2);
  }
`;

export const NormalButton = styled.button`
  background-color: transparent;
  padding: 5px;
  width: 40%;
  cursor: pointer;
  border: 1px solid #2f80ed;
  color: #2f80ed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:disabled{
    background-color:gainsboro;
    cursor: none;
  }
  svg {
    width: 20px;
  }

  &:hover {
    background-color: rgba(45, 156, 219, 0.2);
  }
`;
