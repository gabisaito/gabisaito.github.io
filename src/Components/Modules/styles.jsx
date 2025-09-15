import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

const overlayColor = '#196860';

export const CardContainer = styled(Box)`
  width: 100%; // Ajustado para ser 100% da coluna do Grid
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
`;

export const ImageWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${overlayColor};
  opacity: 0.5;
`;

export const ContentContainer = styled(Box)`
  padding: 16px;
`;

export const ModuleTitle = styled(Typography)`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
`;

export const Title = styled(Typography)`
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
`;

export const Subtitle = styled(Typography)`
  font-size: 0.875rem;
  color: #888;
`;