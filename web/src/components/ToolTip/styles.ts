import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #e63946;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: -290%;
    transform: translateX(-50%);

    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: #e63946 transparent;
      border-width: 10px 10px 0 10px;
      top: 100%;
      position: absolute;
      right: 0%;
      transform: translateX(-10%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
