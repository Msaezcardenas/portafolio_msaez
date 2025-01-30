import styled from 'styled-components';

export const Wrapper = styled.div`
  .tecnologies {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
  }

  .icons {
    display: flex;
    gap: 2rem;
  }

  .icon {
    width: 30px;
    height: auto;
  }
  .link-project {
    align-content: center;
    text-align: center;
    border-radius: 10px;
    width: 7rem;
    height: 2.5rem;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    font-weight: 600;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 720px) {
    .tecnologies {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
