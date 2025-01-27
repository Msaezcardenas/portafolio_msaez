import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;

  h1 {
    text-align: center;
  }
  .skills {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .skill-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .icons {
    display: flex;
    gap: 2rem;
  }

  .icon {
    height: 50px;
    width: auto;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 8fr;
    gap: 8rem;
  }
`;
