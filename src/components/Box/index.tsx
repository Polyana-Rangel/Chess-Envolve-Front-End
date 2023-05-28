import { Container } from "./styles";

interface BoxProps {
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
  children: React.ReactNode;
}

function Box({
  flexWrap,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  background,
  width,
  height,
  padding,
  margin,
  children,
}: BoxProps) {
  return (
    <Container
    flexWrap={flexWrap}
      flex={flex}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      background={background}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
    >
      {children}
    </Container>
  );
}
export default Box;
