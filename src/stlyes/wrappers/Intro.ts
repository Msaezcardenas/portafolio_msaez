import styled from 'styled-components';

export const Wrapper = styled.section`
  .intro {
    display: grid;
    grid-template-columns: auto 2fr 1.5fr;
    align-items: center;
    height: 60vh;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .icon {
    height: 50px;
    width: auto;
    border: 1px solid var(--grey-300);
    border-radius: 50%;
    padding: 10px;
    gap: 1rem;
    background-color: none;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    &:hover {
      transform: scale(1.1);
      filter: brightness(1.5);
    }
  }

  .icon.cv {
    color: ${({ theme }) => theme.colors.primary};
  }

  .avatar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .avatar {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1.5rem;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .role {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.title};
    font-weight: 900;
    line-height: 1.5rem;
  }

  h3 {
    line-height: 3rem;
    font-weight: 700;
    font-size: 1.125rem;
  }

  p {
    letter-spacing: 1px;
    line-height: 1.25rem;
    font-weight: 600;
  }
`;
