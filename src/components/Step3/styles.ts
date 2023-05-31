import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0 0 0;
  border-radius: 0.2rem;
  background: ${(props) => props.theme["blue-200"]};
`;

export const Button = styled.button`
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-radius: 0.2rem;
  width: 20%;
  margin: 1.5rem;
  align-self: flex-end;
  color: #fff;
  display: flex;
  justify-content: center;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme["blue-400"]} 0%, ${props.theme["blue-500"]} 100%)`};

  img {
    margin: 0 0.5rem 0 0;
  }
`;

export const BackgroundFont = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem 0.5rem 2rem;
  margin: 1rem;
  border-radius: 0.2rem;
  background: ${(props) => props.theme["blue-300"]};
`;