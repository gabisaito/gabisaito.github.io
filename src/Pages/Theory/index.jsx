import React, { useState } from 'react';
import logoImage from './logo.png';
import aulaPdf from './aula-1.pdf'; // PDF importado aqui

// --- Ícones em SVG ---
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#6b7280' }}>
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#10B981' }}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const XCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#EF4444' }}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
);

const MoreHorizontalIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#9ca3af' }}>
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
    </svg>
);

// --- DADOS E IMAGENS PARA O CARROSSEL ---
const module1Image = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&q=80';
const module2Image = 'https://images.unsplash.com/photo-1554224155-1696413565d3?w=300&q=80';
const module3Image = 'https://patrialatina.com.br/wp-content/uploads/2023/08/a-17-1.jpg';
const module4Image = 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=300&q=80';
const module5Image = 'https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/shutterstock_rLcCBI9.jpg';
const module6Image = 'https://media.investnews.com.br/uploads/2022/12/previdencia-complementar.jpg';
const module7Image = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80';
const module8Image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RZ3x5pHm0D1eMXrkAFnsagtfdbEc2RU_nw&s';

const modulesData = [
  { id: 1, moduleNumber: 1, progress: 0, imageUrl: module1Image, title: 'Sistema Financeiro Nacional e Participantes do Mercado', subtitle: 'Estrutura, instituições e o papel dos agentes do mercado financeiro.' },
  { id: 2, moduleNumber: 2, progress: 0, imageUrl: module2Image, title: 'Compliance Legal, Ética e Análise do Perfil do Investidor', subtitle: 'Regras de conduta, princípios éticos e identificação do perfil do investidor.' },
  { id: 3, moduleNumber: 3, progress: 0, imageUrl: module3Image, title: 'Noções de Economia e Finanças', subtitle: 'Conceitos econômicos essenciais para a prova e o dia a dia no setor.' },
  { id: 4, moduleNumber: 4, progress: 0, imageUrl: module4Image, title: 'Instrumentos de Renda Fixa, Renda Variável e Derivativos', subtitle: 'Produtos, riscos e aplicações dos produtos financeiros nos diferentes perfis.' },
  { id: 5, moduleNumber: 5, progress: 0, imageUrl: module5Image, title: 'Fundos de Investimentos', subtitle: 'Estrutura, classificação, funcionamento e critérios de suitability para diferentes perfis.' },
  { id: 6, moduleNumber: 6, progress: 0, imageUrl: module6Image, title: 'Previdência Complementar Aberta', subtitle: 'Estratégias para incluir previdência de forma inteligente na carteira do investidor.' },
  { id: 7, moduleNumber: 7, progress: 0, imageUrl: module7Image, title: 'Mensuração e Gestão de Performance e Riscos', subtitle: 'Avaliação de desempenho e principais indicadores de risco.' },
  { id: 8, moduleNumber: 8, progress: 0, imageUrl: module8Image, title: 'Preparação Final para Certificações', subtitle: 'Revisão dos tópicos mais cobrados, dicas práticas para a prova rumo ao CPA-20.' },
];


export default function TheoryPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModule, setSelectedModule] = useState(null);

    const handleModuleClick = (module) => {
        setSelectedModule(module);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedModule(null);
    };
    
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
        section: { marginBottom: '2.5rem' },
        sectionTitle: { fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' },
        anbimaLogo: { height: '20px', backgroundColor: '#00539b', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' },
        modulesContainer: { display: 'flex', gap: '1.5rem', overflowX: 'auto', scrollSnapType: 'x mandatory', '::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none', msOverflowStyle: 'none', padding: '0.5rem 0.25rem 1.5rem 0.25rem' },
        moduleCard: { flex: '0 0 290px', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', border: '1px solid #e9ecef', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s ease, box-shadow 0.2s ease' },
        clickableCard: { cursor: 'pointer', ':hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' } },
        moduleImage: { width: '100%', height: '150px', objectFit: 'cover' },
        moduleInfo: { padding: '1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 },
        progressWrapper: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' },
        moduleLabel: { fontSize: '0.8rem', color: '#6c757d', fontWeight: '500' },
        progressPercent: { fontSize: '0.85rem', fontWeight: '600', color: '#343a40' },
        progressBar: { height: '100%', backgroundColor: '#20c997', borderRadius: '10px' },
        moduleTitle: { fontSize: '1rem', fontWeight: '600', color: '#212529', margin: '0.75rem 0 0.5rem 0', lineHeight: '1.3' },
        moduleSubtitle: { fontSize: '0.875rem', color: '#6c757d', lineHeight: '1.5', marginTop: 'auto' },
        bottomContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' },
        performanceCard: { backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', border: '1px solid #e9ecef' },
        statsContainer: { display: 'flex', justifyContent: 'space-between', gap: '1.5rem', marginTop: '1.5rem' },
        statBox: { flex: '1', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #e9ecef' },
        statIcon: { marginBottom: '0.75rem' },
        statValue: { fontSize: '2.5rem', fontWeight: 'bold' },
        statLabel: { fontSize: '1rem', color: '#6c757d' },
        goalsCard: { backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', border: '1px solid #e9ecef' },
        goalsList: { listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '1rem' },
        goalItem: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1rem' },
        goalText: { marginLeft: '0.75rem', flex: '1' },
        checkbox: { width: '20px', height: '20px', border: '2px solid #adb5bd', borderRadius: '4px', backgroundColor: '#ffffff' },
        progressBarContainer: { backgroundColor: '#e9ecef', borderRadius: '10px', height: '8px', overflow: 'hidden' },
        modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
        modalContent: { backgroundColor: 'white', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '600px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', position: 'relative' },
        modalTitle: { marginTop: 0, fontSize: '1.75rem', color: '#212529' },
        modalSubtitle: { fontSize: '1rem', color: '#6c757d', marginTop: '-1rem', marginBottom: '1.5rem' },
        modalText: { fontSize: '1rem', lineHeight: '1.6', color: '#495057' },
        modalCloseButton: { position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#6c757d' },
        modalButtonContainer: { display: 'flex', gap: '1rem', marginTop: '2rem' },
        modalButton: { flex: 1, padding: '0.75rem 1rem', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', transition: 'background-color 0.2s' },
        pdfButton: { backgroundColor: '#0d6efd', color: 'white' },
        practiceButton: { backgroundColor: '#198754', color: 'white' },
    };

    return (
        <React.Fragment>
            <div style={styles.page}>
                <header style={styles.header}>
                    <img src={logoImage} alt="NILO Logo" style={styles.logo} />
                    <nav style={styles.nav}>
                        <a href="/" style={{...styles.navLink, ...styles.activeNavLink}}>Trilha teórica</a>
                        <a href="/#/gestao-financeira" style={styles.navLink}>Gestão financeira</a>
                        <a href="/#/noticias" style={styles.navLink}>Notícias</a>
                    </nav>
                    <div style={styles.profileSection}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg" alt="Avatar do usuário" style={styles.avatar} />
                    </div>
                </header>

                <main style={styles.mainContent}>
                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>Meus módulos <span style={styles.anbimaLogo}>ANBIMA</span></h2>
                        <div style={styles.modulesContainer}>
                            {modulesData.map((module) => (
                                <div key={module.id} style={{ ...styles.moduleCard, ...(module.id === 1 && styles.clickableCard) }} onClick={module.id === 1 ? () => handleModuleClick(module) : undefined}>
                                    <img src={module.imageUrl} alt={module.title} style={styles.moduleImage} />
                                    <div style={styles.moduleInfo}>
                                        <div style={styles.progressWrapper}><span style={styles.moduleLabel}>Módulo {module.moduleNumber}</span><span style={styles.progressPercent}>{module.progress}%</span></div>
                                        <div style={styles.progressBarContainer}><div style={{ ...styles.progressBar, width: `${module.progress}%` }}></div></div>
                                        <h3 style={styles.moduleTitle}>{module.title}</h3>
                                        <p style={styles.moduleSubtitle}>{module.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div style={styles.bottomContainer}>
                        <div style={styles.performanceCard}>
                            <h2 style={styles.sectionTitle}>Seu desempenho</h2>
                            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem'}}><span style={{fontWeight: 500}}>Total dos Módulos Anbima</span><div style={{...styles.progressBarContainer, flex: 1, height: '10px'}}><div style={{...styles.progressBar, width: '0%', backgroundColor: '#28a745'}}></div></div><span style={{fontWeight: 'bold'}}>0%</span></div>
                            <div style={styles.statsContainer}>
                                <div style={styles.statBox}><div style={styles.statIcon}><ClockIcon /></div><div style={styles.statValue}>0</div><div style={styles.statLabel}>Total de Questões</div></div>
                                <div style={styles.statBox}><div style={styles.statIcon}><CheckCircleIcon /></div><div style={{...styles.statValue, color: '#10B981'}}>0</div><div style={styles.statLabel}>Total de Acertos</div></div>
                                <div style={styles.statBox}><div style={styles.statIcon}><XCircleIcon /></div><div style={{...styles.statValue, color: '#EF4444'}}>0</div><div style={styles.statLabel}>Total de Erros</div></div>
                            </div>
                        </div>
                        <div style={styles.goalsCard}>
                            <h2 style={styles.sectionTitle}>Metas diárias</h2>
                            <ul style={styles.goalsList}>
                                <li style={styles.goalItem}><div style={styles.checkbox}></div><span style={styles.goalText}>Fazer upload das entradas e saídas do dia</span><MoreHorizontalIcon /></li>
                                <li style={styles.goalItem}><div style={styles.checkbox}></div><span style={styles.goalText}>Atingir pelo menos 80% de acertos em um quiz</span><MoreHorizontalIcon /></li>
                                <li style={styles.goalItem}><div style={styles.checkbox}></div><span style={styles.goalText}>Finalizar Módulo 1</span><MoreHorizontalIcon /></li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>

            {isModalOpen && selectedModule && (
                <div style={styles.modalOverlay} onClick={closeModal}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button style={styles.modalCloseButton} onClick={closeModal}>&times;</button>
                        <h2 style={styles.modalTitle}>{selectedModule.title}</h2>
                        <h3 style={styles.modalSubtitle}>{selectedModule.subtitle}</h3>
                        <p style={styles.modalText}>
                            O Sistema Financeiro Nacional (SFN) organiza o mercado financeiro no Brasil e garante a circulação de dinheiro e crédito na economia. Ele é dividido em três níveis: os órgãos normativos, que criam as regras (como o Conselho Monetário Nacional – CMN); os supervisores, que fiscalizam (Banco Central – BACEN e Comissão de Valores Mobiliários – CVM); e os operadores, que são bancos, corretoras e outras instituições que atuam diretamente com clientes. O CMN define as diretrizes gerais, o BACEN cuida da estabilidade da moeda e do sistema bancário, e a CVM regula e acompanha o mercado de capitais.
                        </p>
                        <div style={styles.modalButtonContainer}>
                            <a 
                                href={aulaPdf} 
                                download="aula-1.pdf"
                                style={{...styles.modalButton, ...styles.pdfButton}}
                            >
                                Baixar PDF do Conteúdo
                            </a>
                            <a href="/#/praticar-quiz-modulo-1" style={{...styles.modalButton, ...styles.practiceButton}}>
                                Praticar
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}