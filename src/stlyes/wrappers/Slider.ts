import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .slider {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slider-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .slider-image {
    width: 100%;
    flex-shrink: 0;
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
  @media (min-width: 480px) {
    max-width: 420px;
  }

  @media (min-width: 720px) {
    max-width: 620px;
    .slider {
      max-width: 100%;
    }
  }
  @media (min-width: 992px) {
    max-width: 100%;

    .slider-container {
      height: 400px;
    }
    .slider {
      max-width: 100%;
      border-radius: 8px;
      height: 500px;
    }
    .slider-image {
      border-radius: 8px;
    }
    img {
      width: 100%;
      height: fit-content;
      object-fit: contain;
      border-radius: 8px;
    }
  }
`;
