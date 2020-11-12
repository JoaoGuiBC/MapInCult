import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  background: #f4e7d6;
  align-items: center;
  padding: 5px;

  border-radius: 15px;

  height: 90px;

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #312e38;
    `}

  ${props =>
    props.isFilled &&
    css`
      border: 2px solid #312e38;
    `}

  textarea {
    background: #f4e7d6;
    border: none;
    flex: 1;
    resize: none;
    height: 55px;

    padding-left: 5px;
  }
`;
