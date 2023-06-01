export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  flexdirection?: string;
  justifycontent?: string;
  alignitems?: string;
  gap?: string;
  background?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  flex?: string;
  flexwrap?: string;
  borderradius?: string;
  children: React.ReactNode;
}