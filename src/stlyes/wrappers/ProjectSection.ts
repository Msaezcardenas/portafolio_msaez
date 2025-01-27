import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 6rem;

  .cards-container {
    width: 100%;
    max-width: 100%;
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 2rem;
    justify-content: center;
  }

  @media (min-width: 720px) {
    .cards-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
  }

  @media (min-width: 992px) {
    width: 56rem;
    .cards-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      padding: 2rem;
    }
  }
`;
