import styled from 'styled-components';

export const Wrapper = styled.div`
  .slider {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: auto;
    border-radius: 8px;
  }

  .slider-container {
    display: flex;
    transition: transform 0.5s ease-in-out; /* Animación suave */
  }

  .slider-image {
    width: 100%;
    flex-shrink: 0; /* Evita que las imágenes se reduzcan */
  }

  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 10;
  }

  .slider-button.prev {
    left: 10px;
  }

  .slider-button.next {
    right: 10px;
  }

  .slider-button:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;
