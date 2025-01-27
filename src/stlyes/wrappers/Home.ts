import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: ${({ theme }) => theme.colors.primary}; */

  margin: 0 auto;
  margin-bottom: 3rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 56rem;
  }
`;
