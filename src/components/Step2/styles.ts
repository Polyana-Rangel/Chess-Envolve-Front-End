import styled from "styled-components";
import { ImageProps } from "../../interfaces/props/ImageProps";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  background: ${(props) => props.theme["blue-200"]};
`;

export const Piece = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9rem;
  margin: 0.5rem 0;
  padding: 0 1rem 0 2rem;
  border-radius: 4px;
  background: ${(props) => props.theme["blue-100"]};
`;

export const Value = styled.div`
  background: ${(props) => props.theme["blue-800"]};
  align-items: center;
  padding: 0 2rem 0 2rem;
  margin: 1rem;
  border-radius: 0.2rem;
`;

export const Image = styled.img<ImageProps>`
  width: ${(props) => props.width};
`;

export const Button = styled.button`
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme["blue-900"]} 0%, ${props.theme["blue-1000"]} 100%)`};
  padding: 0.1rem 0.7rem;
  border-radius: 0.2rem;
`;
