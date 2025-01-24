import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 8fr;
  gap: 8rem;

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
`;
