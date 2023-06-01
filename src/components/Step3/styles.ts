import styled from "styled-components";
import { BoxProps } from "../../interfaces/props/boxProps";

export const Container = styled.section`
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
  width: 11rem;
  margin: 0 2rem 1.5rem 1.5rem;
  align-self: flex-end;
  color: #fff;
  display: flex;
  justify-content: center;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme["blue-400"]} 0%, ${props.theme["blue-500"]} 100%)`};

  transition: all 0.6s ease;

  &:hover {
    transform: perspective(1px) scale(1.1);
    
    background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme["blue-400"]} 100%, ${props.theme["blue-500"]} 0%)`};
  }

  img {
    margin: 0 0.5rem 0 0;
  }
`;

export const BackgroundFont = styled.div<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem 0.5rem 2rem;
  margin: 0 0 0 1rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 0.2rem;
  background: ${(props) => props.theme["blue-300"]};
`;