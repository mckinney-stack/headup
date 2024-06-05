import styled, { keyframes, css } from 'styled-components';
import { FaHockeyPuck } from "react-icons/fa6";

const colorChange = keyframes`
  0% {
    color: red;
  }
  100% {
    color: inherit;
  }
`;
const slideIn = keyframes`
  0% {
    transform: translateX(3000%);
  }
  100% {
    transform: translateX(0);
  }
`;
const slideFromLeft = keyframes`
  0% {
    transform: translateX(-1500%);
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
const slideFromTop = keyframes`
    0% {
        transform: translateY(-1500%);
    }
    100% {
        transform: translateY(0);
    }
`;


export const StyledH1 = styled.h1`


@keyframes slideFromTop {
    0% {
        transform: translateY(-1500%);
    }
    100% {
        transform: translateY(0);
    }
};

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

    &.gameOver {
        animation: ${slideFromTop} 0.3s ease-out forwards;
    }

`;

export const StyledH1Number = styled(StyledH1)`

    /* animation: ${colorChange} 0.6s ease-in-out; */

    &.countdown {
        animation: ${slideFromLeft} 0.6s ease-out forwards;
    }

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

    animation: ${colorChange} 0.6s ease-in-out;

`;

export const StyledH6 = styled.h6`
    display: block;
    font-size: 64px;
    font-weight: 600;
    margin: 0 auto;
    text-align: center;

    &.animate {
        animation: ${slideFromTop} 0.6s ease-out forwards;
    }

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
    animation: ${slideIn} 0.8s ease-out forwards;

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

export const SlideDownAnimation = styled.div`
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SlideLeftAnimation = styled.div`
  transform: translateX(-150%);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const AnimatedText = styled.div`
  @keyframes moveUpAndOut {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-150vh);
    }
  }
  @keyframes slideFromTop {
    0% {
        transform: translateY(-1500%);
    }
    100% {
        transform: translateY(0);
    }
  }

  animation: ${props => props.$shouldMove ? 'moveUpAndOut 0.8s forwards' : 'slideFromTop 0.8s forwards'};
`;


export const StyledFaHockeyPuckOut = styled(FaHockeyPuck)`
    position: relative;
    height: 40px;
    width: fit-content;
    top: 156px;
    margin-left: 40px;
    animation: ${slideOut} 0.4s ease-in-out forwards;
    animation: display none 0.4s ease-in-out forwards;

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

  @keyframes slideUp {
    0% {
    transform: translateY(1500%);
  }
  100% {
    transform: translateX(0);
  }
}

${props => props.isFirstRender && css`
    animation: slideUp 0.8s ease-in-out forwards;
  `}

`;


export const TimeDisplay = styled.div`
  display: inline-block;
  text-align: center;
  font-family: 'Space Mono', monospace;

  @keyframes fadeOutIn {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    55% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: ${props => props.$shouldFade ? 'fadeOutIn 1.5s ease-in-out' : 'none'};
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

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        1% {
            pointer-events: none;
        }
        100% {
            opacity: 0;
            box-shadow: 0px 0px rgba(0, 0, 0, 0.2);
            pointer-events: none;
        }
    }

    &#play {
        animation: ${props => props.$shouldMove ? 'fadeOut 0.3s forwards' : 'none'};
    }
    &#stop {
        animation: ${props => props.$shouldMove ? 'fadeIn 0.3s forwards' : 'none'};
    }
    
  `;

  /* TEST */