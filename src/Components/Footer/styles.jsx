import styled from 'styled-components';
import { Box, Typography, Stack } from '@mui/material';

export const orangeBackground = '#FBA63D';
export const tealBackground = '#229C90';

export const FooterContainer = styled(Box)`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  color: white;
`;

export const TopSection = styled(Box)`
  background-color: ${orangeBackground};
  color: #333;
  padding: 40px 20px;
  text-align: center;
`;

export const BottomSection = styled(Box)`
  background-color: ${tealBackground};
  color: white;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoImage = styled.img`
  height: 40px;
  margin-right: 20px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const AppButton = styled.img`
  height: 40px;
  margin: 0 10px;

  @media (max-width: 600px) {
    height: 35px;
  }
`;

export const SocialIcons = styled(Stack)`
  margin-top: 10px;
  @media (min-width: 600px) {
    margin-top: 0;
  }
`;

export const PartnershipText = styled(Typography)`
  text-align: center;
  margin-top: 10px;
  font-size: 0.8rem;

  @media (min-width: 600px) {
    text-align: right;
    margin-top: 0;
  }
`;