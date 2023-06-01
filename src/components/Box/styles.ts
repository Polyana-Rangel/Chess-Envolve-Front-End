import styled from "styled-components";
import { BoxProps } from "../../interfaces/props/boxProps";

export const Container = styled.div<BoxProps>`
  display: flex;
  ${(props) => props.borderradius && `border-radius:${props.borderradius}`};
  ${(props) => `flex-wrap:${props.flexwrap}`};
  ${(props) => `flex:${props.flex}`};
  flex-direction: ${(props) => props.flexdirection || "row"};
  justify-content: ${(props) => props.justifycontent || "flex-start"};
  align-items: ${(props) => props.alignitems || "flex-start"};
  ${(props) => `gap:${props.gap}`};
  ${(props) => `background:${props.background}`};
  ${(props) => `width:${props.width}`};
  ${(props) => `height:${props.height}`};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
`;
