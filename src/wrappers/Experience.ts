import styled from 'styled-components';

export const Wrapper = styled.div`
  /* Contenedor principal de la línea de tiempo */
  margin-top: 2rem;
  .timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 0;
    list-style-type: none;
  }

  /* Items de la línea de tiempo */
  .timeline-item {
    display: flex;
    margin-bottom: 20px;
    position: relative;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: 3%;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #5c6370;
    transform: translateX(-50%);
  }

  .timeline-point {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #5c6370;
    position: absolute;
    left: 3%;
    top: 0;
    transform: translateX(-50%);
  }

  .timeline-content {
    margin-left: 150px;
    padding-left: 20px;
    background-color: #f4f4f4;
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 80%;
  }

  h3 {
    margin-top: 0;
    color: #333;
  }

  span {
    display: block;
    margin-top: 10px;
    color: #999;
  }
  ul {
    list-style-type: disc;
    list-style-position: inside;
  }
  li {
    padding: 0.3rem 0;
  }
`;
