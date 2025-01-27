import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: relative;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .nav-links {
    display: none;
  }

  .menu-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .logo img {
    height: 40px;
  }

  .theme-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  /* Sidebar estilos */
  .sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    width: 220px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    z-index: 1001;
  }

  .sidebar.open {
    left: 0;
  }

  .close-btn {
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

  ul li {
    margin-bottom: 1rem;
  }

  ul li a {
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s;
  }

  ul li a:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    transition: color 0.3s, text-decoration 0.5s;
  }

  /* Overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 1000;
    transition: opacity 0.3s ease;
  }

  .overlay.open {
    display: block;
  }

  @media (min-width: 768px) {
    .navbar {
      width: 100%;
    }

    .nav-content {
      max-width: 56rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    ul {
      gap: 3rem;
    }
    .menu-btn {
      display: none;
    }

    .sidebar {
      display: none;
    }

    .navbar ul {
      display: flex;
      flex-direction: row;
    }
  }
`;
