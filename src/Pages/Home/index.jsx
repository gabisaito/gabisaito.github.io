import React from 'react';
import { Box } from '@mui/material';

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

            <Footer />
        </>
    )
}