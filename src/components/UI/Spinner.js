import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export  const Spinner = styled.div`
  margin: auto;
  border: 4px solid rgba(0, 0, 0, .4);
  border-left-color: transparent;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: ${rotate} 2s linear infinite;
`;