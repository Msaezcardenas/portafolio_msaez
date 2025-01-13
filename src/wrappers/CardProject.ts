import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  .card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    position: relative; /* Necesario para posicionar elementos hijos */
    transition: box-shadow 0.3s ease, transform 0.3s ease; /* Animaciones para hover */
  }
  .card:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2); /* Ilumina la tarjeta */
    transform: translateY(-5px); /* Eleva la tarjeta ligeramente */
  }

  .link-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5); /* Color inicial */
    opacity: 0; /* Oculto por defecto */
    transition: opacity 0.3s ease, color 0.3s ease;
  }

  .card:hover .link-icon {
    opacity: 1; /* Aparece al hacer hover */
    color: #fafafa; /* Cambia a un color destacado */
  }

  .img-container {
    width: 350px;
    height: auto;
  }
  .img-container img {
    width: 100%;
  }

  h3 {
    text-align: start;
    margin-bottom: 1cqh;
  }
  .description {
    padding: 1rem;
  }
  .tecnologies {
    justify-content: start;
    margin: 0;
  }
`;
