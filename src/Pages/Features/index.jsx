import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';
import Modules from '../../Components/Modules/index';

import {
  PageContainer,
  ContentContainer,
  SectionTitle,
  DescriptionText,
  ModulesGrid
} from './styles';

import module1Image from './assets/module1.jpg';
import module2Image from './assets/module2.jpg';
import module3Image from './assets/module3.jpg';
import module4Image from './assets/module4.jpg';
import module5Image from './assets/module5.jpg';
import module6Image from './assets/module6.jpg';
import module7Image from './assets/module7.jpg';
import module8Image from './assets/module8.jpg';

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
        <DescriptionText>Explore artigos e conteúdos baseados nos oito módulos da ANBIMA para aprender de forma constante.</DescriptionText>

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
      <Footer />
    </PageContainer>
  );
}
 