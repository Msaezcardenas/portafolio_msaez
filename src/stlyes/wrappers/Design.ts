import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  margin: 3rem auto;
  align-items: center;
  width: 100%;
  .colors {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }

  .item-color {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    text-align: center;
    align-content: center;
    color: white;
    &.bg {
      background-color: #ffe785;
      color: #333333;
    }
    &.color {
      background-color: #333333;
    }
    &.secondary {
      background-color: #f96900;
      color: #333333;
    }
    &.cta {
      background-color: #1c7c54;
    }
  }
`;
