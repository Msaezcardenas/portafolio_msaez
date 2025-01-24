import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 56rem;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  border-bottom: 2px solid #ccc;
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  /* color: ${({ theme }) => theme.colors.text}; */

  ul {
    display: flex;
    gap: 4rem;
    font-size: 1.3rem;
    line-height: 1.75rem;
    font-weight: 500;
  }
  img {
    width: 60px;
    height: auto;
  }

  svg {
    width: 20px;
    height: auto;
    color: ${({ theme }) => theme.colors.text};
  }
`;
