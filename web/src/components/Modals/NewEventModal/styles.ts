import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 10px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  height: 100%;

  align-items: center;
  justify-content: space-around;

  div {
    width: 100%;
  }

  div.position {
    display: flex;

    input {
      width: 50%;
    }

    div + div {
      margin-left: 1px;
    }
  }

  button {
    background: #f4e7d6;
    border: 2px solid #312e38;

    border-radius: 15px;

    height: 45px;
    padding: 0 5px 0 5px;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#f4e7d6')};
    }
  }
`;
