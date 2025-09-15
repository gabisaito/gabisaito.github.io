import React from 'react';
import { Typography, Link, IconButton, Box, Stack } from '@mui/material';

import {
  FooterContainer,
  TopSection,
  BottomSection,
  LogoImage,
  AppButton,
  SocialIcons,
  PartnershipText
} from './styles';

import NiloLogo from './assets/logo.png'; 
import OsButtons from './assets/os.png'; 
import InstagramIcon from './assets/instagram.svg';
import LinkedinIcon from './assets/linkedin.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <TopSection>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Novidade! Aplicativo em desenvolvimento.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
          Em breve disponível para:
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Link href="#">
            <AppButton src={OsButtons} alt="Baixar App" />
          </Link>
        </Stack>
      </TopSection>

      <BottomSection>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
          <LogoImage src={NiloLogo} alt="Logo Nilo" />
          <SocialIcons direction="row" spacing={2}>
            <IconButton color="inherit" aria-label="LinkedIn" href="https://www.linkedin.com/company/nilo-educacao/">
              <img src={LinkedinIcon} alt="LinkedIn" style={{ width: 24, height: 24 }} />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram" href="https://www.instagram.com/niloeduc/">
              <img src={InstagramIcon} alt="Instagram" style={{ width: 24, height: 24 }} />
            </IconButton>
          </SocialIcons>
        </Box>
        <Box sx={{ mt: { xs: 2, sm: 0 }, textAlign: { xs: 'center', sm: 'right' } }}>
          <PartnershipText>
            Em parceria com © GEDUC Brasil
          </PartnershipText>
          <Typography variant="body2">
            niloeducacao@gmail.com
          </Typography>
        </Box>
      </BottomSection>
    </FooterContainer>
  );
};