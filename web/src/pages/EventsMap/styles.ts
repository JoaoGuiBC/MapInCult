import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import { MapContainer, Popup } from 'react-leaflet';

interface eventsYear {
  years: number[];
  initialDate: number;
  finalDate: number;
}

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-600px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  animation: ${appearFromLeft} 0.6s;
`;

export const StyledMapContainer = styled(MapContainer)<eventsYear>`
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

export const Sidebar = styled.aside`
  width: 350px;
  background: linear-gradient(329.54deg, #e7d6bf 0%, #f4e7d6 100%);
  padding: 0px 40px;

  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

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

  border: 1px solid #e7d6bf;
  border-radius: 10px;

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
