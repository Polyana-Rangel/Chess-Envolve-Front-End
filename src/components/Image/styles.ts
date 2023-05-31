import styled from "styled-components";
import { ImageProps } from "../../interfaces/props/ImageProps";

export const Container = styled.img<ImageProps>`
  ${(props) => `width:${props.width}`};
`;