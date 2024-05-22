import styled, { keyframes } from 'styled-components';
import { FaHockeyPuck } from "react-icons/fa6";
import { LiaHockeyPuckSolid } from "react-icons/lia";


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
    top: 8px;
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
    top: 8px;
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
