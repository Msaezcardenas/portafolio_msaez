import styled from 'styled-components';

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: 20px;
  border-radius: 12px;

  .item {
    margin: 1rem 1rem 2rem 1rem;
  }
  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.title};
  }
  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  li {
    font-size: 1rem;
    margin-bottom: 8px;
    letter-spacing: 1px;
  }

  @media (min-width: 992px) {
    ul {
      padding-left: 2rem;
    }
  }
`;
