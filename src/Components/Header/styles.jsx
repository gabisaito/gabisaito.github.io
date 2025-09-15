import styled from 'styled-components';
import { Box, Typography, Button } from '@mui/material';

const tealBackground = '#196860';
const orange = '#FBA63D';
const loginButtonBackground = '#FBA63D';
const loginButtonText = '#196860';
const darkOrange = '#FBA63D';

export const HeaderContainer = styled(Box)`
  width: 100%;
  padding: 10px 20px;
  background-color: ${tealBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
`;

export const MenuContainer = styled(Box)`
  display: flex;
  align-items: center;
  
  @media (max-width: 600px) {
    display: none;
  }
`;

export const HeaderLink = styled(Typography)`
  font-weight: 500;
  margin: 0 15px;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${orange};
  }
`;

export const HeaderLoginButton = styled(Button)`
  background-color: ${loginButtonBackground};
  color: ${loginButtonText};
  text-transform: none;
  font-weight: bold;
  padding: 8px 20px;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${darkOrange};
  }
`;

export const LogoHeader = styled.img`
  height: 40px;
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: ${tealBackground};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  box-shadow: -2px 0 5px rgba(0,0,0,0.2);

  .close-button {
    align-self: flex-end;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
    margin-bottom: 20px;
  }
`;