import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type: 'success' | 'error';
}

const toastTypeVariations = {
  success: css`
    background: #e6fffa;
    color: #339989;
  `,

  error: css`
    background: #fdded9;
    color: #e63946;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  z-index: 40;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  user-select: none;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type]};

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
