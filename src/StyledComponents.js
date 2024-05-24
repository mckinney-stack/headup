import styled, { keyframes } from 'styled-components';
import { FaHockeyPuck } from "react-icons/fa6";


const slideIn = keyframes`
  0% {
    transform: translateX(1500%);
  }
  100% {
    transform: translateX(0);
  }
`;
const slideOut = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(1500%);
    }
`;


export const StyledH1 = styled.h1`
    display: block;
    font-size: 200px;
    font-weight: 600;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 120px;
    }

    @media (max-width: 480px) {
        font-size: 31.9vw;
        line-height: 38.4vw;
    }
`;

export const StyledH1Number = styled(StyledH1)`
    @media (max-width: 480px) {
        font-size: 63.8vw;
        line-height: 76.8vw;
    }
`;

export const StyledH3 = styled.h3`
    display: block;
    font-size: 128px;
    font-weight: 600;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 80px;
    }

    @media (max-width: 480px) {
        font-size: 60px;
    }
`;

export const StyledH6 = styled.h6`
    display: block;
    font-size: 64px;
    font-weight: 600;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 30px;
    }
`;

export const StyledFaHockeyPuck = styled(FaHockeyPuck)`
    position: relative;
    height: 40px;
    width: fit-content;
    top: 44px;
    margin-left: 40px;

    @media (max-width: 768px) {
        height: 40px;
        margin-left: 40px;
    }

    @media (max-width: 480px) {
        height: 40px;
        margin-left: 40px;
    }
`;

export const StyledFaHockeyPuckIn = styled(FaHockeyPuck)`
    position: relative;
    height: 40px;
    width: fit-content;
    top: 44px;
    margin-left: 40px;
    animation: ${slideIn} 1.2s ease-out forwards;

    @media (max-width: 768px) {
        height: 30px;
        margin-left: 20px;
    }

    @media (max-width: 480px) {
        height: 24px;
        margin-left: 12px;
    }
`;

export const StyledFaHockeyPuckOut = styled(FaHockeyPuck)`
    position: relative;
    height: 40px;
    width: fit-content;
    top: 8px;
    margin-left: 40px;
    animation: ${slideOut} 1.6s ease-in-out forwards;
    animation: display none 1.6s ease-in-out forwards;
    animation-delay: 1s;

    @media (max-width: 768px) {
        height: 30px;
        margin-left: 20px;
    }

    @media (max-width: 480px) {
        height: 20px;
        margin-left: 10px;
    }
`;

export const StyledTimer = styled.div`
  text-align: center;
  margin: 24px auto 48px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
`;

export const TimeDisplay = styled.div`
  display: inline-block;
  text-align: center;
  font-family: 'Space Mono', monospace;
`;


export const StyledButton = styled.button.attrs(props => ({
    id: props.id,
  }))`
    /* Default styles */
    padding: 8px 48px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  
    /* Styles based on id */
    background-color: ${props => {
      switch (props.id) {
        case 'play':
          return 'green';
        case 'stop':
          return 'red';
        case 'reset':
          return 'blue';
        default:
          return 'gray';
      }
    }};

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.95);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }

    & > svg {
        margin-left: 8px;
    }
  `;


