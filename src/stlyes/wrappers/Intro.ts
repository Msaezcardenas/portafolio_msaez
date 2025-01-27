import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 80px;
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .social-and-avatar {
    display: flex;
    padding: 1rem;
    width: 100%;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .about {
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
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

  @media (min-width: 768px) {
    padding: 2rem 1rem;
    width: 90%;

    .intro {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3rem;
    }
    .social-and-avatar {
      padding: 0;
    }

    .avatar-container {
      order: 1;
    }

    .about {
      text-align: left;
      padding: 1rem;
    }

    .avatar {
      width: 250px;
      height: 250px;
    }
  }

  @media (min-width: 992px) {
    width: 100%;
  }
`;
