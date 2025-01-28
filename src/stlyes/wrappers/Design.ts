import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  margin: 3rem auto;
  align-items: center;
  align-content: center;
  width: 100%;
  .colors {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 15px;
    align-content: center;
    font-size: 14px;
  }

  .item-color {
    height: 60px;
    width: 60px;
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

  @media (min-width: 992px) {
    .colors {
      justify-content: space-around;
      font-size: 16px;
    }
    .item-color {
      height: 80px;
      width: 80px;
    }
  }
`;
