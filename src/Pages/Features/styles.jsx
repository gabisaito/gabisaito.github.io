import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

/* -------------------- PAGE CONTAINER -------------------- */
export const PageContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
`;

export const ContentContainer = styled(Box)`
  padding: 20px 20px 48px 20px;

  @media (min-width: 600px) {
    padding: 30px 30px 64px 30px;
  }

  @media (min-width: 960px) {
    padding: 40px 40px 80px 40px;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 1.6rem !important;
  font-weight: 700 !important;
  line-height: 1.2;
  color: #303030;

  @media (max-width: 960px) {
    font-size: 1.5rem !important;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem !important;
    margin-bottom: 6px !important;
  }
`;

export const ModulesGrid = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 960px) {
    gap: 16px;
  }

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

/* -------------------- COLORS -------------------- */
export const textColor_f = '#303030';
export const highlightColor_f = '#FBA63D';
export const lightBackground_f = '#F7F7F7';
const darkTextColor_f = '#196860';

/* -------------------- SECTIONS -------------------- */
export const Section_f = styled(Box)`
  width: 100%;
  padding: 80px 20px;
  background-color: ${({ background }) => background || 'white'};
  
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 100px 80px;
  }
`;

export const TextContent_f = styled(Box)`
  max-width: 100%;
  margin-bottom: 40px;
  order: 1; /* mobile: texto primeiro */

  @media (min-width: 900px) {
    max-width: 50%;
    padding-right: 40px;
    margin-bottom: 0;
    order: 0; /* desktop: ordem normal */
  }
`;

export const ImageWrapper_f = styled(Box)`
  width: 100%;
  order: 2; /* mobile: imagem depois do texto */

  @media (min-width: 900px) {
    width: 50%;
    margin-right: 40px;
    order: 0; /* desktop: ordem normal */
  }
`;

export const Image_f = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

/* -------------------- SUBSECTION TITLES -------------------- */
export const SubSectionTitle_f = styled(Typography)`
  font-size: 1.3rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  color: ${darkTextColor_f};
  margin-bottom: 10px !important;

  @media (max-width: 960px) {
    font-size: 1.1rem !important;
    margin-bottom: 20px !important;
  }

  @media (max-width: 600px) {
    font-size: 1rem !important;
    margin-bottom: 14px !important;
  }
`;

export const SubSectionSubtitle_f = styled(Typography)`
  font-size: 1rem !important;
  line-height: 1.5 !important;
  margin-bottom: 30px !important;

  @media (max-width: 960px) {
    font-size: 0.85rem !important;
    margin-bottom: 32px !important;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem !important;
    margin-bottom: 24px !important;
  }
`;

/* -------------------- FEATURE LIST -------------------- */
export const FeatureList_f = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const FeatureItem_f = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const FeatureIcon_f = styled.img`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  margin-right: 15px;
`;

export const FeatureText_f = styled(Box)`
  text-align: left;
`;

export const FeatureTitle_f = styled(Typography)`
  font-size: 1rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  color: ${textColor_f};
  
  @media (max-width: 960px) {
    font-size: 0.9rem !important;
  }
  
  @media (max-width: 600px) {
    font-size: 0.85rem !important;
  }
`;

export const FeatureDescription_f = styled(Typography)`
  font-size: 0.9rem !important;
  line-height: 1.2 !important;

  @media (max-width: 960px) {
    font-size: 0.8rem !important;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem !important;
  }
`;

export const TopInvestImg = styled.img`
  max-width: 10% !important;

    @media (max-width: 960px) {
    max-width: 10% !important;
  }

  @media (max-width: 600px) {
    max-width: 25% !important;
  }
`;