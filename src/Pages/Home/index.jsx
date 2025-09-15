import React from 'react';
import { Box, Typography } from '@mui/material';

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import {
    HeroContainer,
    TextSection,
    ImpactBadge,
    MainTitle,
    Highlight,
    Subtitle,
    ImageSection,
    TabletImage,
    StatsContainer,
    MainHeadline,
    SubHeadline,
    StatsGrid,
    StatItem,
    StatNumber,
    StatDescription,
} from './styles';

import ImpactoImage from './assets/jovens.png';
import TabletImageSrc from './assets/tablet.png';

export default function Home() {
    return (
        <>
            <Header />

            <HeroContainer>
                <TextSection>
                    <ImpactBadge src={ImpactoImage} alt="+4k de jovens impactados" />
                    <MainTitle>
                        Educação financeira pra quem quer juntar a <Highlight>teoria com a prática!</Highlight>
                    </MainTitle>
                    <Subtitle>
                        Conheça a plataforma Nilo, a conexão entre ensino, gestão orçamentária e atualidades.
                    </Subtitle>
                </TextSection>

                <ImageSection>
                    <TabletImage src={TabletImageSrc} alt="Tablet mostrando a plataforma Nilo" />
                </ImageSection>
            </HeroContainer>

       <StatsContainer>
            <MainHeadline>
                1 em 10 brasileiros não sabem como gerir suas finanças e dívidas
            </MainHeadline>

            <SubHeadline>
                Conheça como o <Typography component="span" sx={{ fontWeight: 'bold' }}>Nilo</Typography> contribui para esse problema.
                Desde 2020, ajudando jovens brasileiros com suas finanças pessoais.
            </SubHeadline>

            <StatsGrid>
                <StatItem>
                    <StatNumber>510h</StatNumber>
                    <StatDescription>de mentoria</StatDescription>
                </StatItem>
                <StatItem>
                    <StatNumber>+4000</StatNumber>
                    <StatDescription>jovens impactados</StatDescription>
                </StatItem>
                <StatItem>
                    <StatNumber>+1000</StatNumber>
                    <StatDescription>de questões pra você</StatDescription>
                </StatItem>
                <StatItem>
                    <StatNumber>4,5</StatNumber>
                    <StatDescription>anos de impacto</StatDescription>
                </StatItem>
            </StatsGrid>
        </StatsContainer>

            <Footer />
        </>
    )
}