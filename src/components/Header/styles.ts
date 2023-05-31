import styled from "styled-components";

export const Container = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme["blue-600"]};
  margin: 0 2rem 2.3rem 2rem;
`;
