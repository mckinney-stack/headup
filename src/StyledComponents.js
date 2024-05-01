// StyledComponents.js
import styled from 'styled-components';
import { FaHockeyPuck } from "react-icons/fa6";

export const StyledH1 = styled.h1`
  display: block;
  font-size: 200px;
  font-weight: 600;
  margin: 0 auto;
  text-align: center;
`;

export const StyledFaHockeyPuck = styled(FaHockeyPuck)`
    position: relative;
    height: 40px;
    width: fit-content;
    top: 8px;
    margin-left: 40px;
`;
