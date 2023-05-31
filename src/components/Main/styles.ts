import styled from "styled-components";

interface BorderProps {
  border: string;
}

interface ImageProps {
  weight: string;
}

export const Container = styled.main`
  display: flex;
  margin: 0 2rem;
`;
export const Passo1 = styled.div`
  display: flex;
  background: ${(props) => props.theme["blue-200"]};
  flex: 1;
  flex-direction: column;
  padding: 1rem 1rem 1rem 1.2rem;
  border-radius: 0.2rem;
  margin: 0 1.5rem 0 0;
`;

export const Piece = styled.button<BorderProps>`
  display: flex;
  background: ${(props) => props.theme["blue-100"]};
  width: 30%;
  border-radius: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  height: 15rem;
  color: white;
  border: ${(props: BorderProps) => props.border};
`;

export const Passo2 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: ${(props) => props.theme["blue-200"]};
  padding: 1rem;
  border-radius: 0.2rem;
`;

export const Piece2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme["blue-100"]};
  height: 9rem;
  padding: 0 1rem 0 2rem;
  margin: 0.5rem 0;
  border-radius: 0.2rem;
`;

export const Value = styled.div`
  background: ${(props) => props.theme["blue-800"]};
  align-items: center;
  padding: 0 2rem 0 2rem;
  margin: 1rem;
  border-radius: 0.2rem;
`;

export const Passo3 = styled.div`
  display: flex;
  flex-direction: column;
  /* flex:1; */
  background: ${(props) => props.theme["blue-200"]};
  width: 100%;
  margin: 2rem 0 0 0;
  border-radius: 0.2rem;
`;

export const Image = styled.img<ImageProps>`
  width: ${(props) => props.weight};
`;
export const Button = styled.button`
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme["blue-900"]} 0%, ${props.theme["blue-1000"]} 100%)`};
  padding: 0.1rem 0.7rem;
  border-radius: 0.2rem;
`;

export const Button2 = styled.button`
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme["blue-400"]} 0%, ${props.theme["blue-500"]} 100%)`};
  padding: 0.5rem 2rem 0.5rem 2rem;
  border-radius: 0.2rem;
  width: 20%;
  margin: 1.5rem;
  align-self: flex-end;
  color: #fff;
  display: flex;
  justify-content: center;

  img {
    margin: 0 0.5rem 0 0;
  }
`;

export const Selected = styled.div`
  background: ${(props) => props.theme["blue-300"]};
  align-items: center;
  padding: 0.5rem 2rem 0.5rem 2rem;
  margin: 1rem;
  border-radius: 0.2rem;
`;
export const Total = styled.div`
  background: ${(props) => props.theme["blue-300"]};
  align-items: center;
  padding: 0.5rem 2rem 0.5rem 2rem;
  margin: 0 0 0 1rem;

  border-radius: 0.2rem;
`;
