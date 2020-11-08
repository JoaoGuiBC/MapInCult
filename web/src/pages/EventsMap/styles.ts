import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import { MapContainer, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

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

export const StyledMapContainer = styled(MapContainer)`
  z-index: 1;
`;

export const StyledPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    background: #f4e7d6;
    border-radius: 10px;
  }

  .leaflet-popup-tip {
    background: #f4e7d6;
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
    }

    p {
      font-size: 17px;
      line-height: 1.5em;
      text-align: justify;
    }

    a {
      width: 40px;
      height: 40px;
      color: #312e38;
    }
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  right: 25px;
  bottom: 25px;

  width: 50px;
  height: 50px;

  background: #e7d6bf;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#e7d6bf')};
  }
`;

export const Sidebar = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #e7d6bf 0%, #f4e7d6 100%);
  padding: 0px 40px;

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
