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
  LearningSectionContainer_c,
  SectionTitle_c,
  SectionSubtitle_c,
  CardsGrid_c,
  Card_c,
  CardTitle_c,
  CardText_c,
  CardHighlight_c,
  cardBackground1_c,
  cardBackground2_c,
  cardBackground3_c,
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
                    <ImpactBadge src={ImpactoImage} alt="mais de 2 mil de jovens impactados" />
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
                Apenas 16% dos brasileiros tiveram educação financeira na escola ou faculdade.
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
                    <StatNumber>+2500</StatNumber>
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

           <LearningSectionContainer_c>
      <SectionTitle_c>Conheça nossa trilha de aprendizagem</SectionTitle_c>
      <SectionSubtitle_c>Embarque da Teoria à Prática.</SectionSubtitle_c>

      <CardsGrid_c>
        <Card_c background={cardBackground1_c}>
          <CardTitle_c>Aprenda a Teoria.</CardTitle_c>
          <CardText_c>
            Se aprofunde na economia brasileira e finanças, a partir de <CardHighlight_c>artigos e desafios</CardHighlight_c>.
          </CardText_c>
          <CardText_c>
            Nos baseamos nos conteúdos da <CardHighlight_c>ANBIMA</CardHighlight_c> de maneira simplificada.
          </CardText_c>
          <CardText_c>
            E após aprender, complete os <CardHighlight_c>quizes diários</CardHighlight_c> para reforçar os conteúdos.
          </CardText_c>
        </Card_c>

        <Card_c background={cardBackground2_c}>
          <CardTitle_c>Aplique na Prática.</CardTitle_c>
          <CardText_c>
            Faça uso das nossas ferramentas de <CardHighlight_c>gestão orçamentária</CardHighlight_c>.
          </CardText_c>
          <CardText_c>
            Contabilize suas <CardHighlight_c>entradas e saídas</CardHighlight_c>, categorize e acompanhe os seus gastos.
          </CardText_c>
          <CardText_c>
            Entenda seus <CardHighlight_c>hábitos financeiros</CardHighlight_c> das suas necessidades pessoais e potencialize sua renda.
          </CardText_c>
        </Card_c>

        <Card_c background={cardBackground3_c}>
          <CardTitle_c>Continue se atualizando.</CardTitle_c>
          <CardText_c>
            Fique por dentro do mundo das finanças com <CardHighlight_c>notícias, artigos e ebooks</CardHighlight_c> atualizados semanalmente.
          </CardText_c>
          <CardText_c>
            Aprenda sobre o mercado de <CardHighlight_c>investimentos, economia e fintechs</CardHighlight_c>.
          </CardText_c>
          <CardText_c>
            E acesse uma curadoria exclusiva de <CardHighlight_c orange>ofertas de renda fixa</CardHighlight_c> com as melhores promoções.          </CardText_c>
        </Card_c>
      </CardsGrid_c>
    </LearningSectionContainer_c>

            <Footer />
        </>
    )
}