import styled, { keyframes, css } from 'styled-components';
import { FaHockeyPuck } from "react-icons/fa6";


export const StyledH1 = styled.h1`

    display: flex;
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
    top: 156px;
    margin-left: 40px;

    @media (max-width: 768px) {
        height: 30px;
        margin-left: 20px;
    }

    @media (max-width: 480px) {
        height: 24px;
        margin-left: 12px;
    }
`;

const wobble = css`
  @keyframes wobble {
    0% { transform: rotate(0deg); }
    15% { transform: rotate(8deg); }
    30% { transform: rotate(0deg); }
    45% { transform: rotate(8deg); }
    60% { transform: rotate(0deg); }
    75% { transform: rotate(8deg); }
    90% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
  animation: wobble 1s infinite;
`;

export const StyledFaHockeyPuckIn = styled(FaHockeyPuck)`
    position: relative;
    height: 40px;
    width: fit-content;
    top: 156px;
    margin-left: 40px;

    @media (max-width: 768px) {
        height: 30px;
        margin-left: 20px;
    }

    @media (max-width: 480px) {
        height: 24px;
        margin-left: 12px;
    }

    &.wobble {
        ${wobble}
    }
  
`;


export const StyledFaHockeyPuckOut = styled(FaHockeyPuck)`
    position: relative;
    height: 40px;
    width: fit-content;
    top: 156px;
    margin-left: 40px;

    @media (max-width: 768px) {
        height: 30px;
        margin-left: 20px;
    }

    @media (max-width: 480px) {
        height: 24px;
        margin-left: 12px;
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
      opacity: 0.9;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.95);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }

    & > svg {
        margin-left: 8px;
    }
    
  `;
