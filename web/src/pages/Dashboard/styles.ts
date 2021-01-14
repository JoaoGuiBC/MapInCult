import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { MapContainer, Popup } from 'react-leaflet';

import {
  enterAnimation,
  appearAnimation,
  showHeaderAnimation,
  hideHeaderAnimation,
  dissappearAnimation,
} from '../../styles/animations';

interface menuVisibility {
  isVisible: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  animation: ${enterAnimation} 1s;
`;

export const StyledMapContainer = styled(MapContainer)`
  z-index: 1;
`;

export const StyledPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    background: #e7d6bf;
    border-radius: 5px;
  }

  .leaflet-popup-tip {
    background: #e7d6bf;
  }

  .leaflet-popup-content {
    color: #312e38;
    margin: 8px 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;

    h2 {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }

    p {
      overflow: auto;
      max-height: 200px;

      margin-bottom: 0;
      padding-right: 10px;

      font-size: 17px;
      line-height: 1.5em;
      text-align: justify;
    }

    p + p {
      padding: 0;
    }

    a {
      width: 40px;
      height: 40px;
      color: #312e38;
    }
  }
`;

export const Sidebar = styled.aside<menuVisibility>`
  width: 350px;
  height: 100vh;
  background: linear-gradient(329.54deg, #e7d6bf 0%, #f4e7d6 100%);
  padding: 0px 40px;
  position: absolute;

  box-shadow: rgba(0, 0, 0, 0.8) 0 0 10px;

  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: none;
    visibility: hidden;
    z-index: 0;
  }

  ${props =>
    !props.isVisible &&
    css`
      width: 35px;
      height: 40px;
      padding: 0;
      border-radius: 10px;
      animation: ${dissappearAnimation} 0.3s;

      button {
        svg {
          transform: rotate(180deg);
        }
      }

      header {
        animation: ${hideHeaderAnimation} 0.3s;
        transform: translateX(-200px);
      }
    `}

  ${props =>
    props.isVisible &&
    css`
      width: 350px;
      height: 100vh;
      padding: 0px 40px;
      border-radius: 0;
      animation: ${appearAnimation} 0.3s;

      button {
        svg {
          transform: rotate(0deg);
        }
      }

      header {
        animation: ${showHeaderAnimation} 0.3s;
        transform: translateX(0);
      }
    `}

  button {
    position: absolute;

    background: none;
    border: none;
    z-index: 10;

    right: 2px;
    top: 5px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  visibility: visible;

  color: #312e38;

  img {
    height: 380px;
    width: 380px;
  }

  h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 42px;
    margin-top: 64px;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  z-index: 10;
  right: 25px;
  bottom: 25px;

  width: 40px;
  height: 40px;

  background: #e7d6bf;
  border-radius: 15px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.8) 0 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#e7d6bf')};
  }
`;

export const TimelineContainer = styled.div`
  position: absolute;
  z-index: 10;
  right: 90px;
  bottom: 25px;

  background: #312e38;
  border: 1px solid #e7d6bf;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.8) 0 0 10px;

  padding: 0;
  margin: 0;

  height: 40px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: #e7d6bf;
    border: none;
    border-radius: 10px 0 0 10px;

    height: 40px;
    width: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  p + button {
    border-radius: 0 10px 10px 0;
  }

  p {
    color: #f4e7d6;
    margin: 0 10px;

    display: flex;
    align-items: center;
  }
`;

export const ExcludeButton = styled.button`
  position: absolute;

  right: 9px;
  top: 2px;
  background: none;
  border: none;
`;
