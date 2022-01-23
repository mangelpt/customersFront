import styled from "styled-components";

export const CircleButton = styled.button`
  background-color: transparent;
  padding: 3px;
  width: 30px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #2f80ed;
  color: #2f80ed;

  svg {
    width: 20px;
  }

  &:hover {
    background-color: rgba(45, 156, 219, 0.2);
  }
`;
