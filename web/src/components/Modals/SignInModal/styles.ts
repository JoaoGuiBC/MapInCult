import { shade } from 'polished';
import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  align-items: center;
  justify-content: center;

  h2 {
    margin: 25px 0 50px 0;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  width: 100%;

  height: 100%;

  align-items: center;

  > div {
    margin-bottom: 30px;
  }

  button {
    background: #f4e7d6;

    border: 2px solid #312e38;
    border-radius: 15px;

    height: 65px;
    width: 165px;

    padding: 0 5px 0 5px;
    margin-top: 20%;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#f4e7d6')};
    }
  }
`;
