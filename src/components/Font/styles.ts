import styled from "styled-components";
import { FontProps } from "../../interfaces/props/fontProps";

export const Container = styled.p<FontProps>`
font-size: ${(props) => props.size};
font-weight: ${(props) => props.weight};

`
