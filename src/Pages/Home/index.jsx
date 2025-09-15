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
    BenefitContainer_b,
  TextContent_b,
  MainTitle_b,
  SubTitle_b,
  BenefitList_b,
  BenefitItem_b,
  CheckIcon_b,
  HighlightText_b,
  DetailsImage_b,
} from './styles';

import ImpactoImage from './assets/jovens.png';
import TabletImageSrc from './assets/tablet.png';
import DetalheImage from './assets/detalhes.png';

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

<BenefitContainer_b>
            <TextContent_b>
                <MainTitle_b>O Nilo é para você?</MainTitle_b>
                <SubTitle_b>Confira nossos objetivos.</SubTitle_b>

                <BenefitList_b>
                    <BenefitItem_b>
                        <CheckIcon_b>✓</CheckIcon_b>
                        <Typography component="span" sx={{ color: 'inherit' }}>
                            Você quer aprender sobre <HighlightText_b>educação financeira</HighlightText_b> de forma <HighlightText_b>prática e gamificada;</HighlightText_b>
                        </Typography>
                    </BenefitItem_b>
                    <BenefitItem_b>
                        <CheckIcon_b>✓</CheckIcon_b>
                        <Typography component="span" sx={{ color: 'inherit' }}>
                            Você precisa de uma ferramenta para te ajudar a <HighlightText_b>organizar seu orçamento</HighlightText_b>, monitorar suas entradas e saídas, e gerenciar seus gastos de forma eficaz;
                        </Typography>
                    </BenefitItem_b>
                    <BenefitItem_b>
                        <CheckIcon_b>✓</CheckIcon_b>
                        <Typography component="span" sx={{ color: 'inherit' }}>
                            Você deseja acompanhar seu <HighlightText_b>progresso financeiro</HighlightText_b> e comparar seu desempenho com o de amigos ou até mesmo com outros usuários;
                        </Typography>
                    </BenefitItem_b>
                    <BenefitItem_b>
                        <CheckIcon_b>✓</CheckIcon_b>
                        <Typography component="span" sx={{ color: 'inherit' }}>
                            Você quer ter acesso a <HighlightText_b>notícias semanais</HighlightText_b> e artigos que te mantêm atualizado sobre o mundo dos investimentos e das finanças.
                        </Typography>
                    </BenefitItem_b>
                </BenefitList_b>
            </TextContent_b>

            <DetailsImage_b src={DetalheImage} alt="Detalhes visuais e ícones da plataforma" />
        </BenefitContainer_b>

            <Footer />
        </>
    )
}