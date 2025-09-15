import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

const overlayColor = '#196860';

export const CardContainer = styled(Box)`
  flex: 1 1 calc(25% - 20px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  background-color: #fff;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 960px) {
    flex: 1 1 calc(50% - 16px);
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
  }
`;

export const ImageWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 180px;

  @media (max-width: 960px) {
    height: 160px;
  }

  @media (max-width: 600px) {
    height: 140px;
  }
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled(Box)`
  position: absolute;
  top:0; left:0; width:100%; height:100%;
  background-color: ${overlayColor};
  opacity: 0.5;
`;

export const ContentContainer = styled(Box)`
  padding: 16px;

  @media (max-width: 960px) {
    padding: 14px;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
  display: flex;
  flex-direction: column;
`;

export const ModuleTitle = styled(Typography)`
  font-size: 1rem !important;
  font-weight: 500 !important;
  color: #fff;
  position: absolute;
  top:10px;
  left:10px;
  padding: 4px 8px;
  background-color: rgba(0,0,0,0.4);
  border-radius: 4px;

  @media (max-width: 960px) {
    font-size: 0.9rem !important;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem !important;
  }
`;

export const Title = styled(Typography)`
  font-weight: 600 !important;
  line-height: 1.2 !important;
  color: #000;
  margin-bottom: 8px !important;
  word-break: break-word;


  @media (max-width: 960px) {
    font-size: 0.95rem !important;
    margin-bottom: 6px !important;
  }

  @media (max-width: 600px) {
    font-size: 0.875rem !important;
    margin-bottom: 4px !important;
  }
`;

export const Subtitle = styled(Typography)`
  font-size: 0.875rem !important;
  line-height: 1.4 !important;
  color: #888;
  word-break: break-word;

  @media (max-width: 960px) {
    font-size: 0.8rem !important;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem !important;
  }
`;
