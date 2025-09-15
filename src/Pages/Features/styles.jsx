import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const PageContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
`;

export const ContentContainer = styled(Box)`
  padding: 20px 20px 48px 20px; /* top right bottom left */

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

export const DescriptionText = styled.p`
  font-size: 1rem !important;
  font-weight: 700 !important;
  margin-bottom: 40px;
  line-height: 1.2;
  color: #196860;

  @media (max-width: 960px) {
    font-size: 0.9rem;
    margin-bottom: 32px;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    margin-bottom: 24px;
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
