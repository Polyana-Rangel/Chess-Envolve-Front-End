import styled from "styled-components";

interface ContainerProps {
size:string;
weight:string;
}

export const Container = styled.p<ContainerProps>`
font-size: ${(props) => props.size};
font-weight: ${(props) => props.weight};

`
