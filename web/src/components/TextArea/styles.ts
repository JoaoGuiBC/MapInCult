import styled, { css } from 'styled-components';
import Tooltip from '../ToolTip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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

    ${props =>
    props.isErrored &&
    css`
      border: 2px solid #e63946;
      color: #e63946;
    `}

  textarea {
    background: #f4e7d6;
    border: none;
    flex: 1;
    resize: none;
    height: 55px;

    padding-left: 5px;
  }

  > svg {
    height: 20px;
    width: 20px;
  }
`;

export const Error = styled(Tooltip)`
  flex: 0;
  margin-left: 5px;
`;
