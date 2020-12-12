import { keyframes } from 'styled-components';

export const enterAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const appearAnimation = keyframes`
  from {
    width: 35px;
    height: 40px;
    border-radius: 10px;
  }
  to {
    width: 350px;
    height: 100%;
    border-radius: 0;
  }
`;

export const dissappearAnimation = keyframes`
  from {
    width: 350px;
    height: 100%;
    border-radius: 0;
  }
  to {
    width: 35px;
    height: 40px;
    border-radius: 10px;
  }
`;

export const showHeaderAnimation = keyframes`
from {
  transform: translateX(-200px);
}
to {
  transform: translateX(0);
}
`;

export const hideHeaderAnimation = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(-200px);
}
`;
