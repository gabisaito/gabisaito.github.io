import React, { useState } from 'react';

// --- DADOS DO QUIZ ---
const quizData = [
    {
        question: 'O Conselho Monetário Nacional (CMN) é considerado o:',
        options: [
            'Órgão máximo do Sistema Financeiro Nacional',
            'Legislador do sistema de previdência complementar aberta',
            'Banco dos bancos',
            'Fiscalizador do mercado de capitais'
        ],
        correctAnswerIndex: 0
    },
    {
        question: 'Qual instituição é responsável por executar a política monetária, emitir papel-moeda e ser o "banqueiro do governo"?',
        options: [
            'Comissão de Valores Mobiliários (CVM)',
            'Banco Nacional de Desenvolvimento Econômico e Social (BNDES)',
            'Banco Central do Brasil (BACEN)',
            'Conselho Monetário Nacional (CMN)'
        ],
        correctAnswerIndex: 2
    },
    {
        question: 'A fiscalização das instituições financeiras e a autorização para o seu funcionamento são atribuições de qual órgão?',
        options: [
            'Receita Federal',
            'Banco Central do Brasil (BACEN)',
            'Conselho de Controle de Atividades Financeiras (COAF)',
            'Comissão de Valores Mobiliários (CVM)'
        ],
        correctAnswerIndex: 1
    },
    {
        question: 'Um investidor que se sente lesado por uma prática irregular em uma oferta pública de ações (IPO) deve recorrer a qual órgão?',
        options: [
            'ANBIMA',
            'B3 (Brasil, Bolsa, Balcão)',
            'Banco Central (BACEN)',
            'Comissão de Valores Mobiliários (CVM)'
        ],
        correctAnswerIndex: 3
    },
    {
        question: 'No Sistema Financeiro Nacional, as Corretoras e Distribuidoras de Títulos e Valores Mobiliários (CTVMs e DTVMs) são classificadas como:',
        options: [
            'Órgãos normativos',
            'Operadores ou intermediários financeiros',
            'Entidades de apoio',
            'Órgãos supervisores'
        ],
        correctAnswerIndex: 1
    },
    {
        question: 'Qual das seguintes atribuições NÃO pertence ao Conselho Monetário Nacional (CMN)?',
        options: [
            'Fixar as diretrizes da política cambial e de crédito',
            'Regular a constituição das instituições financeiras',
            'Adaptar o volume dos meios de pagamento às necessidades da economia',
            'Executar a emissão de papel-moeda'
        ],
        correctAnswerIndex: 3
    },
    {
        question: 'O principal objetivo do Sistema Financeiro Nacional (SFN) é:',
        options: [
            'Garantir o lucro máximo das instituições financeiras',
            'Definir a taxa de juros para empréstimos imobiliários',
            'Intermediar recursos entre os agentes poupadores e os tomadores de recursos',
            'Regular exclusivamente o mercado de seguros e previdência'
        ],
        correctAnswerIndex: 2
    },
    {
        question: 'A ANBIMA, apesar de ser uma entidade privada, desempenha um papel fundamental no mercado através da:',
        options: [
            'Fiscalização punitiva de bancos',
            'Autorregulação e certificação profissional',
            'Definição da taxa Selic meta',
            'Emissão de títulos públicos federais'
        ],
        correctAnswerIndex: 1
    },
    {
        question: 'Quem são os órgãos supervisores do SFN, diretamente subordinados ao CMN?',
        options: [
            'Bancos e Corretoras',
            'ANBIMA e B3',
            'Banco Central (BACEN) e Comissão de Valores Mobiliários (CVM)',
            'Tesouro Nacional e Receita Federal'
        ],
        correctAnswerIndex: 2
    },
    {
        question: 'O Sistema de Pagamentos Brasileiro (SPB) foi estruturado para prover maior segurança e agilidade às transações. Qual seu principal objetivo?',
        options: [
            'Aumentar a arrecadação de impostos sobre transações',
            'Reduzir o risco sistêmico e garantir a liquidação das operações',
            'Oferecer linhas de crédito para pessoas físicas',
            'Controlar o fluxo de investimentos estrangeiros'
        ],
        correctAnswerIndex: 1
    },
];

// --- ÍCONES E LOGO ---
const BackArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const LogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="12" fill="white"/>
        <path d="M22 78V22H37.3V62.4H58.6V78H22Z" fill="#008080"/>
        <path d="M68 53C73.5228 53 78 48.5228 78 43C78 37.4772 73.5228 33 68 33C62.4772 33 58 37.4772 58 43C58 48.5228 62.4772 53 68 53Z" fill="#008080"/>
        <path d="M62 78L83 57" stroke="#008080" strokeWidth="11" strokeLinecap="round"/>
    </svg>
);


export default function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const currentQuestion = quizData[currentQuestionIndex];

    const handleAnswerClick = (index) => {
        if (showAnswer) return;
        setSelectedAnswerIndex(index);
    };
    
    const handleConfirmClick = () => {
        if (selectedAnswerIndex === null) return;

        setShowAnswer(true);

        if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < quizData.length) {
            setCurrentQuestionIndex(nextIndex);
            setSelectedAnswerIndex(null);
            setShowAnswer(false);
        } else {
            setQuizFinished(true);
        }
    };
    
    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswerIndex(null);
        setShowAnswer(false);
        setScore(0);
        setQuizFinished(false);
    };

    const getOptionStyle = (index) => {
        if (!showAnswer) {
            return index === selectedAnswerIndex ? styles.selectedOption : styles.option;
        }
        if (index === currentQuestion.correctAnswerIndex) {
            return styles.correctOption;
        }
        if (index === selectedAnswerIndex) {
            return styles.incorrectOption;
        }
        return styles.option;
    };

    const styles = {
        page: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#333' },
        header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', backgroundColor: '#008080', color: 'white' },
        headerLeft: { display: 'flex', alignItems: 'center', gap: '1rem' },
        backButton: { background: 'none', border: 'none', color: 'white', cursor: 'pointer', textDecoration: 'none' },
        progressText: { fontSize: '1rem', fontWeight: '500' },
        quizContainer: { flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column' },
        moduleTitle: { color: '#008080', fontSize: '1rem', fontWeight: 'bold' },
        questionText: { fontSize: '1.25rem', fontWeight: '500', margin: '0.5rem 0 2rem 0' },
        optionsContainer: { display: 'flex', flexDirection: 'column', gap: '1rem' },
        option: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '2px solid #e0e0e0', cursor: 'pointer', transition: 'all 0.2s ease' },
        selectedOption: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#eef2ff', borderRadius: '8px', border: '2px solid #4f46e5', cursor: 'pointer', boxShadow: '0 0 10px rgba(79, 70, 229, 0.2)' },
        correctOption: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#dcfce7', borderRadius: '8px', border: '2px solid #22c55e', cursor: 'default' },
        incorrectOption: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#fee2e2', borderRadius: '8px', border: '2px solid #ef4444', cursor: 'default' },
        radioCircle: { width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #ccc' },
        radioCircleSelected: { width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #4f46e5', backgroundColor: '#4f46e5' },
        footer: { marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'center' },
        footerButton: { color: 'white', border: 'none', padding: '0.75rem 2.5rem', borderRadius: '20px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s ease', textDecoration: 'none' },
        confirmButton: { backgroundColor: '#008080' },
        nextButton: { backgroundColor: '#005b5b' },
        disabledButton: { backgroundColor: '#a0a0a0', cursor: 'not-allowed' },
        resultsContainer: { textAlign: 'center', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' },
        resultsTitle: { fontSize: '2rem', color: '#008080' },
        resultsScore: { fontSize: '1.25rem', margin: '1rem 0 2rem 0' },
        resultsButtonContainer: { display: 'flex', gap: '1rem' },
    };

    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <div style={styles.headerLeft}>
                    <a href="/#/trilha-teorica" style={styles.backButton}><BackArrowIcon /></a>
                    <span style={styles.progressText}>{quizFinished ? 'Resultado' : `${currentQuestionIndex + 1}/${quizData.length}`}</span>
                </div>
                <LogoIcon />
            </header>
            
            <div style={styles.quizContainer}>
                {quizFinished ? (
                    <div style={styles.resultsContainer}>
                        <h2 style={styles.resultsTitle}>Quiz Finalizado!</h2>
                        <p style={styles.resultsScore}>Sua pontuação final é: <strong>{score} de {quizData.length}</strong></p>
                        <div style={styles.resultsButtonContainer}>
                            <button style={{...styles.footerButton, ...styles.confirmButton}} onClick={restartQuiz}>Refazer Quiz</button>
                            <a href="/#/trilha-teorica" style={{...styles.footerButton, ...styles.nextButton}}>Novo Quiz</a>
                        </div>
                    </div>
                ) : (
                    <>
                        <p style={styles.moduleTitle}>Módulo 1</p>
                        <h2 style={styles.questionText}>{currentQuestion.question}</h2>
                        <div style={styles.optionsContainer}>
                            {currentQuestion.options.map((option, index) => (
                                <div key={index} style={getOptionStyle(index)} onClick={() => handleAnswerClick(index)}>
                                    <div style={index === selectedAnswerIndex && !showAnswer ? styles.radioCircleSelected : styles.radioCircle}></div>
                                    <span>{option}</span>
                                </div>
                            ))}
                        </div>
                        <footer style={styles.footer}>
                            {!showAnswer ? (
                                <button 
                                    style={{
                                        ...styles.footerButton, 
                                        ...(selectedAnswerIndex === null ? styles.disabledButton : styles.confirmButton)
                                    }} 
                                    onClick={handleConfirmClick}
                                    disabled={selectedAnswerIndex === null}
                                >
                                    Confirmar
                                </button>
                            ) : (
                                <button 
                                    style={{...styles.footerButton, ...styles.nextButton}} 
                                    onClick={handleNextQuestion}
                                >
                                    {currentQuestionIndex === quizData.length - 1 ? 'Ver Resultado' : 'Próxima Pergunta'}
                                </button>
                            )}
                        </footer>
                    </>
                )}
            </div>
        </div>
    );
}