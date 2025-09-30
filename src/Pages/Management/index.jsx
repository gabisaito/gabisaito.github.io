import React, { useState } from 'react';
import logoImage from './logo.png'; // 1. Import your logo file

// --- Ícones em SVG ---
const DollarIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const InvestIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>;
const ArrowUpIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>;
const ArrowDownIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>;
const MoreHorizontalIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>;
const FoodIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15s4 3 4 5-4 3-4 5"></path><path d="M18 15s-4 3-4 5 4 3 4 5"></path><path d="M10.5 15.5c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5"></path><path d="M16 4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2"></path></svg>;
const TvIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>;
const SalaryIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="20" height="12" rx="2"></rect><path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"></path><path d="M12 14v-2"></path></svg>;

// --- DADOS E COMPONENTES AUXILIARES ---
const CATEGORIES = {
    gasto: ['Alimentação', 'Transporte', 'Moradia', 'Lazer', 'Streamings', 'Outros'],
    renda: ['Salário', 'Freelance', 'Investimentos', 'Outros']
};

const getCategoryIcon = (category) => {
    switch(category) {
        case 'Alimentação': return <FoodIcon />;
        case 'Streamings': return <TvIcon />;
        case 'Salário': return <SalaryIcon />;
        default: return <DollarIcon />;
    }
}

const BarChart = ({ data, styles }) => {
    const maxValue = 1250; 
    const yAxisLabels = [1250, 1000, 750, 500, 250, 0];

    return (
        <div style={styles.chartContainer}>
            <div style={styles.yAxis}>
                {yAxisLabels.map(label => <div key={label} style={styles.yAxisLabel}>${label.toLocaleString('pt-BR')}</div>)}
            </div>
            <div style={styles.chartArea}>
                {data.labels.map((label, index) => (
                    <div key={label} style={styles.dayColumn}>
                        <div style={styles.bars}>
                            <div style={{...styles.bar, ...styles.incomeBar, height: `${(data.income[index] / maxValue) * 100}%`}}></div>
                            <div style={{...styles.bar, ...styles.expenseBar, height: `${(data.expense[index] / maxValue) * 100}%`}}></div>
                        </div>
                        <div style={styles.xAxisLabel}>{label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function FinancialManagementPage() {
    // --- STATE MANAGEMENT ---
    const [saldoAtual, setSaldoAtual] = useState(0);
    const [gastosESaidas, setGastosESaidas] = useState(0);
    const [rendaEEntradas, setRendaEEntradas] = useState(0);
    const [extrato, setExtrato] = useState([]);

    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tipoEvento, setTipoEvento] = useState('gasto');
    const [categoria, setCategoria] = useState(CATEGORIES.gasto[0]);

    const [chartData, setChartData] = useState({
        labels: ['Sab', 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
        income: [0, 0, 0, 0, 0, 0, 0],
        expense: [0, 0, 0, 0, 0, 0, 0],
    });

    // --- LOGIC ---
    const handleAddEvent = (e) => {
        e.preventDefault();
        const eventValue = parseFloat(valor);
        if (!eventValue || eventValue <= 0 || !descricao || !categoria) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        const newEvent = {
            id: Date.now(),
            value: eventValue,
            description: descricao,
            category: categoria,
            type: tipoEvento,
            timestamp: new Date(),
        };

        setExtrato([newEvent, ...extrato]);

        
        const today = new Date().getDay(); 
        const dayIndex = [1, 2, 3, 4, 5, 6, 0][today]; 
        
        const newChartData = { ...chartData };

        if (tipoEvento === 'gasto') {
            setGastosESaidas(prev => prev + eventValue);
            setSaldoAtual(prev => prev - eventValue);
            newChartData.expense[dayIndex] += eventValue;
        } else {
            setRendaEEntradas(prev => prev + eventValue);
            setSaldoAtual(prev => prev + eventValue);
            newChartData.income[dayIndex] += eventValue;
        }

        setChartData(newChartData);

        setValor('');
        setDescricao('');
    };
    
    // --- STYLES ---
    const styles = {
        page: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh', color: '#343a40' },
        header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2.5rem', backgroundColor: '#ffffff', borderBottom: '1px solid #e9ecef' },
        logo: { height: '36px', width: 'auto' }, // Ajuste aqui: height de 28px para 36px
        nav: { display: 'flex', gap: '2rem', alignItems: 'center' },
        navLink: { textDecoration: 'none', color: '#6c757d', fontSize: '1rem', fontWeight: '500', position: 'relative', paddingBottom: '0.5rem' },
        activeNavLink: { color: '#212529', borderBottom: '3px solid #ffc107' },
        profileSection: { display: 'flex', alignItems: 'center', gap: '1.5rem' },
        avatar: { width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #dee2e6' },
        mainContent: { padding: '2.5rem' },
        gridContainer: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem' },
        sectionTitle: { fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' },
        financeCards: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
        card: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e9ecef' },
        cardTitle: { display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6c757d', marginBottom: '0.5rem' },
        cardValue: { fontSize: '2rem', fontWeight: 'bold' },
        expenseValue: { color: '#dc3545' },
        incomeValue: { color: '#198754' },
        cardUnit: { fontSize: '1rem', color: '#6c757d', marginLeft: '0.25rem' },
        chartSection: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e9ecef' },
        chartHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
        chartFilters: { display: 'flex', gap: '0.5rem' },
        filterButton: { background: '#f8f9fa', border: '1px solid #dee2e6', padding: '0.5rem 1rem', borderRadius: '8px' },
        chartContainer: { display: 'flex', marginTop: '1rem', height: '250px' },
        yAxis: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingRight: '1rem', borderRight: '1px solid #e9ecef', fontSize: '0.75rem', color: '#6c757d' },
        yAxisLabel: { textAlign: 'right' },
        chartArea: { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', paddingLeft: '1rem' },
        dayColumn: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' },
        bars: { display: 'flex', alignItems: 'flex-end', gap: '0.5rem', height: '100%', width: '100%', justifyContent: 'center' },
        bar: { width: '35%', borderRadius: '4px', transition: 'height 0.3s ease' },
        incomeBar: { backgroundColor: 'rgba(25, 135, 84, 0.6)' },
        expenseBar: { backgroundColor: 'rgba(220, 53, 69, 0.6)' },
        xAxisLabel: { marginTop: '0.5rem', fontSize: '0.75rem', color: '#6c757d' },
        formSection: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e9ecef' },
        form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
        formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
        formGroup: { display: 'flex', flexDirection: 'column', gap: '0.25rem' },
        formLabel: { fontSize: '0.875rem' },
        formInput: { padding: '0.75rem', borderRadius: '8px', border: '1px solid #ced4da' },
        formButton: { padding: '0.75rem', borderRadius: '8px', border: 'none', backgroundColor: '#ffc107', fontWeight: 'bold', cursor: 'pointer' },
        statementSection: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e9ecef' },
        statementList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' },
        statementItem: { display: 'grid', gridTemplateColumns: 'auto 1fr auto auto auto', alignItems: 'center', gap: '1rem' },
        itemIcon: { color: '#6c757d' },
        itemInfo: { display: 'flex', flexDirection: 'column' },
        itemCategory: { fontSize: '0.8rem', color: '#6c757d' },
        itemDesc: { fontWeight: '500' },
        itemTimestamp: { fontSize: '0.875rem', color: '#6c757d' },
        itemValue: { fontWeight: 'bold', textAlign: 'right' },
    };

    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <img src={logoImage} alt="NILO Logo" style={styles.logo} />
                <nav style={styles.nav}>
                    <a href="/#/trilha-teorica" style={styles.navLink}>Trilha teórica</a>
                    <a href="#" style={{...styles.navLink, ...styles.activeNavLink}}>Gestão financeira</a>
                    <a href="/#/noticias" style={styles.navLink}>Notícias</a>
                </nav>
                <div style={styles.profileSection}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg" alt="Avatar" style={styles.avatar} />
                </div>
            </header>

            <main style={styles.mainContent}>
                <div style={styles.gridContainer}>
                    <div>
                        <h2 style={styles.sectionTitle}>Suas finanças</h2>
                        <div style={styles.financeCards}>
                            <div style={styles.card}><div style={styles.cardTitle}><DollarIcon /> Saldo atual</div><div style={styles.cardValue}>{saldoAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div></div>
                            <div style={styles.card}><div style={styles.cardTitle}><InvestIcon /> Investido e Reservado</div><div style={styles.cardValue}>0<span style={styles.cardUnit}>reais</span></div></div>
                            <div style={styles.card}><div style={styles.cardTitle}><ArrowUpIcon /> Gastos e Saídas</div><div style={{...styles.cardValue, ...styles.expenseValue}}>{gastosESaidas.toLocaleString('pt-BR')}<span style={styles.cardUnit}>reais</span></div></div>
                            <div style={styles.card}><div style={styles.cardTitle}><ArrowDownIcon /> Renda e Entradas</div><div style={{...styles.cardValue, ...styles.incomeValue}}>{rendaEEntradas.toLocaleString('pt-BR')}<span style={styles.cardUnit}>reais</span></div></div>
                        </div>
                    </div>
                    <div style={styles.chartSection}>
                        <div style={styles.chartHeader}>
                            <h2 style={{...styles.sectionTitle, marginBottom: 0}}>Acompanhamento</h2>
                            <div style={styles.chartFilters}><button style={styles.filterButton}>Sem categoria</button><button style={styles.filterButton}>Semanal</button></div>
                        </div>
                        <BarChart data={chartData} styles={styles} />
                    </div>
                </div>

                <div style={styles.gridContainer}>
                    <div style={styles.formSection}>
                        <h2 style={styles.sectionTitle}>Adicionar eventos</h2>
                        <form style={styles.form} onSubmit={handleAddEvent}>
                            <div style={styles.formRow}>
                                <div style={styles.formGroup}><label style={styles.formLabel}>Valor do evento:</label><input type="number" style={styles.formInput} placeholder="65,90" value={valor} onChange={e => setValor(e.target.value)} /></div>
                                <div style={styles.formGroup}><label style={styles.formLabel}>Tipo de evento:</label><select style={styles.formInput} value={tipoEvento} onChange={e => { setTipoEvento(e.target.value); setCategoria(CATEGORIES[e.target.value][0]); }}><option value="gasto">Gastos e Saídas</option><option value="renda">Renda e Entradas</option></select></div>
                            </div>
                            <div style={styles.formGroup}><label style={styles.formLabel}>Descrição:</label><input type="text" style={styles.formInput} placeholder="Outback" value={descricao} onChange={e => setDescricao(e.target.value)} /></div>
                            <div style={styles.formGroup}><label style={styles.formLabel}>Categoria:</label><select style={styles.formInput} value={categoria} onChange={e => setCategoria(e.target.value)}>{CATEGORIES[tipoEvento].map(cat => <option key={cat} value={cat}>{cat}</option>)}</select></div>
                            <button type="submit" style={styles.formButton}>Adicionar evento</button>
                        </form>
                    </div>
                    <div style={styles.statementSection}>
                        <h2 style={styles.sectionTitle}>Extrato</h2>
                        {extrato.length === 0 ? (<p>Nenhuma transação registrada ainda.</p>) : (
                            <ul style={styles.statementList}>
                                {extrato.map(item => (
                                    <li key={item.id} style={styles.statementItem}>
                                        <div style={styles.itemIcon}>{getCategoryIcon(item.category)}</div>
                                        <div style={styles.itemInfo}><span style={styles.itemCategory}>{item.category}</span><span style={styles.itemDesc}>{item.description}</span></div>
                                        <div style={styles.itemTimestamp}>{item.timestamp.toLocaleString('pt-BR', {day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</div>
                                        <div style={{...styles.itemValue, color: item.type === 'gasto' ? '#dc3545' : '#198754'}}>
                                            {item.type === 'gasto' ? '-' : ''}{item.value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                                        </div>
                                        <MoreHorizontalIcon />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}