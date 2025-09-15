import React from 'react';
import { Box, Grid } from '@mui/material';

import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import Modules from '../../Components/Modules/index';

import {
  PageContainer,
  ContentContainer,
  SectionTitle,
  DescriptionText,
  ModulesGrid,

  Section_f,
  TextContent_f,
  FeatureList_f,
  FeatureItem_f,
  FeatureIcon_f,
  FeatureText_f,
  FeatureTitle_f,
  FeatureDescription_f,
  ImageWrapper_f,
  Image_f,
  SubSectionTitle_f,
  SubSectionSubtitle_f,
  lightBackground_f
} from './styles';

import module1Image from './assets/module1.jpg';
import module2Image from './assets/module2.jpg';
import module3Image from './assets/module3.jpg';
import module4Image from './assets/module4.jpg';
import module5Image from './assets/module5.jpg';
import module6Image from './assets/module6.jpg';
import module7Image from './assets/module7.jpg';
import module8Image from './assets/module8.jpg';

import Icon1 from './assets/icone-distribuicao.png';
import Icon2 from './assets/icone-categorizacao.png';
import Icon3 from './assets/icone-relatorios.png';
import Icon4 from './assets/noticias-icone.png';
import Icon5 from './assets/mapeamento-icone.png';
import Tela1 from './assets/tela1.jpg';
import Tela2 from './assets/tela2.jpg';

const modulesData = [
  { id: 1, moduleNumber: 1, imageUrl: module1Image, title: 'Sistema Financeiro Nacional e Participantes do Mercado', subtitle: 'Estrutura, instituições e o papel dos agentes do mercado financeiro.' },
  { id: 2, moduleNumber: 2, imageUrl: module2Image, title: 'Compliance Legal, Ética e Análise do Perfil do Investidor', subtitle: 'Regras de conduta, princípios éticos e identificação do perfil do investidor.' },
  { id: 3, moduleNumber: 3, imageUrl: module3Image, title: 'Noções de Economia e Finanças', subtitle: 'Conceitos econômicos essenciais para a prova e o dia a dia no setor.' },
  { id: 4, moduleNumber: 4, imageUrl: module4Image, title: 'Instrumentos de Renda Fixa, Renda Variável e Derivativos', subtitle: 'Produtos, riscos e aplicações dos produtos financeiros nos diferentes perfis.' },
  { id: 5, moduleNumber: 5, imageUrl: module5Image, title: 'Fundos de Investimentos', subtitle: 'Estrutura, classificação, funcionamento e critérios de suitability para diferentes perfis.' },
  { id: 6, moduleNumber: 6, imageUrl: module6Image, title: 'Previdência Complementar Aberta', subtitle: 'Estratégias para incluir previdência de forma inteligente na carteira do investidor.' },
  { id: 7, moduleNumber: 7, imageUrl: module7Image, title: 'Mensuração e Gestão de Performance e Riscos', subtitle: 'Avaliação de desempenho e principais indicadores de risco.' },
  { id: 8, moduleNumber: 8, imageUrl: module8Image, title: 'Preparação Final para Certificações', subtitle: 'Revisão dos tópicos mais cobrados, dicas práticas para a prova rumo ao CPA-20.' },
];

export default function Features() {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <SectionTitle>Funcionalidades que se encaixam na sua rotina.</SectionTitle>
        <SubSectionTitle_f>Explore artigos e conteúdos baseados nos oito módulos da ANBIMA.</SubSectionTitle_f>
          <SubSectionSubtitle_f>
            Em cada módulo, você terá materiais teóricos, lições curtas e prática gameficada para incentivar a constância e tornar o aprendizado mais envolvente, mesmo para quem tem pouco tempo.
          </SubSectionSubtitle_f>
        <ModulesGrid>
          {modulesData.map((module) => (
            <Modules
              key={module.id}
              imageUrl={module.imageUrl}
              moduleNumber={module.moduleNumber}
              title={module.title}
              subtitle={module.subtitle}
            />
          ))}
        </ModulesGrid>
      </ContentContainer>

      <Section_f background={lightBackground_f}>
        <TextContent_f>
          <SubSectionTitle_f>Controle suas finanças em um só lugar.</SubSectionTitle_f>
          <SubSectionSubtitle_f>
            Administrar seu dinheiro pode ser fácil. Com nosso gerenciador, você centraliza a organização e o planejamento da sua vida financeira em um só lugar.
          </SubSectionSubtitle_f>
          <FeatureList_f>
            <FeatureItem_f>
              <FeatureIcon_f src={Icon1} alt="Ícone de distribuição de salário" />
              <FeatureText_f>
                <FeatureTitle_f>Acompanhamento da distribuição do seu saldo</FeatureTitle_f>
                <FeatureDescription_f>
                  Monitore a alocação do seu dinheiro em cada área. Com isso, você tem total controle sobre seus recursos.
                </FeatureDescription_f>
              </FeatureText_f>
            </FeatureItem_f>
            <FeatureItem_f>
              <FeatureIcon_f src={Icon2} alt="Ícone de categorização de gastos" />
              <FeatureText_f>
                <FeatureTitle_f>Categorização de gastos</FeatureTitle_f>
                <FeatureDescription_f>
                  Organize seus gastos de forma clara e inteligente. Assim, você identifica padrões e controla melhor suas finanças.
                </FeatureDescription_f>
              </FeatureText_f>
            </FeatureItem_f>
            <FeatureItem_f>
              <FeatureIcon_f src={Icon3} alt="Ícone de relatórios" />
              <FeatureText_f>
                <FeatureTitle_f>Reports regulares do seu desempenho</FeatureTitle_f>
                <FeatureDescription_f>
                  Receba relatórios periódicos sobre sua saúde financeira. Isso ajuda a acompanhar seu progresso e a ajustar hábitos.
                </FeatureDescription_f>
              </FeatureText_f>
            </FeatureItem_f>
          </FeatureList_f>
        </TextContent_f>
        <ImageWrapper_f>
          <Image_f src={Tela1} alt="Interface da plataforma Nilo para controle financeiro" />
        </ImageWrapper_f>
      </Section_f>

      <Section_f>
        <ImageWrapper_f>
          <Image_f src={Tela2} alt="Interface da plataforma Nilo para notícias" />
        </ImageWrapper_f>
        <TextContent_f>
          <SubSectionTitle_f>Mantenha-se atualizado sobre as novidades do mercado.</SubSectionTitle_f>
          <SubSectionSubtitle_f>
            Novidades sobre finanças, economia e oportunidades de investimentos em renda fixa. Receba dicas e insights para tomar decisões financeiras mais inteligentes.
          </SubSectionSubtitle_f>
          <FeatureList_f>
            <FeatureItem_f>
              <FeatureIcon_f src={Icon4} alt="Ícone de notícias" />
              <FeatureText_f>
                <FeatureTitle_f>Notícias de destaque semanalmente</FeatureTitle_f>
                <FeatureDescription_f>
                  Fique por dentro dos principais acontecimentos em economia e finanças. Assim, você não perde nenhuma oportunidade relevante.
                </FeatureDescription_f>
              </FeatureText_f>
            </FeatureItem_f>
            <FeatureItem_f>
              <FeatureIcon_f src={Icon5} alt="Ícone de mapeamento" />
              <FeatureText_f>
                <FeatureTitle_f>Mapeamento de oportunidades</FeatureTitle_f>
                <FeatureDescription_f>
                  Descubra investimentos promocionais e oportunidades exclusivas no mercado. Isso ajuda você a aproveitar as melhores condições de CDBs e outros produtos.
                </FeatureDescription_f>
              </FeatureText_f>
            </FeatureItem_f>
          </FeatureList_f>
        </TextContent_f>

      </Section_f>

      <Footer />
    </PageContainer>
  );
}