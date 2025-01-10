import styled from 'styled-components';

export const Wrapper = styled.section`
  .intro {
    display: grid;
    grid-template-columns: auto 2fr 1.5fr;
    align-items: center;
    height: 60vh;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .icon {
    height: 48px;
    width: auto;
    border: 1px solid var(--primary-50);
    border-radius: 50%;
    padding: 6px;
    gap: 1rem;
    background-color: var(--white);
    cursor: pointer;
    box-shadow: var(--shadow-1);
  }

  .avatar-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra el avatar y el texto horizontalmente */
    justify-content: center; /* Centra verticalmente dentro de la columna */
    text-align: center; /* Alinea el texto debajo del avatar */
  }

  .avatar {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1.5rem; /* Espacio entre el avatar y el texto */
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .role {
    font-size: 2rem;
    color: #333;
    font-weight: 400;
  }
  h1 {
    line-height: 4rem;
  }

  p {
    font-size: 1rem;
  }
`;
