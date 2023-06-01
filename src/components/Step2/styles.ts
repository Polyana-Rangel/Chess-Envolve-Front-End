import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-height: 20rem;
  padding: 1rem;
  border-radius: 4px;
  background: ${(props) => props.theme["blue-200"]};

  overflow-y: scroll;

  p + div {
    margin: 1rem 0 0 0;
  }

  @media screen and (max-width: 768px) {
    margin: 2rem 0 0 0;
  }
`;

export const Piece = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 0 1rem 0 2rem;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme["blue-700"]};
  background: ${(props) => props.theme["blue-100"]};
`;

export const Value = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme["blue-800"]};
  padding: 0 2rem 0 2rem;
  margin: 1rem;
  border-radius: 0.2rem;
  max-width: 6rem;
`;

export const Button = styled.button`
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme["blue-900"]} 0%, ${props.theme["blue-1000"]} 100%)`};
  padding: 0.1rem 0.7rem;
  border-radius: 0.2rem;
  transition: all 0.6s ease;

  &:hover {
    transform: perspective(1px) scale(1.1);
    
    background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme["blue-900"]} 100%, ${props.theme["blue-1000"]} 0%)`};
  }
`;
