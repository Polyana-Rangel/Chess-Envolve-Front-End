import styled from "styled-components";
import { ImageProps } from "../../interfaces/props/ImageProps";

export const Container = styled.img<ImageProps>`
  width: ${(props) => props.width};
`;