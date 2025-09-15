import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const HeroContainer = styled(Box)`
  width: 100%;
  background: linear-gradient(to bottom, #196860 0%, #229C90 100%);
  color: #FFF6E1;
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow-x: hidden;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 80px;
    padding-left: 50px;
    padding-right: 0;
  }
`;

export const TextSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  padding: 0 20px;
  
  @media (min-width: 900px) {
    align-items: flex-start;
    text-align: left;
    max-width: 50%;
    padding: 0;
  }
`;

export const ImpactBadge = styled.img`
  height: 40px;
  margin-bottom: 20px;
  
  @media (min-width: 900px) {
    height: 50px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  
  @media (min-width: 600px) {
    font-size: 2rem;
  }
  
  @media (min-width: 900px) {
    font-size: 3.5rem;
    line-height: 1.15;
    margin-bottom: 24px;
  }
`;

export const Highlight = styled.span`
  color: #FBA63D;
`;

export const Subtitle = styled.p`
  font-size: 0.8rem;
  line-height: 1.2;
  
  @media (min-width: 600px) {
    font-size: 1rem;
    line-height: 1;
  }

  @media (min-width: 900px) {
    font-size: 1.4rem;
    line-height: 1.3;
  }
`;

export const ImageSection = styled(Box)`
  max-width: 100%;
  width: 100%;
  
  @media (min-width: 900px) {
    max-width: 50%;
    margin-right: 0;
    width: auto;
  }
`;

export const TabletImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;