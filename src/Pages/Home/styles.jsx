import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

/* Hero */

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

/* Stats */

const textColor = '#196860';
const subStatColor = '#818181';

export const StatsContainer = styled(Box)`
  width: 100%;
  padding: 80px 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: ${textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  
  @media (min-width: 600px) {
    padding: 100px 50px;
  }
`;

export const MainHeadline = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  max-width: 90%; /* Reduzido o max-width para forçar a quebra de linha */
  margin: 0 auto 30px;
  text-align: center;

  background-image: linear-gradient(to right, #1E847A, #303030);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #1E847A;
  
  @media (min-width: 600px) {
    font-size: 2.5rem;
    max-width: 90%;
  }

  @media (min-width: 900px) {
    font-size: 3.5rem;
    max-width: 80%;
    line-height: 1.15;
  }
`;

export const SubHeadline = styled(Typography)`
  font-size: 0.9rem !important;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto 60px;
  text-align: center !important;
  
  @media (min-width: 600px) {
    font-size: 1.1rem !important;
    line-height: 1.6;
  }
`;

export const StatsGrid = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;
  
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }
`;

export const StatItem = styled(Box)`
  text-align: center;
  padding: 0 10px;
  
  @media (min-width: 600px) {
    flex: 1;
    min-width: unset;
    max-width: 25%;
  }
`;

export const StatNumber = styled(Typography)`
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  
  background-image: linear-gradient(to bottom, #1E1E1E 0%, #1E847A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #1E1E1E;
  
  @media (min-width: 600px) {
    font-size: 3.5rem !important;
  }
`;

export const StatDescription = styled(Typography)`
  font-size: 0.8rem !important;
  color: ${subStatColor};
  line-height: 1 !important;
  
  @media (min-width: 600px) {
    font-size: 1rem !important;
  }
`;