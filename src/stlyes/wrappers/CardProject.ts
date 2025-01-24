import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  .card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
  .card:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  .link-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease, color 0.3s ease;
  }

  .card:hover .link-icon {
    opacity: 1;
    /* color: #fafafa; */
  }

  .img-container {
    width: 350px;
    height: auto;
  }
  .img-container img {
    width: 100%;
  }

  h3 {
    text-align: start;
    margin-bottom: 1cqh;
  }
  .description {
    padding: 1rem;
  }
  .tecnologies {
    justify-content: start;
    margin: 0;
  }
`;
