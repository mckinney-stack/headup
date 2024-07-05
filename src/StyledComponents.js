import styled from 'styled-components';
import { FaHockeyPuck } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';


export const PuckAndPlayContainer = motion.div;

export const containerVariants = {
  initial: { y: '0' },
  animate: { y: '12%', transition: { duration: 2 } },
  exit: { y: '0', transition: { delay: 1 } },
};

export const StyledH1 = styled.h1`

  &.countdown {
        font-size: 176px !important;
    }

    display: flex;
    align-items: baseline;
    font-size: 60px;
    font-weight: 600;
    margin: 0 auto;
    text-align: center;
    will-change: transform, opacity;

    @media (max-width: 768px) {
        font-size: 120px;
    }

    @media (max-width: 480px) {
        /* font-size: 31.9vw;
        line-height: 38.4vw; */
        font-size: 13.4vw;
    }

    @media screen and (min-width: 1024px) and (max-width: 1920px) {
        font-size: 56px;
    }
`;


export const H1HeadUp = ({ children, ...props }) => {
  
  const isDesktop = useMediaQuery({ minWidth: 768 });

  if (isDesktop) {
    return (
      <StyledH1
        initial={{ y: '-100vw' }}
        animate={{ y: 0 }}
        transition={{ type: 'easeInOut', duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        {...props}
      >
        {children}
      </StyledH1>
    );
  } else {
    return (
      <StyledH1>
        {children}
      </StyledH1>
    );
  }
};



export const MobPuckContainer = styled(motion.div)`

        background-color: black;
        color: ivory;
        padding: 32px;
        border-radius: 100%;
        height: 400px;
        width: 400px;
        display: flex; 
        justify-content: center; 
        align-items: center;
        border: 3px white solid;
        box-shadow: 12px 20px #141414;
        margin-right: 24px;  

    @media (max-width: 768px) {
        background-color: black;
        color: ivory;
        padding: 2vw;
        border-radius: 100%;
        height: 88vw;
        width: 88vw;
        display: flex; 
        justify-content: center; 
        align-items: center;
        border: 0.9vw white solid;
        box-shadow: 2vw 4vw #141414;
        margin-right: 2vw;
        /* transform: rotate(4deg); */
    }
`;

export const WhiteStyledMobPuckContainer = styled(MobPuckContainer)`

flex-direction: column !important;
justify-content: center; 

  @media (max-width: 768px) {
        background-color: white !important;
        color: black;
        padding: 2vw;
        border-radius: 100%;
        height: 88vw;
        width: 88vw;
        display: flex; 
        flex-direction: column !important;
        justify-content: center; 
        align-items: center;
        border: 0.9vw black solid;
        box-shadow: 2vw 4vw black;
        margin-right: 2vw;
    }
`;

export const StyledMobPuckContainer = ({ children }) => {

  const isDesktop = useMediaQuery({ minWidth: 768 });

  if (isDesktop) {
    return (
      <MobPuckContainer
        initial={{ y: '-100vh', rotate: 0 }}
        animate={{ y: 0, rotate: 360 }}
        exit={{ x: '100vw' }}
        transition={{ type: 'tween', duration: 1, ease: [0.42, 0, 0.58, 1] }}
      >
        {children}
      </MobPuckContainer>
    );
  } else {
    return (
      <MobPuckContainer
        initial={{ y: '-100vh', rotate: 0 }}
        animate={{ y: 0, rotate: 360 }}
        exit={{ x: '100vw' }}
        transition={{ type: 'tween', duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
      >
        {children}
      </MobPuckContainer>
    );
  }

}; 

export const CenteredContainer = styled.div`

  margin-top: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  height: 50vh; 
  text-align: center; 
  margin-bottom: 96px;

  @media (max-width: 480px) {
        margin-top: 26vw;
        margin-bottom: 14vw;
    }

`;


export const StyledH1Number = styled(StyledH1)`

    display: flex;
    font-size: 200px;
    font-weight: 600;
    margin: 0 auto;
    text-align: center;

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
    font-size: 24px;
    font-weight: 500;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 4.4vw !important;
    }

    @media (max-width: 480px) {
        font-size: 20px;
    }
`;

export const StyledFaHockeyPuck = styled(FaHockeyPuck)`
  position: relative;
  height: 40px;
  width: fit-content;
  

  @media (max-width: 768px) {
    /* display: none; */
    height: 36px;
  }

  @media (max-width: 480px) {
    /* display: none; */
    height: 36px;
  }
`;

const HockeyPuckWrapper = styled(motion.div)`
  display: flex;
  align-items: baseline;
  margin-left: 24px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const HockeyPuck = () => {

  const isDesktop = useMediaQuery({ minWidth: 768 });

  if (isDesktop) {
    return (
      <HockeyPuckWrapper
      animate={{ x: 0, rotate: [0, 718] }}
      transition={{ delay: 0.2, duration: 1 }}      
    >
      <StyledFaHockeyPuck/>
    </HockeyPuckWrapper>
    );
} else {
  return (
    <HockeyPuckWrapper
      animate={{ x: 0, rotate: [0, 718] }}
      transition={{ delay: 0.2, duration: 0.8 }}      
    >
      <StyledFaHockeyPuck/>
    </HockeyPuckWrapper>
  );
}
  

};

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
