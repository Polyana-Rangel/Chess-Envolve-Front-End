import styled from "styled-components";
import { PieceProps } from "../../interfaces/props/PieceProps";
import { ImageProps } from "../../interfaces/props/ImageProps";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 1.5rem 0 0;
  padding: 1rem 1rem 1rem 1.2rem;
  border-radius: 4px;
  background: ${(props) => props.theme["blue-200"]};

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Piece = styled.button<PieceProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  width: 14vw;
  height: 16rem;
  border-radius: 8px;
  background: ${(props) => props.theme["blue-100"]};
  color: ${(props) => props.theme.white};
  border: ${(props) => props.border};
  transition: all 0.6s ease;

  &:hover {
    background: ${(props) => props.theme["blue-800"]};
    transform: perspective(1px) scale(1.1);
  }

  @media screen and (max-width: 768px) {
    width: 25vw;
  }

  @media screen and (max-width: 415px) {
    width: 45vw;
  }
`;

export const Image = styled.img<ImageProps>`
  width: ${(props) => props.width};
`;
