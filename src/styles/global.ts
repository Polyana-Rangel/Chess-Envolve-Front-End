import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme["blue-300"]} ${(props) =>
  props.theme["blue-100"]};
  }

  *::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: ${(props) => props.theme["blue-300"]};
}

*::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme["blue-100"]};
  border-radius: 20px;
  border: 3px solid ${(props) => props.theme["blue-300"]};
}
  *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["blue-300"]};
    color: ${(props) => props.theme.gray};
    --webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    
    height: 100vh;
    width: 100%;
  }

  body, input, button, textarea {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.3rem;

    @media screen and (max-width: 1359px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 1024px) {
      font-size: 0.7rem;
    }
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  
  button {
    cursor: pointer;
    border: 0;
  }
`;
