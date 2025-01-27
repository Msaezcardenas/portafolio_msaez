import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 56rem;
  margin: 0 auto;
  margin-top: 6rem;

  .link {
    height: 40px;
    width: auto;
    border: 1px solid var(--grey-300);
    border-radius: 50%;
    padding: 10px;
    gap: 1rem;
    background-color: none;
    cursor: pointer;
    box-shadow: var(--shadow-2);
  }

  .title {
    display: flex;
    align-items: baseline;
    gap: 2rem;
  }

  .date {
    display: flex;
    gap: 0.5rem;
    height: 0px;
    align-items: center;
  }

  button {
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing);
    padding: 0.5rem 0.75rem;
    box-shadow: var(--shadow-1);
    text-transform: capitalize;
    display: inline-block;
    box-shadow: var(--shadow-2);
  }

  h1 {
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
  }

  @media (min-width: 768px) {
  }
`;
