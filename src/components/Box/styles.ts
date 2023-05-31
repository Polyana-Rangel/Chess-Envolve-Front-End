import styled from "styled-components";

interface ContainerProps {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  background?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  flex?: string;
  flexWrap?: string;
  borderradius?: string;
  
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  border-radius: ${(props) => props.borderradius || "0"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  flex: ${(props) => props.flex || "none"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  gap: ${(props) => props.gap || "0"};
  background: ${(props) => props.background || "none"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
`;
