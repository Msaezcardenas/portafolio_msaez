import styled from 'styled-components';

export const Wrapper = styled.div`
  .timeline-content h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.title};
  }

  .timeline-content span {
    font-size: 1rem;
    display: block;
    margin-bottom: 15px;
    opacity: 0.8;
  }

  .timeline-content ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  .timeline-content li {
    font-size: 1rem;
    margin-bottom: 8px;
    letter-spacing: 1px;
  }
`;
