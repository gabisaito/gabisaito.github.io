import React from 'react';
import logoImage from './logo.png';

// --- DADOS DAS NOTÍCIAS (ATUALIZADOS E COM IMAGENS VALIDADAS) ---
const newsData = [
    // Destaques da Semana
    {

id: 1,

source: 'Campo Grande News',

title: 'Dólar fecha a R$ 5,32 e Ibovespa volta ao patamar dos 146 mil pontos',

summary: 'Moeda norte-americana segue pressionada por incertezas sobre as contas públicas brasileiras e a política de juros nos EUA.',

imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80',

articleUrl: 'https://www.campograndenews.com.br/economia/dolar-fecha-a-r-5-32-e-ibovespa-volta-ao-patamar-dos-146-mil-pontos',

},

{

id: 2,

source: 'Valor Econômico',

title: 'Exportação de cafés do Brasil aos EUA despenca com tarifas',

summary: 'Brasil remeteu no mês passado 21.679 sacas de 60 kg, representando queda de 79,5%.',

imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw_LN0f7lti4MoJ8NTYpufuLDPEmOjqE37g&s',

articleUrl: 'https://valor.globo.com/financas/noticia/2024/06/20/com-selic-em-1050percent-investidor-deve-manter-aposta-em-renda-fixa-dizem-analistas.ghtml',

},

{

id: 3,

source: 'CNN Brasil',

title: 'Isenção do IR: entenda as diferenças dos projetos',

summary: 'Duas propostas estão em trâmite na Câmara: uma está mais adiantada e a outra tem mais apoio político para avançar',

imageUrl: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportBusinessNews/tagreuters.com2023binary_LYNXMPEJ8R0GZ-FILEDIMAGE.jpg?w=1200&h=900&crop=0',

articleUrl: 'https://www.infomoney.com.br/minhas-financas/nubank-lanca-ferramenta-de-portabilidade-de-investimentos/',

},

{

id: 4,

source: 'Exame',

title: 'Agronegócio brasileiro projeta alta nas exportações de grãos nesse segundo semestre',

summary: 'Apesar dos desafios climáticos, a expectativa é de uma colheita robusta e aumento da demanda internacional, principalmente da Ásia.',

imageUrl: 'https://agriq.com.br/wp-content/uploads/2021/03/Blog-AgriQ_Agronegocio_Creditos-Shutterstock.jpg',

articleUrl: 'https://exame.com/agro/agro-brasileiro-bate-recorde-de-exportacoes-no-1-tri-e-atinge-us-3744-bilhoes/',

},

// Histórico de Notícias

{

id: 5,

source: 'Estadão',

title: 'Governo detalha regras do novo arcabouço fiscal e meta de déficit zero',

summary: 'Equipe econômica apresenta os mecanismos de controle de gastos que substituirão o antigo teto, buscando equilibrar as contas públicas.',

imageUrl: 'https://www.infomoney.com.br/wp-content/uploads/2023/03/metas-de-inflacao.jpg?fit=2164%2C1385&quality=50&strip=all',

articleUrl: 'https://www.estadao.com.br/economia/fazenda-apresenta-plano-para-zerar-deficit-em-2024/',

},

{

id: 6,

source: 'G1 Economia',

title: 'IBGE: Inflação oficial do país, IPCA, acelera e fica em 0,46% em maio',

summary: 'O resultado foi pressionado principalmente pelo aumento nos preços de alimentos e bebidas, impactado pelas enchentes no Sul.',

imageUrl: 'https://portal.estrategia.com/wp-content/uploads/2025/06/o-que-e-ibge-instituto-brasileiro-de-geografia-e-estatistica-ibge-1024x572.png',

articleUrl: 'https://g1.globo.com/economia/noticia/2024/06/11/ipca-inflacao-maio-2024.ghtml',

},

{

id: 7,

source: 'Valor Econômico',

title: 'Balança comercial registra superávit de US$ 8,534 bilhões em maio',

summary: 'O resultado positivo foi impulsionado pelo crescimento nas exportações de produtos básicos e pela queda nas importações.',

imageUrl: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=600&q=80',

articleUrl: 'https://valor.globo.com/brasil/noticia/2024/06/06/balanca-comercial-registra-superavit-de-us-8534-bilhoes-em-maio.ghtml',

},

{

id: 8,

source: 'InfoMoney',

title: 'Ibovespa fecha em queda com exterior negativo e ruído fiscal doméstico',

summary: 'O principal índice da bolsa brasileira foi afetado pela aversão ao risco global e por declarações sobre a política fiscal do governo.',

imageUrl: 'https://investidorsardinha.r7.com/wp-content/uploads/2020/09/ibovespa-o-que-e-e-como-funciona-esse-indice-da-bolsa.jpg',

articleUrl: 'https://www.infomoney.com.br/onde-investir/ibovespa-hoje-o-que-aconteceu-na-bolsa-de-valores-nesta-quinta-feira-20/',

},

{

id: 9,

source: 'Startups',

title: 'Fintech de crédito para PMEs, a "Adiante" recebe aporte de R$ 50 milhões',

summary: 'A rodada de investimento Série B foi liderada por um fundo internacional e visa expandir a base de clientes e a tecnologia da empresa.',

imageUrl: 'https://s2.glbimg.com/ppxTf1IIjCsp717Oadtjy_vTHjY=/e.glbimg.com/og/ed/f/original/2022/04/28/foto_gustavo_blasco_ceo_do_grupo_gcb_credito_divulgacao_1.jpg',

articleUrl: 'https://startups.com.br/investimentos/fintech-adiante-capta-r-52-milhoes-para-financiar-pmes/',

},

{

id: 10,

source: 'Exame',

title: 'PIX se consolida como principal meio de pagamento e impulsiona bancarização',

summary: 'Estudo do Banco Central mostra que o sistema de pagamento instantâneo ultrapassou o cartão de crédito em número de transações.',

imageUrl: 'https://www.tnh1.com.br/variedades/wp-content/uploads/2025/09/mg_5213-e1758815229755.webp',

articleUrl: 'https://exame.com/economia/pix-bate-novo-recorde-e-se-consolida-como-o-meio-de-pagamento-preferido-dos-brasileiros/',

},

{

id: 11,

source: 'Valor Econômico',

title: 'Mercado de Fundos Imobiliários (FIIs) atrai novos investidores com dividendos',

summary: 'A busca por renda passiva e a relativa estabilidade dos FIIs de "tijolo" têm aumentado a liquidez e o interesse na modalidade.',

imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',

articleUrl: 'https://valorinveste.globo.com/produtos/fundos-imobiliarios/noticia/2024/06/20/ifixo-em-queda-dividendos-gordos-de-fiis-de-papel-estao-com-os-dias-contados.ghtml',

},

{

id: 12,

source: 'G1 Economia',

title: 'Setor de serviços cresce 0,5% em abril, aponta IBGE',

summary: 'O resultado marca o quarto mês consecutivo de alta, impulsionado principalmente pelas atividades de transporte e tecnologia da informação.',

imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',

articleUrl: 'https://g1.globo.com/economia/noticia/2024/06/12/setor-de-servicos-cresce-05percent-em-abril-e-bate-recorde-da-serie-aponta-ibge.ghtml',

}

];
export default function NewsPage() {
    
    const styles = {
        page: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh', color: '#343a40' },
        header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2.5rem', backgroundColor: '#ffffff', borderBottom: '1px solid #e9ecef' },
        logo: { height: '36px', width: 'auto' },
        nav: { display: 'flex', gap: '2rem', alignItems: 'center' },
        navLink: { textDecoration: 'none', color: '#6c757d', fontSize: '1rem', fontWeight: '500', position: 'relative', paddingBottom: '0.5rem' },
        activeNavLink: { color: '#212529', borderBottom: '3px solid #ffc107' },
        profileSection: { display: 'flex', alignItems: 'center', gap: '1.5rem' },
        avatar: { width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #dee2e6' },
        mainContent: { padding: '2.5rem' },
        sectionTitle: { fontSize: '1.75rem', fontWeight: '600', marginBottom: '1.5rem', borderBottom: '1px solid #dee2e6', paddingBottom: '1rem' },
        newsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' },
        newsCard: { backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e9ecef', overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s ease, box-shadow 0.2s ease' },
        cardImage: { width: '100%', height: '160px', objectFit: 'cover' },
        cardContent: { padding: '1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 },
        cardSource: { fontSize: '0.8rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' },
        cardTitle: { fontSize: '1rem', fontWeight: '600', margin: '0 0 0.5rem 0', flexGrow: 1 },
        cardSummary: { fontSize: '0.875rem', color: '#6c757d', lineHeight: '1.4', marginBottom: '1rem', flexGrow: 1 },
        cardButton: { display: 'block', width: '100%', padding: '0.75rem', marginTop: 'auto', backgroundColor: '#ffc107', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', textAlign: 'center', color: '#212529' },
    };

    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <img src={logoImage} alt="NILO Logo" style={styles.logo} />
                <nav style={styles.nav}>
                    <a href="/#/trilha-teorica" style={styles.navLink}>Trilha teórica</a>
                    <a href="/#/gestao-financeira" style={styles.navLink}>Gestão financeira</a>
                    <a href="#" style={{...styles.navLink, ...styles.activeNavLink}}>Notícias</a>
                </nav>
                <div style={styles.profileSection}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg" alt="Avatar" style={styles.avatar} />
                </div>
            </header>

            <main style={styles.mainContent}>
                <section>
                    <h2 style={styles.sectionTitle}>Destaques da semana</h2>
                    <div style={styles.newsGrid}>
                        {newsData.slice(0, 4).map(news => (
                            <div key={news.id} style={styles.newsCard}>
                                <img src={news.imageUrl} alt={news.title} style={styles.cardImage} />
                                <div style={styles.cardContent}>
                                    <span style={styles.cardSource}>{news.source}</span>
                                    <h3 style={styles.cardTitle}>{news.title}</h3>
                                    <p style={styles.cardSummary}>{news.summary}</p>
                                    <a href={news.articleUrl} target="_blank" rel="noopener noreferrer" style={styles.cardButton}>Saiba mais</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section style={{marginTop: '3rem'}}>
                    <h2 style={styles.sectionTitle}>Histórico de notícias passadas</h2>
                    <div style={styles.newsGrid}>
                        {newsData.slice(4).map(news => (
                             <div key={news.id} style={styles.newsCard}>
                                <img src={news.imageUrl} alt={news.title} style={styles.cardImage} />
                                <div style={styles.cardContent}>
                                    <span style={styles.cardSource}>{news.source}</span>
                                    <h3 style={styles.cardTitle}>{news.title}</h3>
                                    <a href={news.articleUrl} target="_blank" rel="noopener noreferrer" style={styles.cardButton}>Saiba mais</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}