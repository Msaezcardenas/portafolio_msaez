import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
     font-family: "Quicksand", serif;
    transition: background-color 0.3s ease, color 0.3s ease; 
      overflow-x: hidden;
  }

  a{
     color:${({ theme }) => theme.colors.text};
  }

  svg{
    color:${({ theme }) => theme.colors.text};
  }

  .btn {
    cursor: pointer;;
    border: transparent;
    border-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
    background-color: transparent;
    }

  * {
    box-sizing: border-box;
  }
`;
